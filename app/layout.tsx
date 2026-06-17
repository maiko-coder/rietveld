import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ConditionalShell from "./_components/ConditionalShell";

export const metadata: Metadata = {
  title: "Rietveld Rapportages · Woeler",
  description: "Marketingrapportages voor Rietveld Licht & Wonen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SZTZ8E3Y9Q" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SZTZ8E3Y9Q');
        `}</Script>
      </head>
      <body>
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  );
}
