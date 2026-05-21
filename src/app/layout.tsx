import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MahlzeitService – Essen auf Rädern in Köln",
  description: "Frisch gekochtes Mittagessen täglich geliefert – für Senioren und Menschen in Köln & Bergisch Gladbach.",
  openGraph: {
    title: "MahlzeitService – Essen auf Rädern in Köln",
    description: "Frisch gekochtes Mittagessen täglich geliefert – für Senioren und Menschen in Köln & Bergisch Gladbach.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
