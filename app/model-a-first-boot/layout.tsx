import "../globals.css"; // Import global styles
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Model A",
  description: "Pages for Model A",
};

export default function ModelALayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
