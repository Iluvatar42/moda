"use client";

import { useEffect } from "react";

const InstillingerPage = () => {
  useEffect(() => {
    const originalWidth = 1920;
    const originalHeight = 1080;

    const areas = [
      { x1: 1219, y1: 248, x2: 1828, y2: 359 }, // Kanaler
      { x1: 1217, y1: 368, x2: 1793, y2: 474 }, // Språk og tekst
      { x1: 1225, y1: 487, x2: 1784, y2: 584 }, // Filmer og serier
      { x1: 1225, y1: 580, x2: 1701, y2: 678 }, // Avanserte
      { x1: 1214, y1: 765, x2: 1609, y2: 843 }, // Enhetsinnstillinger
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
      <h1>Innstillinger</h1>
      <img
        id="responsive-image"
        src="/bilder/settings.jpg"
        alt="Settings image"
        useMap="#image-map"
        className="responsive-image"
      />
      <map name="image-map">
        <area shape="rect" coords="0,0,0,0" href="/model-a/instillinger" alt="Kanaler" id="area1" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/instillinger" alt="Språk og tekst" id="area2" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/instillinger" alt="Filmer og serier" id="area3" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/avanserte" alt="Avanserte" id="area4" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/instillinger" alt="Enhetsinnstillinger" id="area5" />
      </map>
    </div>
  );
};

export default InstillingerPage;
