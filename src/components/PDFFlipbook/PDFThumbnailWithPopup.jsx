import React, { useState } from "react";
import PDFFlipbookPopup from "./PDFFlipbookPopup.jsx";
import { usePDFThumbnail } from "./hooks/usePDFThumbnail.js";

export default function PDFThumbnailWithPopup({ pdfUrl, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const { thumbnailUrl, loading, error } = usePDFThumbnail(pdfUrl);

  return (
    <>
      <div 
        className="relative group cursor-pointer border border-gray-300 bg-white min-h-[300px] flex items-center justify-center overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        {loading && (
          <div className="flex flex-col items-center justify-center p-8">
            <div className="w-8 h-8 border-4 border-t-primary border-gray-200 rounded-full animate-spin mb-2"></div>
            <span className="text-gray-500 text-sm">Loading PDF...</span>
          </div>
        )}
        {error && (
          <div className="flex flex-col items-center justify-center p-8 text-center text-gray-500">
            <svg
              width="50"
              height="64"
              viewBox="0 0 50 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-[60px] w-auto text-[#ed1c24] mb-3"
            >
              <path
                d="M10 2H30L46 18V60C46 61.1046 45.1046 62 44 62H10C8.89543 62 8 61.1046 8 60V4C8 2.89543 8.89543 2 10 2Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="white"
              />
              <path
                d="M30 2V18H46"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <text
                x="27"
                y="44"
                fontFamily="sans-serif"
                fontSize="12"
                fontWeight="bold"
                fill="currentColor"
                textAnchor="middle"
              >
                PDF
              </text>
              <path
                d="M16 28 C 22 25, 30 25, 36 28"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <span className="text-sm">Preview Not Available</span>
          </div>
        )}
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={title || "PDF Thumbnail"}
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
