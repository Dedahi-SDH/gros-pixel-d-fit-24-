import { useState } from "react";
import PixelsTab from "./pixels-tab";

export default function PixelAleatoire() {
  const colors = ["red", "blue", "purple", "gray"];
  const [pixles, setPixels] = useState([]);

  function handleARandomColor() {
    const newPixels = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        row.push(randomColor);
      }
      newPixels.push(row);
    }
    setPixels(newPixels);
  }
  return (
    <>
      <button
        onClick={handleARandomColor}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
          border: "none",
          fontSize: "18px",
        }}
      >
        Générer un nouveau dessin
      </button>
      <div style={{ margin: "10px" }}>
        {<PixelsTab pixels={pixles} pixelSize={30} />}
      </div>
    </>
  );
}
