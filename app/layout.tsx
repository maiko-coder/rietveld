import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";

export const metadata: Metadata = {
  title: "Rietveld Rapportages · Woeler",
  description: "Marketingrapportages voor Rietveld Licht & Wonen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
