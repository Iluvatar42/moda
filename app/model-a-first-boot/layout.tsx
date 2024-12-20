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
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZ63TVZKFW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NZ63TVZKFW');
            `,
          }}
        ></script>
    <link rel="icon" href="/bilder/favicon.ico" />
    <meta property="og:image" content="/bilder/preview.jpg" />
    <meta property="og:title" content="Model A" />
    <meta property="og:description" content="Modell A - Menyer" />
    <meta property="og:url" content="http:\\moda.langdalen.org\model-a-first-boot" />
    
  </head>
      <body>
        <Sidebar />
        <main className="main-content">{children}</main>
      </body>
      </html>
  );
}
