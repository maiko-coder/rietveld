import type { Metadata } from "next";
import "./globals.css";
import ConditionalShell from "./_components/ConditionalShell";

export const metadata: Metadata = {
  title: "Rietveld Rapportages · Woeler",
  description: "Marketingrapportages voor Rietveld Licht & Wonen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  );
}
