import React from "react";

export default function PixelArt({ size, color }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        border: "1px solid black",
      }}
    ></div>
  );
}
