import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expert Gynecology Treatments in Kolkata | Dr Vinita Khemani",
    description: "Comprehensive gynecology treatments in Kolkata by Dr Vinita Khemani. Expert care for fertility, pregnancy, PCOS, endometriosis, and women's health issues.",
    keywords: "gynecology treatments kolkata, pcos treatment kolkata, pregnancy care, fertility specialist kolkata, laparoscopic surgeon kolkata",
    openGraph: {
        title: "Expert Gynecology Treatments in Kolkata | Dr Vinita Khemani",
        description: "Comprehensive gynecology treatments in Kolkata by Dr Vinita Khemani. Expert care for fertility, pregnancy, PCOS, endometriosis, and women's health issues.",
        type: "website",
    },
};

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
