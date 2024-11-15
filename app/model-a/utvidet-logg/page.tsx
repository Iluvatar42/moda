"use client";

import { useEffect } from "react";

const UtvidetLoggPage = () => {
  useEffect(() => {
    const originalWidth = 1920;
    const originalHeight = 1080;

    const areas = [
      { x1: 670, y1: 674, x2: 1255, y2: 770 }, // Ja
      { x1: 670, y1: 774, x2: 1255, y2: 870 }, // Avbryt
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
      <h1>Utvidet Logg</h1>
      <img
        id="responsive-image"
        src="/bilder/utvidet_logg.jpg"
        alt="Utvidet Logg image"
        useMap="#image-map"
        className="responsive-image"
      />
      <map name="image-map">
        <area shape="rect" coords="0,0,0,0" href="/model-a/loading" alt="Ja" id="area1" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/debug" alt="Avbryt" id="area2" />
      </map>
    </div>
  );
};

export default UtvidetLoggPage;
