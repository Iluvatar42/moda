export const metadata = {
    title: "Redirecting...",
    description: "Redirecting to the main model page",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html>

<head>
    <link rel="icon" href="/bilder/favicon.ico" />
    <meta property="og:image" content="/bilder/preview.jpg" />
    <meta property="og:title" content="Model A" />
    <meta property="og:description" content="Modell A - Menyer" />
    <meta property="og:url" content="http:\\moda.langdalen.org" />
    
  </head>

  <body>{children}</body>
      </html>

        
 
    );
  }
  