"use client";

import { useState, useEffect } from "react";

const DynamicImageMap = () => {
  const imageMapData = [
    {
      src: "/bilder/main.jpg",
      alt: "Hjem image",
      areas: [
        { coords: [1410, 49, 1497, 138], nextImageIndex: 1, alt: "Innstillinger" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },
    {
      src: "/bilder/settings.jpg",
      alt: "Settings",
      areas: [
        { coords: [1219, 248, 1828, 359], nextImageIndex: 0, alt: "Kanaler" },
        { coords: [1217, 368, 1793, 474], nextImageIndex: 0, alt: "Språk og tekstvalg" },
        { coords: [1219, 487, 1784, 584], nextImageIndex: 0, alt: "Film og serier" },
        { coords: [1219, 580, 1701, 678], nextImageIndex: 2, alt: "Avanserte Innstillinger" },
        { coords: [1219, 765, 1609, 843], nextImageIndex: 0, alt: "Dekoder" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },
    {
      src: "/bilder/avansert.jpg",
      alt: "Avansert",
      areas: [
        { coords: [1232, 160, 1592, 250], nextImageIndex: 0, alt: "Dekoder" },
        { coords: [1232, 260, 1592, 350], nextImageIndex: 0, alt: "Videokvalitet" },
        { coords: [1232, 360, 1592, 450], nextImageIndex: 0, alt: "Opptak" },
        { coords: [1232, 460, 1592, 550], nextImageIndex: 0, alt: "Fjernkontroll" },
        { coords: [1232, 560, 1592, 650], nextImageIndex: 0, alt: "Historikk" },
        { coords: [1232, 660, 1592, 750], nextImageIndex: 3, alt: "Debug" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },
    {
        src: "/bilder/debug.jpg",
        alt: "Avansert",
        areas: [
          { coords: [1232, 310, 1602, 420], nextImageIndex: 4, alt: "Utvidet logging" },
          { coords: [1232, 410, 1602, 520], nextImageIndex: 0, alt: "Stats for nerder" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/utvidet_logg.jpg",
        alt: "Avansert",
        areas: [
          { coords: [670, 674, 1255, 770], nextImageIndex: 5, alt: "Ja" },
          { coords: [670, 774, 1255, 870], nextImageIndex: 0, alt: "Nei" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/loading.jpg",
        alt: "Avansert",
        areas: [
          { coords: [0, 0, 1920, 1080], nextImageIndex: 0, alt: "booter" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateImageSize = () => {
      const imgElement = document.getElementById("responsive-image") as HTMLImageElement;
      if (imgElement) {
        setImageSize({ width: imgElement.clientWidth, height: imgElement.clientHeight });
      }
    };

    updateImageSize();
    window.addEventListener("resize", updateImageSize);
    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  const calculateResponsiveCoords = (coords: number[]) => {
    const { width, height } = imageSize;
    const { originalWidth, originalHeight } = imageMapData[currentImageIndex];
    return coords.map((value, index) =>
      index % 2 === 0
        ? (value / originalWidth) * width
        : (value / originalHeight) * height
    );
  };

  const handleAreaClick = (nextImageIndex: number) => {
    // Validate the nextImageIndex
    if (nextImageIndex < 0 || nextImageIndex >= imageMapData.length) {
      console.warn(`Invalid nextImageIndex: ${nextImageIndex}`);
      return;
    }

    setCurrentImageIndex(nextImageIndex);
  };

  const currentImage = imageMapData[currentImageIndex];

  return (
    <div>
      <h1>Dynamic Image Map</h1>
      <img
        id="responsive-image"
        src={currentImage.src}
        alt={currentImage.alt}
        useMap="#image-map"
        className="responsive-image"
        style={{ width: "100%", height: "auto" }}
      />
      <map name="image-map">
        {currentImage.areas.map((area, areaIndex) => (
          <area
            key={areaIndex}
            shape="rect"
            coords={calculateResponsiveCoords(area.coords).join(",")}
            alt={area.alt}
            onClick={() => handleAreaClick(area.nextImageIndex)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </map>
    </div>
  );
};

export default DynamicImageMap;
