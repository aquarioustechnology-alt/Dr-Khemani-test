import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Laparoscopic Surgery in Kolkata | Dr. Vinita Khemani | 583+ Surgeries",
    description: "Advanced laparoscopic surgery by Dr. Vinita Khemani in Kolkata. 583+ successful surgeries for fibroids, ovarian cysts, endometriosis, hysterectomy. Minimally invasive, faster recovery.",
    keywords: "laparoscopic surgery kolkata, fibroid removal kolkata, ovarian cyst surgery kolkata, laparoscopic hysterectomy kolkata, minimally invasive surgery kolkata, best laparoscopic surgeon kolkata",
    openGraph: {
        title: "Laparoscopic Surgery in Kolkata | Dr. Vinita Khemani",
        description: "Advanced laparoscopic surgery by Dr. Vinita Khemani in Kolkata. 583+ successful surgeries for fibroids, cysts, and endometriosis.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
