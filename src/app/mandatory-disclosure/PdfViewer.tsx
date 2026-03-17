"use client";

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// Set the worker source for react-pdf (v7 uses .js)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageWidth, setPageWidth] = useState<number>(1000);

  useEffect(() => {
    // Dynamic width for responsiveness
    const handleResize = () => {
      // Adjust width based on container, avoiding setting it too large on smaller screens
      const width = document.getElementById('pdf-container')?.clientWidth;
      if (width) {
        setPageWidth(width > 1000 ? 1000 : Math.max(width - 40, 300));
      }
    };
    
    // Initial calculation
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div id="pdf-container" className="flex flex-col items-center w-full bg-gray-100 p-2 md:p-6 rounded-xl">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex flex-col gap-6 w-full items-center"
        loading={
          <div className="flex justify-center items-center h-64 w-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        }
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={`page_${index + 1}`} className="shadow-lg bg-white overflow-hidden flex justify-center w-auto">
            <Page 
              pageNumber={index + 1} 
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={<div className="h-[800px] w-full bg-gray-50 flex items-center justify-center animate-pulse">Loading page...</div>}
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
