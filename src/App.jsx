import React from "react";
import PixelsTab from "./pixels-tab";
import BtnPixel from "./btn_pixel";

const colorMap = {
  r: "red",
  i: "pink",
  o: "orange",
  y: "yellow",
  b: "blue",
  l: "lightblue",
  g: "green",
  p: "purple",
  e: "grey",
  d: "black",
  w: "white",
  _: "",
};

const image = [
  ["y", "_", "_", "_", "_", "d"],
  ["_", "_", "_", "_", "_", "_"],
  ["_", "_", "b", "e", "_", "_"],
  ["_", "_", "i", "l", "_", "_"],
  ["_", "_", "_", "_", "_", "_"],
  ["r", "_", "_", "_", "_", "p"],
];

function handleAlert() {
  alert("Je suis un bouton pixelisé !!!");
}

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Mon défi Pixel Art ❤️</h1>
      <PixelsTab pixels={image} pixelSize={30} color={colorMap} />
      <BtnPixel text={"Clique moi!"} handleAlert={handleAlert} />
    </div>
  );
}
