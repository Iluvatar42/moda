import "../globals.css"; // Import global styles
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Model A",
  description: "Pages for Model A",
};

export default function ModelALayout({ children }: { children: React.ReactNode }) {
  return (

    <html>

    <head>
    <link rel="icon" href="/bilder/favicon.ico" />
    <meta property="og:image" content="/bilder/preview.jpg" />
    <meta property="og:title" content="Model A" />
    <meta property="og:description" content="Modell A - Menyer" />
    <meta property="og:url" content="http:\\moda.langdalen.org\model-a" />
    
  </head>
      <body>
        <Sidebar />
        <main className="main-content">{children}</main>
      </body>

      </html>

  );
}
