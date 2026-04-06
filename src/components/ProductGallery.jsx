import { useState } from "react";

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      <img src={active} style={{ width: "100%" }} />

      <div style={{ display: "flex", gap: 10 }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(img)}
            style={{ width: 60, cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
}