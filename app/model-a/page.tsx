"use client";

import { useState, useEffect } from "react";

const DynamicImageMap = () => {
  const imageMapData = [
    {
      src: "/bilder/main.jpg",
      alt: "#1 Hjem ",
      areas: [
        { coords: [1410, 49, 1497, 138], nextImageIndex: 1, alt: "Innstillinger" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },
    {
      src: "/bilder/settings.jpg",
      alt: "#2 Innstillinger",
      areas: [
        { coords: [1219, 248, 1828, 359], nextImageIndex: 6, alt: "Kanaler" },
        { coords: [1217, 368, 1793, 474], nextImageIndex: 11, alt: "Språk og tekstvalg" },
        { coords: [1219, 487, 1784, 584], nextImageIndex: 16, alt: "Film og serier" },
        { coords: [1219, 580, 1701, 678], nextImageIndex: 2, alt: "Avanserte Innstillinger" },
        { coords: [1219, 765, 1609, 843], nextImageIndex: 30, alt: "Enhetsinnstillinger" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },
    {
      src: "/bilder/avansert.jpg",
      alt: "#3 Avansert",
      areas: [
        { coords: [1232, 160, 1592, 250], nextImageIndex: 19, alt: "Dekoder" },
        { coords: [1232, 260, 1592, 350], nextImageIndex: 20, alt: "Videokvalitet" },
        { coords: [1232, 360, 1592, 450], nextImageIndex: 21, alt: "Opptak" },
        { coords: [1232, 460, 1592, 550], nextImageIndex: 24, alt: "Fjernkontroll" },
        { coords: [1232, 560, 1592, 650], nextImageIndex: 27, alt: "Historikk" },
        { coords: [1232, 660, 1592, 750], nextImageIndex: 28, alt: "Debug" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },
    {
        src: "/bilder/debug.jpg",
        alt: "#4 Debug",
        areas: [
          { coords: [1232, 310, 1602, 420], nextImageIndex: 4, alt: "Utvidet logging" },
          { coords: [1232, 410, 1602, 520], nextImageIndex: 0, alt: "Stats for nerder" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/utvidet_logg.jpg",
        alt: "#4 Utvidet logg",
        areas: [
          { coords: [670, 674, 1255, 770], nextImageIndex: 5, alt: "Ja" },
          { coords: [670, 774, 1255, 870], nextImageIndex: 0, alt: "Nei" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/loading.jpg",
        alt: "#5 loading",
        areas: [
          { coords: [0, 0, 1920, 1080], nextImageIndex: 0, alt: "booter" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/kanaler/kanaler.jpg",
        alt: "#6 kanaler",
        areas: [
          { coords: [1232, 160, 1592, 250], nextImageIndex: 7, alt: "Favoritt kanaler" },
          { coords: [1232, 260, 1592, 350], nextImageIndex: 8, alt: "Sorter kanaler" },
          { coords: [1232, 360, 1592, 450], nextImageIndex: 9, alt: "Skjul kanaler" },

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/kanaler/favoritt-kanaler.jpg",
        alt: "#7 favoritt-kanaler",
        areas: [
          { coords: [1232, 160, 1592, 250], nextImageIndex: 6, alt: "Favoritt kanaler" },
          { coords: [1232, 260, 1592, 350], nextImageIndex: 6, alt: "Sorter kanaler" },
          { coords: [1232, 360, 1592, 450], nextImageIndex: 6, alt: "Skjul kanaler" },

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/kanaler/sorter-kanaler.jpg",
        alt: "#8 sorter-kanaler",
        areas: [
          { coords: [1232, 160, 1592, 250], nextImageIndex: 6, alt: "Tilbake" },
          { coords: [1232, 260, 1592, 350], nextImageIndex: 6, alt: "Tilbake" },
          { coords: [1232, 360, 1592, 450], nextImageIndex: 6, alt: "Tilbake" },

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/kanaler/skjul-tv-kanaler.jpg",
        alt: "#9 skjul-tv-kanaler, pin skjerm",
        areas: [
          { coords: [684, 606, 1240, 695], nextImageIndex: 10, alt: "Pin" },
          { coords: [684, 695, 1240, 770], nextImageIndex: 6, alt: "Avbryt" },


        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/kanaler/skjul-tv-kanaler2.jpg",
        alt: "#10 skjul kanaler",
        areas: [
          { coords: [1232, 160, 1592, 250], nextImageIndex: 6, alt: "Tilbake" },
          { coords: [1232, 260, 1592, 350], nextImageIndex: 6, alt: "Tilbake" },
          { coords: [1232, 360, 1592, 450], nextImageIndex: 6, alt: "Tilbake" },

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/sprak/sprak_og_tekstvalg.jpg",
        alt: "#11 språk og tekstvalg",
        areas: [
            { coords: [1232, 160, 1592, 250], nextImageIndex: 12, alt: "Sprak i meny" },
            { coords: [1232, 260, 1592, 350], nextImageIndex: 13, alt: "Foretrukket sprak" },
            { coords: [1232, 360, 1592, 450], nextImageIndex: 14, alt: "Undertekst sprak" },
            { coords: [1232, 460, 1592, 550], nextImageIndex: 15, alt: "Undertekster" },

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
        src: "/bilder/sprak/sprak.jpg",
        alt: "#12 Språk",
        areas: [
          { coords: [1232, 160, 1592, 250], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 460, 1592, 550], nextImageIndex: 11, alt: "tilbake" },

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/sprak/faretrukketsprak.jpg",
        alt: "#13 foretrukket språk",
        areas: [
          { coords: [1232, 160, 1592, 250], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 460, 1592, 550], nextImageIndex: 11, alt: "tilbake" },

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/sprak/undertekstsprak.jpg",
        alt: "#14 undertekst språk",
        areas: [
          { coords: [1232, 160, 1592, 250], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 460, 1592, 550], nextImageIndex: 11, alt: "tilbake" },

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/sprak/undertekster.jpg",
        alt: "#15 undertekster",
        areas: [
          { coords: [1232, 160, 1592, 250], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
          { coords: [1232, 460, 1592, 550], nextImageIndex: 11, alt: "tilbake" },

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/Film_og_serier/film_og_serier.jpg",
        alt: "#16 Film og serier",
        areas: [
          { coords: [1232, 160, 1592, 250], nextImageIndex: 17, alt: "Foreldre kontroll ping" },
          //{ coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "tilbake" },
          //{ coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/Film_og_serier/foreldrekontroll1.jpg",
        alt: "#17 Foreldre kontroll pin",
        areas: [
            { coords: [684, 606, 1240, 695], nextImageIndex: 18, alt: "Pin" },
            { coords: [684, 695, 1240, 770], nextImageIndex: 16, alt: "Avbryt" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      
      {
        src: "/bilder/Film_og_serier/foreldrekontroll2.jpg",
        alt: "#18 Foreldre kontroll",
        areas: [
          //{ coords: [1232, 160, 1592, 250], nextImageIndex: 17, alt: "Foreldre kontroll" },
          //{ coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "tilbake" },
          //{ coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/Avanserte_innstillinger/dekoder.jpg",
        alt: "#19 Dekoder",
        areas: [
         //   { coords: [684, 606, 1240, 695], nextImageIndex: 18, alt: "Pin" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      {
      src: "/bilder/Avanserte_innstillinger/videokvalitet.jpg",
      alt: "#20 Video kvalitet",
      areas: [
        //{ coords: [1232, 160, 1592, 250], nextImageIndex: 17, alt: "Foreldre kontroll" },
        //{ coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "tilbake" },
        //{ coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
        src: "/bilder/Avanserte_innstillinger/opptak.jpg",
        alt: "#21 Opptak",
        areas: [
          { coords: [1232, 260, 1592, 350], nextImageIndex: 22, alt: "Tidsbuffer før" },
          { coords: [1232, 360, 1592, 450], nextImageIndex: 23, alt: "Tidsbuffer etter" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/Avanserte_innstillinger/tidsbuffer_for.jpg",
        alt: "#22 Tidsbuffer før",
        areas: [
          //{ coords: [1232, 160, 1592, 250], nextImageIndex: 17, alt: "Tidsbuffer før" },
          //{ coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "Tidsbuffer etter" },
          //{ coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/Avanserte_innstillinger/tidsbuffer_etter.jpg",
        alt: "#23 Tidsbuffer etter",
        areas: [
          //{ coords: [1232, 160, 1592, 250], nextImageIndex: 17, alt: "Tidsbuffer før" },
          //{ coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "Tidsbuffer etter" },
          //{ coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/Avanserte_innstillinger/fjernkontroll.jpg",
        alt: "#24 Fjernkontroll",
        areas: [
          { coords: [0, 0, 1820, 980], nextImageIndex: 25, alt: "Valg av TV" },
          //{ coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "Tidsbuffer etter" },
          //{ coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      

      {
        src: "/bilder/Avanserte_innstillinger/fjernkontroll_connecting.jpg",
        alt: "#25 Fjernkontroll loading.",
        areas: [
           { coords: [0, 0, 1820, 980], nextImageIndex: 26, alt: "Fjernkontroll connecting"},
          //{ coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "Tidsbuffer etter" },
          //{ coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/Avanserte_innstillinger/fjernkontroll2.jpg",
        alt: "#26 Samsung paring",
        areas: [
          //{ coords: [0, 0, 1820, 980], nextImageIndex: 25, alt: "Tidsbuffer før" },
          //{ coords: [1232, 260, 1592, 350], nextImageIndex: 11, alt: "Tidsbuffer etter" },
          //{ coords: [1232, 360, 1592, 450], nextImageIndex: 11, alt: "tilbake" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },
      
      {
        src: "/bilder/Avanserte_innstillinger/historikk.jpg",
        alt: "#27 Opptak",
        areas: [
        //  { coords: [1232, 260, 1592, 350], nextImageIndex: 22, alt: "Tidsbuffer før" },
        //  { coords: [1232, 360, 1592, 450], nextImageIndex: 23, alt: "Tidsbuffer etter" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/Avanserte_innstillinger/debug.jpg",
        alt: "#28 debug",
        areas: [
          //{ coords: [1209, 306, 1910, 402], nextImageIndex: 22, alt: "Tidsbuffer før" },
          { coords: [1209, 406, 1910, 502], nextImageIndex: 29, alt: "stats på" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/Avanserte_innstillinger/statspa.jpg",
        alt: "#29 debug stats på",
        areas: [
          //{ coords: [1209, 306, 1910, 402], nextImageIndex: 22, alt: "Tidsbuffer før" },
          { coords: [1209, 406, 1910, 502], nextImageIndex: 28, alt: "stats av" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/enhetsinnstillinger.jpg",
        alt: "#30 Enhetsinnstillinger",
        areas: [
          { coords: [1200, 536, 1917, 658], nextImageIndex: 31, alt: "Nettverk og internett" },
          { coords: [1200, 636, 1917, 758], nextImageIndex: 33, alt: "Kontoer og pålogging" },
          { coords: [1200, 736, 1917, 858], nextImageIndex: 35, alt: "Apper" },
          { coords: [1200, 836, 1917, 958], nextImageIndex: 40, alt: "Enhetsinnstillinger2" },
          { coords: [1200, 936, 1917, 1058], nextImageIndex: 73, alt: "Fjernkontroll og tilbehør" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/nettverk.jpg",
        alt: "#31 Nettverk og internett",
        areas: [
          //{ coords: [1209, 306, 1910, 402], nextImageIndex: 32, alt: "nettverk_og_internett" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/nettverk2.jpg",
        alt: "#32 Nettverk",
        areas: [
          //{ coords: [1200, 536, 1917, 658], nextImageIndex: 31, alt: "Nettverk og internett" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/kontoer_og_palogging.jpg",
        alt: "#33 kontoer",
        areas: [
          { coords: [1290, 436, 1917, 658], nextImageIndex: 34, alt: "Google" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/google_konto.jpg",
        alt: "#34 google",
        areas: [

        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/apper.jpg",
        alt: "#35 Apper",
        areas: [
          { coords: [1200, 394, 1660, 489], nextImageIndex: 36, alt: "Alle apper" },
          { coords: [1200, 594, 1660, 650], nextImageIndex: 37, alt: "App tillatelser" },
          { coords: [1200, 694, 1660, 759], nextImageIndex: 38, alt: "Spesiell apptilgang" },
          { coords: [1200, 794, 1660, 859], nextImageIndex: 39, alt: "Sikkerhet og begrensninger" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/alle_apper.jpg",
        alt: "#36 alle_apper",
        areas: [
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/app_tillatelser.jpg",
        alt: "#37 app_tillatelser",
        areas: [
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/spesiell_apptilgang.jpg",
        alt: "#38 spesiell_apptilgang",
        areas: [
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/sikkerhet_og_begrensninger.jpg",
        alt: "#39 sikkerhet_og_begrensninger",
        areas: [
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
      src: "/bilder/enhetsinnstillinger2/enhetsinnstillinger2.jpg",
      alt: "#40 enhetsinnstillinger2",
      areas: [
        { coords: [1200, 186, 1870, 278], nextImageIndex: 42, alt: "Info" },
        { coords: [1200, 286, 1870, 378], nextImageIndex: 43, alt: "Dato og klokkeslett" },
        { coords: [1200, 386, 1870, 478], nextImageIndex: 44, alt: "Språk" },
        { coords: [1200, 486, 1870, 578], nextImageIndex: 45, alt: "Tastatir" },
        { coords: [1200, 586, 1870, 678], nextImageIndex: 46, alt: "Bluetooth" },
        { coords: [1200, 686, 1870, 778], nextImageIndex: 47, alt: "Lyd" },
        { coords: [1200, 786, 1870, 878], nextImageIndex: 50, alt: "Volum" },
        { coords: [1200, 886, 1870, 978], nextImageIndex: 51, alt: "Lagring" },
        { coords: [1200, 986, 1870, 1078], nextImageIndex: 53, alt: "Google Assistant" },

      ],
      originalWidth: 1920,
      originalHeight: 1080,
    },

    {
        src: "/bilder/enhetsinnstillinger2/enhetsinnstillinger3.jpg",
        alt: "#41 enhetsinnstillinger3",
        areas: [
          { coords: [1200, 163, 1870, 240], nextImageIndex: 54, alt: "Google Cast" },
          { coords: [1200, 263, 1870, 340], nextImageIndex: 56, alt: "HDMI" },
          { coords: [1200, 363, 1870, 440], nextImageIndex: 58, alt: "Skjerm" },
          { coords: [1200, 463, 1870, 540], nextImageIndex: 61, alt: "Skjermsparer" },
          { coords: [1200, 563, 1870, 640], nextImageIndex: 65, alt: "Posisjon" },
          { coords: [1200, 663, 1870, 720], nextImageIndex: 66, alt: "Bruk og Diagnostikk" },
          { coords: [1200, 743, 1870, 800], nextImageIndex: 67, alt: "Tilgjengelighet" },
          { coords: [1200, 843, 1870, 920], nextImageIndex: 71, alt: "Start på nytt" },
          { coords: [1200, 943, 1870, 1020], nextImageIndex: 72, alt: "Tilbakestilling" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/info.jpg",
        alt: "#42 info",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 40, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/dato_og_kl.jpg",
        alt: "#43 dato og klokkelsett",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 40, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/sprak.jpg",
        alt: "#44 spåk",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 40, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/tastatur.jpg",
        alt: "#45 Tastatur",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 40, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/bluetooth.jpg",
        alt: "#46 Bluetooth",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 40, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/lyd.jpg",
        alt: "#47 Lyd",
        areas: [
          { coords: [1200, 186, 1870, 278], nextImageIndex: 48, alt: "" },
          { coords: [1200, 386, 1870, 478], nextImageIndex: 49, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/lyd2.jpg",
        alt: "#48 Lyd2",
        areas: [
          { coords: [1200, 186, 1870, 278], nextImageIndex: 47, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/formater.jpg",
        alt: "#49 formater",
        areas: [
          { coords: [1200, 186, 1870, 278], nextImageIndex: 47, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/volume.jpg",
        alt: "#50 formater",
        areas: [
         // { coords: [1200, 186, 1870, 278], nextImageIndex: 47, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/lagring.jpg",
        alt: "#51 lagring",
        areas: [
         { coords: [1200, 286, 1870, 378], nextImageIndex: 52, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/deltlagring.jpg",
        alt: "#52 deltlagring",
        areas: [
         // { coords: [1200, 186, 1870, 278], nextImageIndex: 47, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/google_assistent.jpg",
        alt: "#53 google_assistent",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 47, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/google_cast.jpg",
        alt: "#54 google_cast",
        areas: [
          { coords: [1200, 296, 1870, 398], nextImageIndex: 55, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/google_cast_settings.jpg",
        alt: "#55 google_cast_settings",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 47, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/hdmi.jpg",
        alt: "#56 hdmi",
        areas: [
          { coords: [1200, 186, 1870, 278], nextImageIndex: 57, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/hdmi2.jpg",
        alt: "#57 hdmi2",
        areas: [
          { coords: [1200, 186, 1870, 278], nextImageIndex: 56, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/skjerm.jpg",
        alt: "#58 skjerm",
        areas: [
          { coords: [1200, 186, 1870, 278], nextImageIndex: 59, alt: "" },
          { coords: [1200, 286, 1870, 378], nextImageIndex: 60, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/opplosning.jpg",
        alt: "#59 skjerm",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 56, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/overskanning.jpg",
        alt: "#60 overskanning",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 59, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/skjermsparer.jpg",
        alt: "#61 skjermsparer",
        areas: [
          { coords: [1200, 200, 1870, 280], nextImageIndex: 62, alt: "" },
          { coords: [1200, 320, 1870, 410], nextImageIndex: 63, alt: "" },
          { coords: [1200, 460, 1870, 530], nextImageIndex: 64, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/skjermsparer2.jpg",
        alt: "#62 skjermsparer2",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 59, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/starttidspunkt.jpg",
        alt: "#63 starttidspunkt",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 59, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/hvilemodus.jpg",
        alt: "#64 hvilemodus",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 59, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/posisjon.jpg",
        alt: "#65 posisjon",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 59, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/bruk_og_diagnostikk.jpg",
        alt: "#66 bruk_og_diagnostikk",
        areas: [
          //{ coords: [1200, 186, 1870, 278], nextImageIndex: 59, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/tilgjengelighet.jpg",
        alt: "#67 tilgjengelighet",
        areas: [
          { coords: [1200, 186, 1870, 278], nextImageIndex: 68, alt: "" },
          { coords: [1200, 420, 1870, 500], nextImageIndex: 69, alt: "" },
          { coords: [1200, 520, 1870, 600], nextImageIndex: 70, alt: "" },
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/teksting.jpg",
        alt: "#68 teksting",
        areas: [
          
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/teksts_til_tale.jpg",
        alt: "#69 teksts_til_tale",
        areas: [
          
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/tilgjengelighetsnarvei.jpg",
        alt: "#70 tilgjengelighetsnarvei",
        areas: [
          
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/start_pa_nytt.jpg",
        alt: "#71 startpanytt",
        areas: [
          
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger2/reset.jpg",
        alt: "#72 reset",
        areas: [
          
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

      {
        src: "/bilder/enhetsinnstillinger/fjernkontroll_og_tilbehor.jpg",
        alt: "#73 fjernkontroll_og_tilbehor",
        areas: [
          
        ],
        originalWidth: 1920,
        originalHeight: 1080,
      },

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 1920, height: 1080 });
  const [history, setHistory] = useState<number[]>([]);
  
  const downarrowNettverk = () => {
    setHistory((prevHistory) => [...prevHistory, currentImageIndex]);
    setCurrentImageIndex(32);
  };
  
  const uparrowNettverk = () => {
    setHistory((prevHistory) => [...prevHistory, currentImageIndex]);
    setCurrentImageIndex(31);
  };

  const downarrowEnhet = () => {
    setHistory((prevHistory) => [...prevHistory, currentImageIndex]);
    setCurrentImageIndex(41);
  };
  
  const uparrowEnhet = () => {
    setHistory((prevHistory) => [...prevHistory, currentImageIndex]);
    setCurrentImageIndex(40);
  };


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
    // Clear history and navigate to the first image
    setHistory([]);
    setCurrentImageIndex(0);
  };

  const currentImage = imageMapData[currentImageIndex];

  return (
    <div>
      <h1>Dynamic Image Map</h1>
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
            onClick={() => handleAreaClick(area.nextImageIndex)}
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
              right: "10px",
              padding: "10px 20px",
              fontSize: "20px",
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
              left: "10px",
              padding: "10px 20px",
              fontSize: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
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
{[31, 32].includes(currentImageIndex) &&(
  <img
    src="/bilder/arrows/downArrow.png" 
    alt="Scroll down"
    onClick={downarrowNettverk}
    style={{
      position: "absolute",
      top: "550px",
      right: "750px",
      width: "50px",
      height: "50px",
      cursor: "pointer",
      zIndex: 10,
    }}
  />
)}

{[31, 32].includes(currentImageIndex) && (
  <img
    src="/bilder/arrows/upArrow.png" 
    alt="Scroll up"
    onClick={uparrowNettverk}
    style={{
      position: "absolute",
      top: "480px",
      right: "750px",
      width: "50px",
      height: "50px",
      cursor: "pointer",
      zIndex: 10,
    }}
  />
)}

{[40, 41].includes(currentImageIndex) &&(
  <img
    src="/bilder/arrows/downArrow.png" 
    alt="Scroll down"
    onClick={downarrowEnhet}
    style={{
      position: "absolute",
      top: "550px",
      right: "750px",
      width: "50px",
      height: "50px",
      cursor: "pointer",
      zIndex: 10,
    }}
  />
)}

{[40, 41].includes(currentImageIndex) && (
  <img
    src="/bilder/arrows/upArrow.png" 
    alt="Scroll up"
    onClick={uparrowEnhet}
    style={{
      position: "absolute",
      top: "480px",
      right: "750px",
      width: "50px",
      height: "50px",
      cursor: "pointer",
      zIndex: 10,
    }}
  />
)}

      </div>
    </div>
  );
};

export default DynamicImageMap;
