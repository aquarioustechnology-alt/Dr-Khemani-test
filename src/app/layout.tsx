import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drvinitakhemani.com"),
  title: "Best Female Gynecologist in Kolkata | Dr Vinita Khemani",
  description: "Consult Dr Vinita Khemani, top obstetrician in Kolkata, offering expert care for pregnancy, fertility, PCOS & women's health. Book a consultation today.",
  keywords: "gynecologist kolkata, best gynecologist in kolkata, obstetrician kolkata, pregnancy doctor kolkata, fertility specialist kolkata, dr vinita khemani, laparoscopic surgery kolkata, high risk pregnancy doctor, PCOS treatment kolkata, normal delivery doctor kolkata, painless delivery kolkata, women's health clinic bangur avenue",
  authors: [{ name: "Dr. Vinita Khemani" }],
  openGraph: {
    title: "Best Female Gynecologist in Kolkata | Dr Vinita Khemani",
    description: "Consult Dr Vinita Khemani, top obstetrician in Kolkata, offering expert care for pregnancy, fertility, PCOS & women's health. Book a consultation today.",
    type: "website",
    locale: "en_IN",
    siteName: "Healing Touch Clinic - Dr. Vinita Khemani",
    images: [
      {
        url: "/images/OG.jpg",
        width: 1646,
        height: 813,
        alt: "Dr. Vinita Khemani - Best Gynecologist in Kolkata",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Female Gynecologist in Kolkata | Dr Vinita Khemani",
    description: "Consult Dr Vinita Khemani, top obstetrician in Kolkata, offering expert care for pregnancy, fertility, PCOS & women's health. Book a consultation today.",
    images: ["/images/OG.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://drvinitakhemani.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${playfair.variable}`}>
      <body className="antialiased bg-white">
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
