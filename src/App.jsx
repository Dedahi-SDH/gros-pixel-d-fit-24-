import React from "react";
import PixelsTab from "./pixels-tab";
import BtnPixel from "./btn_pixel";
import MotifPixelArt from "./motif-pixel-art";

// const colorMap = {
//   r: "red",
//   i: "pink",
//   o: "orange",
//   y: "yellow",
//   b: "blue",
//   l: "lightblue",
//   g: "green",
//   p: "purple",
//   e: "grey",
//   d: "black",
//   w: "white",
//   _: "",
// };

// const image = [
//   ["y", "_", "_", "_", "_", "d"],
//   ["_", "_", "_", "_", "_", "_"],
//   ["_", "_", "b", "e", "_", "_"],
//   ["_", "_", "i", "l", "_", "_"],
//   ["_", "_", "_", "_", "_", "_"],
//   ["r", "_", "_", "_", "_", "p"],
// ];
const smileyPixels = [
  ["r", "y", "y", "y", "r"],
  ["y", "b", "w", "b", "y"],
  ["y", "w", "y", "w", "y"],
  ["y", "b", "y", "b", "y"],
  ["y", "y", "b", "y", "y"],
];

const colorMap = {
  r: "red",
  y: "yellow",
  b: "black",
  w: "white",
};

function handleAlert() {
  alert("Je suis un bouton pixelisé !!!");
}

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Mon défi Pixel Art ❤️</h1>
      <MotifPixelArt pixels={smileyPixels} pixelSize={30} color={colorMap} />
      <BtnPixel text={"Clique moi!"} handleAlert={handleAlert} />
    </div>
  );
}
