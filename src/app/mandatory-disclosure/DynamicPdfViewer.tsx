"use client";

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('./PdfViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-64 w-full bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <p className="text-gray-500 font-medium">Loading PDF Viewer...</p>
      </div>
    </div>
  ),
});

export default function DynamicPdfViewer({ url }: { url: string }) {
  return <PdfViewer url={url} />;
}
