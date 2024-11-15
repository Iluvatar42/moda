"use client"; // For interactivity

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Image src="/bilder/Eidsiva-Hvit.png" alt="Eidsiva Logo" width={150} height={50} />
      <h3>Utstyr</h3>
      <Link href="../model-a">Hjem</Link>
      <Link href="../model-a/hjem">Model A</Link>
    </div>
  );
};

export default Sidebar;
