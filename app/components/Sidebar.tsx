"use client"; // For interactivity

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Image src="/bilder/Eidsiva-Hvit.png" alt="Eidsiva Logo" width={150} height={50} />
      <h3>Utstyr</h3>
      <Link href="../">Modell-A</Link>
      <Link href="../model-a-first-boot">Modell A - Oppstart</Link>
      <Link href="../mk">MK</Link>
    </div>
  );
};

export default Sidebar;
