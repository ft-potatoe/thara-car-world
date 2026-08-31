import type { Metadata } from "next";
import { Bebas_Neue, Manrope, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import WhatsAppButton from "@/components/WhatsAppButton";
import { businessInfo } from "@/lib/i18n/dictionary";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cardetailing.qa"),
  title: {
    default: "Thara Car World | Premium Auto Detailing in Doha, Qatar",
    template: "%s | Thara Car World",
  },
  description:
    "Thara Car World (Thara Car Detailing) offers premium auto detailing in Doha, Qatar — ceramic coating, paint correction, interior deep cleaning, and more. Visit us at Al Nayef Souq, Ain Khalid.",
  keywords: [
    "car detailing Doha",
    "ceramic coating Qatar",
    "car wash Al Nayef Souq",
    "vehicle detailing service Ain Khalid",
    "Thara Car World",
    "auto detailing Qatar",
  ],
  openGraph: {
    title: "Thara Car World | Premium Auto Detailing in Doha, Qatar",
    description:
      "Premium auto detailing in Doha — ceramic coating, paint correction, and full interior/exterior detailing at Al Nayef Souq, Ain Khalid.",
    url: "https://www.cardetailing.qa",
    siteName: businessInfo.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thara Car World | Premium Auto Detailing in Doha, Qatar",
    description:
      "Premium auto detailing in Doha — ceramic coating, paint correction, and full interior/exterior detailing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${manrope.variable} ${cairo.variable} bg-carbon font-body text-chrome-light antialiased`}
      >
        <LanguageProvider>
          <CursorGlow />
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButtonWrapper />
        </LanguageProvider>
      </body>
    </html>
  );
}

function WhatsAppButtonWrapper() {
  return (
    <WhatsAppButton
      label="WhatsApp"
      message="Hi Thara Car World, I'd like to book a detailing appointment."
      floating
    />
  );
}
