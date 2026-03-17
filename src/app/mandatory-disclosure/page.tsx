import React from 'react';
import DynamicPdfViewer from './DynamicPdfViewer';

export const metadata = {
  title: 'Mandatory Disclosure | Carmel Polytechnic College',
  description: 'Mandatory Disclosure of Carmel Polytechnic College',
};

export default function MandatoryDisclosurePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24 md:pt-32 pb-12">
      <div className="container mx-auto px-[5vw] flex-1 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Mandatory Disclosure
        </h1>
        
        <div className="flex-1 w-full flex justify-center">
          <DynamicPdfViewer url="/Mandatory%20Disclosure%202025-2026.pdf" />
        </div>
      </div>
    </div>
  );
}
