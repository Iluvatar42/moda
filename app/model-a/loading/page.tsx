"use client";

import { useEffect } from "react";

const LoadingPage = () => {
  useEffect(() => {
    const originalWidth = 1920;
    const originalHeight = 1080;

    const area = { x1: 0, y1: 0, x2: 1920, y2: 1080 }; // Covers the full image

    const setResponsiveMap = () => {
      const img = document.getElementById("responsive-image") as HTMLImageElement;

      if (img.complete) {
        const currentWidth = img.clientWidth;
        const currentHeight = img.clientHeight;

        const x1 = (area.x1 / originalWidth) * currentWidth;
        const y1 = (area.y1 / originalHeight) * currentHeight;
        const x2 = (area.x2 / originalWidth) * currentWidth;
        const y2 = (area.y2 / originalHeight) * currentHeight;

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
      <h1>Loading</h1>
      <img
        id="responsive-image"
        src="/bilder/loading.jpg"
        alt="Loading image"
        useMap="#image-map"
        className="responsive-image"
      />
      <map name="image-map">
        <area shape="rect" coords="0,0,0,0" href="/model-a/hjem" alt="Videre" id="area1" />
      </map>
    </div>
  );
};

export default LoadingPage;
