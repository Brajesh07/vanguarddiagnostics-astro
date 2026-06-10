import React, { useState } from "react";
import PDFFlipbookPopup from "./PDFFlipbookPopup.jsx";

export default function BrochureImageWithPopup({ imageSrc, imageAlt, pdfUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="relative group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-contain"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <span className="text-white text-lg font-bold">View PDF</span>
        </div>
      </div>
      
      {isOpen && (
        <PDFFlipbookPopup
          pdfUrl={pdfUrl}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
