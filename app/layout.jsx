import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Velora — Websites that work. Marketing that moves.",
  description:
    "A small studio building websites, SEO, and performance marketing for founders in India and beyond. Based in Bangalore.",
  keywords: [
    "web development",
    "SEO",
    "performance marketing",
    "keyword optimization",
    "Next.js developer",
    "Shopify headless",
    "Bangalore web agency",
  ],
  openGraph: {
    title: "Velora — Websites that work. Marketing that moves.",
    description:
      "Web development, SEO, and performance marketing from a small Bangalore studio.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-ink font-body">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
