import PixelArt from "./pixel-art";
import PixelArtHover from "./pixel-art-hover";
import PixelsTab from "./pixels-tab";

export default function MotifPixelArt({ pixels, pixelSize, color }) {
  return (
    <div style={{ display: "inline-block" }}>
      {pixels.map((ligne, ligneIndex) => (
        <div style={{ display: "flex" }} key={ligneIndex}>
          {ligne.map((pixel, pixelIndex) => (
            <PixelArtHover
              key={pixelIndex}
              size={pixelSize}
              hoverColor="white"
              baseColor={color[pixel] || ""}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/*

Crée un tableau 2D nommé smileyPixels qui représente un smiley en pixel art.

Affiche-le avec ton composant <PixelsTab />.

Utilise au moins 4 couleurs différentes.
*/
