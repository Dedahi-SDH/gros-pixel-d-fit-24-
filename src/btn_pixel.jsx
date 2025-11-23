export default function BtnPixel({
  size = 9,
  color = "black",
  handleAlert,
  text,
}) {
  return (
    <>
      <h1>Je suis un bouton pixelise</h1>
      <button
        onClick={handleAlert}
        style={{
          backgroundColor: color,
          border: `${size}px solid white`,
          cursor: "pointer",
          color: "white",
          outline: "none",
          padding: "10px 20px",
          fontFamily: "monospace",
        }}
      >
        {text}
      </button>
    </>
  );
}
