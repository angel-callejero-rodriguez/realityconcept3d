import type { Metadata, Viewport } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://realityconcept3d.com"),
  title: {
    default: "Reality Concept 3D — Do ecrã. Para a vida.",
    template: "%s | Reality Concept 3D",
  },
  description:
    "Modelação 3D e Realidade Aumentada para marcas de mobiliário e interiores. Os seus produtos, no espaço de quem os vai escolher.",
  openGraph: {
    title: "Reality Concept 3D — Do ecrã. Para a vida.",
    description:
      "Uma nova dimensão para a sua marca. Modelação 3D e Realidade Aumentada para mobiliário e interiores.",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/images/social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Reality Concept 3D — Do ecrã. Para a vida.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f0eee8",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${sans.variable} ${serif.variable}`}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
