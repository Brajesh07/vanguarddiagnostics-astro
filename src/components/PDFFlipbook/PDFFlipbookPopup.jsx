import React, { useEffect } from "react";
import PDFFlipbookViewer from "./PDFFlipbookViewer.jsx";

export default function PDFFlipbookPopup({ pdfUrl, onClose }) {
  // Lock body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    // Full-screen overlay
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(30, 30, 30, 0.97)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      // Click backdrop to close
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button top-right */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 16,
          right: 20,
          background: "rgba(255,255,255,0.1)",
          border: "none",
          color: "white",
          width: 40,
          height: 40,
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
        }}
      >
        ✕
      </button>

      <PDFFlipbookViewer
        pdfUrl={pdfUrl}
        pageWidth={450}
        pageHeight={630}
        isPopup={true}
        onClose={onClose}
      />
    </div>
  );
}
