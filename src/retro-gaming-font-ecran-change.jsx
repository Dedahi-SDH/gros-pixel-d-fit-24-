import { useState } from "react";

export default function RetroGaming() {
  const [isClicked, setIsClicked] = useState(true);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <div className={isClicked ? "normal-background" : "retro-background"}>
        <button onClick={handleClick}>
          {isClicked ? "Activer le style 8-bit " : "Retour à la normale"}
        </button>
      </div>
    </>
  );
}
