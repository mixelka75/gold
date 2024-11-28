import React from "react";
import "./ImageCorner.css";

const ImageCorner = ({ svg, offset = 10 }) => {
  return (
    <div className="corner-image" style={{ right: offset, bottom: offset }}>
      <img src={svg} alt="Corner SVG" />
    </div>
  );
};

export default ImageCorner;
