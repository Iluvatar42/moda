"use client";

import { useEffect } from "react";

const AvansertePage = () => {
  useEffect(() => {
    const originalWidth = 1920;
    const originalHeight = 1080;

    const areas = [
      { x1: 1232, y1: 160, x2: 1592, y2: 250 }, // Area 1: Dekoder
      { x1: 1232, y1: 260, x2: 1592, y2: 350 }, // Area 2: Videokvalitet
      { x1: 1232, y1: 360, x2: 1592, y2: 450 }, // Area 3: Opptak
      { x1: 1232, y1: 460, x2: 1592, y2: 550 }, // Area 4: Fjernkontroll
      { x1: 1232, y1: 560, x2: 1592, y2: 650 }, // Area 5: Historikk
      { x1: 1232, y1: 660, x2: 1592, y2: 750 }, // Area 6: Debug
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
      <h1>Model A menyer</h1>
      <img
        id="responsive-image"
        src="/bilder/avansert.jpg"
        alt="Settings image"
        useMap="#image-map"
        className="responsive-image"
      />
      <map name="image-map">
        <area shape="rect" coords="0,0,0,0" href="/model-a/avanserte" alt="Dekoder" id="area1" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/avanserte" alt="Videokvalitet" id="area2" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/avanserte" alt="Opptak" id="area3" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/avanserte" alt="Fjernkontroll" id="area4" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/avanserte" alt="Historikk" id="area5" />
        <area shape="rect" coords="0,0,0,0" href="/model-a/debug" alt="Debug" id="area6" />
      </map>
    </div>
  );
};

export default AvansertePage;
