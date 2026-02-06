import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Healing Touch Clinic | Dr. Vinita Khemani | Best Gynecologist in Kolkata",
  description: "Consult Dr. Vinita Khemani, one of the best gynecologists in Kolkata with 21+ years experience. Expert in pregnancy care, high-risk pregnancy, fertility treatment & laparoscopic surgery. Book appointment now.",
  keywords: "gynecologist kolkata, obstetrician kolkata, best gynecologist, pregnancy doctor, fertility specialist, dr vinita khemani, women's health, high risk pregnancy",
  authors: [{ name: "Dr. Vinita Khemani" }],
  openGraph: {
    title: "Dr. Vinita Khemani | Best Gynecologist in Kolkata",
    description: "Trusted Gynecologist & Obstetrician with 21+ years experience. Book your consultation today.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Vinita Khemani | Best Gynecologist in Kolkata",
    description: "Trusted Gynecologist & Obstetrician with 21+ years experience.",
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
