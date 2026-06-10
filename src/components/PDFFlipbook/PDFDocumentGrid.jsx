import React, { useState } from "react";
import PDFFlipbookPopup from "./PDFFlipbookPopup.jsx";

/**
 * @param {Object} props
 * @param {ReadonlyArray<{readonly label: string, readonly href: string}>} [props.docs]
 */
export default function PDFDocumentGrid({ docs = [] }) {
  const [activePdf, setActivePdf] = useState(null);

  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center">
        {docs.map((doc, i) => (
          <button
            key={i}
            onClick={() => setActivePdf(doc.href)}
            className="group flex flex-col items-center text-center 
                       transition-transform hover:-translate-y-1 
                       bg-transparent border-none cursor-pointer p-0 appearance-none outline-none"
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
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
            <span
              className="text-[15px] font-bold text-[#222222] 
                         group-hover:text-primary transition-colors"
              dangerouslySetInnerHTML={{ __html: doc.label }}
            />
          </button>
        ))}
      </div>

      {activePdf && (
        <PDFFlipbookPopup
          pdfUrl={activePdf}
          onClose={() => setActivePdf(null)}
        />
      )}
    </>
  );
}
