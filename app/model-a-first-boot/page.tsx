"use client";

import { useState, useEffect } from "react";

type Area = {
  coords: number[];
  alt: string;
} & (
  | { nextImageIndex: number } // Internal navigation
  | { href: string } // External link
);

const DynamicImageMap = () => {
  const imageMapData = [
    {
      src: "/bilder/forstegangs/sprak.jpg",
      alt: "#1 språk ",
      areas: [
        { coords: [1248, 350, 1776, 465], nextImageIndex: 1, alt: "språk" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/nettverk.jpg",
      alt: "#2 Wifi ",
      areas: [
        { coords: [1248, 350, 1776, 465], nextImageIndex: 2, alt: "nettverk" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/wifi_passord.jpg",
      alt: "#3 wifi_passord ",
      areas: [
        { coords: [1248, 350, 1776, 465], nextImageIndex: 3, alt: "wifi passord" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/kobler_til.jpg",
      alt: "#4 kobler_til ",
      areas: [
        { coords: [0, 0, 1920, 1080], nextImageIndex: 4, alt: "loading" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/kobler_til2.jpg",
      alt: "#5 kobler_til2 ",
      areas: [
        { coords: [0, 0, 1920, 1080], nextImageIndex: 5, alt: "loading" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/vent_litt.jpg",
      alt: "#6 vent_litt ",
      areas: [
        { coords: [0, 0, 1920, 1080], nextImageIndex: 6, alt: "google" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/google.jpg",
      alt: "#7 google ",
      areas: [
        { coords: [1230, 463, 1790, 553], nextImageIndex: 7, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/vilkar.jpg",
      alt: "#8 google vilkår ",
      areas: [
        { coords: [1230, 363, 1790, 453], nextImageIndex: 8, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/visste_du.jpg",
      alt: "#8 visste_du  ",
      areas: [
        { coords: [1230, 363, 1790, 453], nextImageIndex: 9, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/visste_du2.jpg",
      alt: "#9  visste_du2 ",
      areas: [
        { coords: [1230, 363, 1790, 453], nextImageIndex: 10, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/google_ass.jpg",
      alt: "#10  google_ass ",
      areas: [
        { coords: [1230, 953, 1790, 1043], nextImageIndex: 11, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/hopp_over_ass.jpg",
      alt: "#11  hopp_over_ass ",
      areas: [
        { coords: [1230, 400, 1790, 553], nextImageIndex: 12, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/tv_navn.jpg",
      alt: "#12  tv_navn ",
      areas: [
        { coords: [1230, 400, 1790, 1053], nextImageIndex: 13, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/info1.jpg",
      alt: "#13  info ",
      areas: [
        { coords: [0, 0, 1920, 1080], nextImageIndex: 14, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/info2.jpg",
      alt: "#14  info2 ",
      areas: [
        { coords: [0, 0, 1920, 1080], nextImageIndex: 15, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },


    {
      src: "/bilder/forstegangs/info3.jpg",
      alt: "#15  info 3",
      areas: [
        { coords: [0, 0, 1920, 1080], nextImageIndex: 16, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },


    {
      src: "/bilder/forstegangs/info4.jpg",
      alt: "#16  info 4",
      areas: [
        { coords: [0, 0, 1920, 1080], nextImageIndex: 17, alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
      src: "/bilder/forstegangs/info4.jpg",
      alt: "#16  info 4",
      areas: [
        { coords: [0, 0, 1920, 1080], href: "/model-a", alt: "" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },


  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 1920, height: 1080 });
  const [history, setHistory] = useState<number[]>([]);

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
    if (nextImageIndex < 0 || nextImageIndex >= imageMapData.length) {
      console.warn(`Invalid nextImageIndex: ${nextImageIndex}`);
      return;
    }

    setHistory((prevHistory) => [...prevHistory, currentImageIndex]);
    setCurrentImageIndex(nextImageIndex);
  };

  const handleBackClick = () => {
    if (history.length > 0) {
      const prevIndex = history[history.length - 1];
      setHistory((prevHistory) => prevHistory.slice(0, -1)); // Remove the last entry
      setCurrentImageIndex(prevIndex);
    }
  };

  const handleHomeClick = () => {
    setHistory([]); // Clear history
    setCurrentImageIndex(0); // Navigate to the first image
  };

  const currentImage = imageMapData[currentImageIndex];

  return (
    <div>
      <h1>Modell A - Førstegangs oppstart</h1>
      <div style={{ position: "relative", display: "inline-block" }}>
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
              href={"href" in area ? area.href : undefined}
              onClick={
                "nextImageIndex" in area
                  ? () => handleAreaClick(area.nextImageIndex)
                  : undefined
              }
              style={{ cursor: "pointer" }}
            />
          ))}
        </map>

        {/* Back Button */}
        {history.length > 0 && (
          <button
            onClick={handleBackClick}
            style={{
              position: "absolute",
              top: "10px",
              right: "90px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "rgba(255, 0, 0, 0.6)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            Back
          </button>
        )}

        {/* Home Button */}
        {currentImageIndex !== 0 && (
          <button
            onClick={handleHomeClick}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "rgba(0, 0, 255, 0.6)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            Hjem
          </button>
        )}
      </div>
    </div>
  );
};

export default DynamicImageMap;
