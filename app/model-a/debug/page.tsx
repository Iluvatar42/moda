"use client";

import { useEffect } from "react";

const DebugPage = () => {
  useEffect(() => {
    const originalWidth = 1920;
    const originalHeight = 1080;

    const areas = [
      { x1: 1232, y1: 310, x2: 1602, y2: 420 }, // Area 1: Utvidet Logg
      { x1: 1232, y1: 410, x2: 1602, y2: 520 }, // Area 2: Debug
    ];

    const setResponsiveMap = () => {
      const img = document.getElementById("responsive-image") as HTMLImageElement;

      if (img.complete) {
        const currentWidth = img.clientWidth;
        const currentHeight = img.clientHeight;

        areas.forEach((area, index) => {
          const x1 = (area.x1 / originalWidth) * currentWidth;
          const y1 = (area.y1 / originalHeight) * currentHeight;
          const x2 = (area.x2 / originalWidth) * currentWidth;
          const y2 = (area.y2 / originalHeight) * currentHeight;

          document.getElementById(`area${index + 1}`)?.setAttribute("coords", `${x1},${y1},${x2},${y2}`);
        });
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
      <h1>Debug Page</h1>
      <img
        id="responsive-image"
        src="/bilder/debug.jpg"
        alt="Debug image"
        useMap="#image-map"
        className="responsive-image"
      />
      <map name="image-map">
        <area shape="rect" coords="0,0,0,0" href="/model-a/utvidet-logg" alt="Utvidet Logg" id="area1" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/debug" alt="Debug" id="area2" />
      </map>
    </div>
  );
};

export default DebugPage;
