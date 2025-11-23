import React from "react";
import PixelArt from "./pixel-art";

export default function PixelsTab({ pixels, pixelSize, color }) {
  return (
    <div style={{ display: "inline-block" }}>
      {pixels.map((ligne, ligneIndex) => (
        <div style={{ display: "flex" }} key={ligneIndex}>
          {ligne.map((pixelChar, pixelIndex) => (
            <PixelArt
              key={pixelIndex}
              size={pixelSize}
              color={color ? color[pixelChar] || "" : pixelChar}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
