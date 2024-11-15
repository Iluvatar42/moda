// app/components/MainContent.tsx
"use client";

import { useEffect } from 'react';

const MainContent = () => {
  useEffect(() => {
    const originalWidth = 1920;
    const originalHeight = 1080;

    const coords1 = {
      x1: (1410 / originalWidth) * 100,
      y1: (49 / originalHeight) * 100,
      x2: (1497 / originalWidth) * 100,
      y2: (138 / originalHeight) * 100,
    };

    const setResponsiveMap = () => {
      const img = document.getElementById('responsive-image') as HTMLImageElement;

      if (img.complete) {
        const currentWidth = img.clientWidth;
        const currentHeight = img.clientHeight;

        const x1 = (coords1.x1 / 100) * currentWidth;
        const y1 = (coords1.y1 / 100) * currentHeight;
        const x2 = (coords1.x2 / 100) * currentWidth;
        const y2 = (coords1.y2 / 100) * currentHeight;

        document.getElementById('area1')?.setAttribute('coords', `${x1},${y1},${x2},${y2}`);
      } else {
        img.onload = setResponsiveMap;
      }
    };

    setResponsiveMap();
    window.addEventListener('resize', setResponsiveMap);

    return () => {
      window.removeEventListener('resize', setResponsiveMap);
    };
  }, []);

  return (
    <div className="main-content">
      <h1>Model A menyer</h1>
      <img
        id="responsive-image"
        src="/bilder/main.jpg"
        alt="Descriptive text"
        useMap="#image-map"
        className="responsive-image"
      />
      <map name="image-map">
        <area shape="rect" coords="0,0,0,0" href="/instillinger" alt="Link 1" id="area1" />
      </map>
    </div>
  );
};

export default MainContent;
