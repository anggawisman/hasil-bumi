import type { Metadata, Viewport } from "next";
import { Knewave, Montserrat } from "next/font/google";
import "./globals.css";

const knewave = Knewave({
  variable: "--font-knewave",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hasil Bumi — Sajian dari Kebun",
    template: "%s | Hasil Bumi",
  },
  description:
    "Temukan sajian rumahan Hasil Bumi: Nasi Kebun, hidangan utama, camilan, dan rantangan musiman. Berkunjung dan nikmati suasana kebun di Hargobinangun, Pakem, Sleman, Yogyakarta.",
  applicationName: "Hasil Bumi",
  keywords: [
    "Hasil Bumi",
    "Kedai Hasil Bumi",
    "menu Hasil Bumi",
    "Nasi Kebun",
    "kuliner Pakem",
    "kuliner Sleman",
    "restoran Hargobinangun",
    "makanan rumahan Jogja",
    "camilan tradisional",
    "rantangan",
  ],
  creator: "Hasil Bumi",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Hasil Bumi",
    title: "Hasil Bumi — Sajian dari Kebun",
    description:
      "Menu Hasil Bumi: Nasi Kebun, hidangan utama, camilan, dan rantangan musiman di Hargobinangun, Pakem, Sleman.",
  },
  twitter: {
    card: "summary",
    title: "Hasil Bumi — Sajian dari Kebun",
    description:
      "Sajian dari kebun. Lihat menu utama, camilan, dan hidangan musiman Hasil Bumi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#fff7d5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${knewave.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
