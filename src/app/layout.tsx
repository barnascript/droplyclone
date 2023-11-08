import type { Metadata } from "next";
// import './globals.css'
import "../styles/colors.css";
import "../styles/colors.css";
import "../styles/index.css";
import "../styles/elements.css";
import "../styles/fonts.css";
import { Footer, Navbar } from "@/exports/components";

export const metadata: Metadata = {
  title: "DROPLY",
  description:
    "Unlocking Efficiency and Fueling Growth: Your Last-Mile Success Partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
