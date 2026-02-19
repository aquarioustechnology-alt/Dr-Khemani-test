import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Hysteroscopy in Kolkata | Diagnostic & Operative | Dr. Vinita Khemani",
    description: "Expert hysteroscopy procedures in Kolkata by Dr. Vinita Khemani. Diagnostic and operative hysteroscopy for polyps, fibroids, septum resection, and abnormal bleeding investigation.",
    keywords: "hysteroscopy kolkata, diagnostic hysteroscopy kolkata, operative hysteroscopy kolkata, uterine polyp removal kolkata, fibroid removal hysteroscopy kolkata, Dr Vinita Khemani hysteroscopy",
    openGraph: {
        title: "Hysteroscopy in Kolkata | Dr. Vinita Khemani",
        description: "Diagnostic and operative hysteroscopy by Dr. Vinita Khemani at leading hospitals in Kolkata.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
