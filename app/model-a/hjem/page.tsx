"use client";

import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    const originalWidth = 1920;
    const originalHeight = 1080;

    const coords = {
      x1: 1410,
      y1: 49,
      x2: 1497,
      y2: 138,
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
      <h1>Model A menyer</h1>
      <img
        id="responsive-image"
        src="/bilder/main.jpg"
        alt="Descriptive text"
        useMap="#image-map"
        className="responsive-image"
      />
      <map name="image-map">
        <area shape="rect" coords="0,0,0,0" href="/model-a/instillinger" alt="Link to Instillinger" id="area1" />
      </map>
    </div>
  );
};

export default MainPage;
