import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Velora — Websites that work. Marketing that moves.",
  description: "A small studio building websites, SEO, and performance marketing for founders in India and beyond. Based in Bangalore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ cursor: "none" }}>
      <body className="bg-cream text-ink font-body" style={{ cursor: "none" }}>
        <SmoothScroll />
        <Cursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
