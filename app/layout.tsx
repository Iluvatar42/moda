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
    
  </head>

  <body>{children}</body>
      </html>

        
 
    );
  }
  