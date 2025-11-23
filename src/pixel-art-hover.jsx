import { useState } from "react";

export default function PixelArtHover({ size, hoverColor, baseColor }) {
  const [color, setColor] = useState(baseColor);
  function handleMousEnter() {
    setColor(hoverColor);
  }
  function handleMousLeave() {
    setColor(baseColor);
  }
  return (
    <div
      onMouseEnter={handleMousEnter}
      onMouseLeave={handleMousLeave}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        border: "1px solid black",
      }}
    ></div>
  );
}
/*
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
*/
