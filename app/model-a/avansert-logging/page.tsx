"use client";

import { useEffect } from "react";

const AvansertLoggingPage = () => {
  useEffect(() => {
    const originalWidth = 8160;
    const originalHeight = 4590;

    const coords = {
      x1: 3020,
      y1: 2948,
      x2: 5228,
      y2: 3276,
    };

    const setResponsiveMap = () => {
      const img = document.getElementById("responsive-image") as HTMLImageElement;

      if (img.complete) {
        const currentWidth = img.clientWidth;
        const currentHeight = img.clientHeight;

        const x1 = (coords.x1 / originalWidth) * currentWidth;
        const y1 = (coords.y1 / originalHeight) * currentHeight;
        const x2 = (coords.x2 / originalWidth) * currentWidth;
        const y2 = (coords.y2 / originalHeight) * currentHeight;

        document.getElementById("area1")?.setAttribute("coords", `${x1},${y1},${x2},${y2}`);
      } else {
        img.onload = setResponsiveMap;
      }
    };

    setResponsiveMap();
    window.onresize = setResponsiveMap;

    return () => window.removeEventListener("resize", setResponsiveMap);
  }, []);

  return (
    <div>
      <h1>Avansert Logging</h1>
      <img
        id="responsive-image"
        src="/bilder/avansert_logging.jpg"
        alt="Avansert Logging Image"
        useMap="#image-map"
        className="responsive-image"
      />
      <map name="image-map">
        <area shape="rect" coords="0,0,0,0" href="/model-a/avansert-logging" alt="Logging" id="area1" />
      </map>
    </div>
  );
};

export default AvansertLoggingPage;
