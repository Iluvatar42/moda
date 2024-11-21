export const metadata = {
    title: "Redirecting...",
    description: "Redirecting to the main model page",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (

        <body>{children}</body>
 
    );
  }
  