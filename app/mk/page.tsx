

import { useState, useEffect } from "react";

export const metadata = {
  title: "MK Page",
  description: "This is the MK page",
};

export default function MKPage() {
  return (
    <div>
      <h1>MK Side</h1>
      <p>MK!</p>
      <img src="/bilder/mk/lampestatus.gif" />
      <img src="/bilder/mk/mk.webp" />

    </div>
  );
}
