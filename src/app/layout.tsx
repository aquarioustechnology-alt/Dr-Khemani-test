import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Dr. Vinita Khemani | Best Gynecologist & Obstetrician in Kolkata | 21+ Years Experience",
  description: "Dr. Vinita Khemani is a senior Gynecologist & Obstetrician in Kolkata with 21+ years of experience, 10,000+ patients treated, and 2,348+ successful deliveries. Expert in high-risk pregnancy, laparoscopic surgery, PCOS treatment & fertility care. Available at 6 clinic locations across Kolkata.",
  keywords: "gynecologist kolkata, best gynecologist in kolkata, obstetrician kolkata, pregnancy doctor kolkata, fertility specialist kolkata, dr vinita khemani, laparoscopic surgery kolkata, high risk pregnancy doctor, PCOS treatment kolkata, normal delivery doctor kolkata, painless delivery kolkata, women's health clinic bangur avenue",
  authors: [{ name: "Dr. Vinita Khemani" }],
  openGraph: {
    title: "Dr. Vinita Khemani | Best Gynecologist in Kolkata | 10,000+ Patients Treated",
    description: "Senior Gynecologist & Obstetrician in Kolkata with 21+ years experience, 2,348+ successful deliveries, 583+ laparoscopic surgeries. 4.5★ Google rated. Book appointment at 6 clinic locations.",
    type: "website",
    locale: "en_IN",
    siteName: "Healing Touch Clinic - Dr. Vinita Khemani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Vinita Khemani | Best Gynecologist in Kolkata",
    description: "21+ years experience | 10,000+ patients | 2,348+ deliveries | 583+ surgeries. Book appointment at Healing Touch Clinic, Kolkata.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-white">
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
