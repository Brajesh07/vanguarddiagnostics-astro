import React from "react";

const PageComponent = React.forwardRef(({ image, pageNum }, ref) => (
  <div
    ref={ref}
    style={{
      width: "100%",
      height: "100%",
      overflow: "hidden",
      background: "white",
    }}
  >
    <img
      src={image}
      alt={`Page ${pageNum}`}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "fill", // 'fill' not 'cover' — page must fill exactly
        display: "block",
        pointerEvents: "none",
        userSelect: "none",
      }}
      draggable={false}
    />
  </div>
));

PageComponent.displayName = "PageComponent";

export default PageComponent;
