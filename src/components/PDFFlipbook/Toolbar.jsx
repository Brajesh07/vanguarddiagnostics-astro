import React from "react";

export const ToolbarButton = ({ onClick, title, children, style }) => (
  <button
    onClick={onClick}
    title={title}
    style={{
      width: 36,
      height: 36,
      borderRadius: 8,
      background: "transparent",
      color: "white",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      transition: "background 0.15s",
      ...style,
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
    }
    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
  >
    {children}
  </button>
);

export const MoreMenu = ({
  onPrint,
  onDownload,
  soundEnabled,
  onToggleSound,
  isMobile,
  onShare,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position: "relative" }} onMouseLeave={() => setOpen(false)}>
      <ToolbarButton onClick={() => setOpen(!open)} title="More">
        ⋮
      </ToolbarButton>
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#2a2a2a",
            border: "1px solid #444",
            borderRadius: 8,
            padding: "8px 0",
            marginBottom: 10,
            minWidth: 150,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            zIndex: 100,
          }}
        >
          {isMobile && (
            <div onClick={onShare} style={menuItemStyle}>
              Share Link
            </div>
          )}
          <div onClick={onPrint} style={menuItemStyle}>
            Print
          </div>
          <div onClick={onDownload} style={menuItemStyle}>
            Download PDF
          </div>
          <div onClick={onToggleSound} style={menuItemStyle}>
            Sound {soundEnabled ? "✓" : ""}
          </div>
        </div>
      )}
    </div>
  );
};

const menuItemStyle = {
  padding: "10px 16px",
  color: "white",
  cursor: "pointer",
  fontSize: 14,
  fontFamily: "sans-serif",
};

export const Toolbar = ({
  mode,
  currentPage,
  totalPages,
  onZoomIn,
  onZoomOut,
  onToggleThumbs,
  onShare,
  onPrint,
  onDownload,
  soundEnabled,
  onToggleSound,
  onFullscreen,
  onClose,
  isPopup,
  showZoom = true,
  isMobile = false,
}) => {
  const getPageLabel = () => {
    if (mode === "landscape" || isMobile) {
      return `${currentPage + 1} / ${totalPages}`;
    }
    if (currentPage === 0) return `1 / ${totalPages}`;
    if (currentPage >= totalPages - 1) return `${totalPages} / ${totalPages}`;
    return `${currentPage + 1}-${currentPage + 2} / ${totalPages}`;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        marginTop: 16,
        zIndex: 1000,
        flexWrap: "wrap",
        width: "100%",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          color: "white",
          padding: "6px 14px",
          borderRadius: 20,
          fontSize: 13,
          fontWeight: 600,
          marginRight: 8,
          whiteSpace: "nowrap",
        }}
      >
        {getPageLabel()}
      </div>

      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          borderRadius: 24,
          padding: "6px 12px",
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {showZoom && (
          <>
            <ToolbarButton onClick={onZoomOut} title="Zoom out">
              −
            </ToolbarButton>
            <ToolbarButton onClick={onZoomIn} title="Zoom in">
              +
            </ToolbarButton>
          </>
        )}
        <ToolbarButton onClick={onToggleThumbs} title="Thumbnails">
          ⊞
        </ToolbarButton>
        {!isMobile && (
          <ToolbarButton onClick={onShare} title="Share">
            ⎘
          </ToolbarButton>
        )}
        <MoreMenu
          onPrint={onPrint}
          onDownload={onDownload}
          soundEnabled={soundEnabled}
          onToggleSound={onToggleSound}
          isMobile={isMobile}
          onShare={onShare}
        />
        {!isMobile && (
          <ToolbarButton onClick={onFullscreen} title="Fullscreen">
            ⤢
          </ToolbarButton>
        )}
        {isPopup && (
          <ToolbarButton
            onClick={onClose}
            title="Close"
            style={{ marginLeft: 8 }}
          >
            ✕
          </ToolbarButton>
        )}
      </div>
    </div>
  );
};
