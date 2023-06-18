import { useEffect, useRef } from "react";

import CarModelThreeJS from "../components/CarModelThreeJS/CarModelThreeJS";

export default function Home() {
  const renderRef = useRef<any>(null);

  useEffect(() => {
    renderRef.current.innerHTML = `    
      <div class="sketchfab-embed-wrapper">
        <iframe
          title="Formula 1 RedBull"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/d0a2cfaecfc341d69aa44005f0624f94/embed?autostart=1"
        >
        </iframe>
      </div>`;
  });
  return (
    <div>
      {" "}
      <div
        ref={renderRef}
        style={{ width: "100%", backgroundColor: "#ddd" }}
      ></div>
      <CarModelThreeJS modelURl={"/model/mercedes_f1_w14.glb"} />
    </div>
  );
}
