import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gynecology & Obstetrics Treatments in Kolkata | Dr. Vinita Khemani",
    description: "Expert gynecology treatments by Dr. Vinita Khemani including pregnancy care, PCOS management, laparoscopic surgery, and fertility solutions. Book your consultation.",
    keywords: "gynecology treatments kolkata, pcos treatment kolkata, pregnancy care, fertility specialist kolkata, laparoscopic surgeon kolkata",
    openGraph: {
        title: "Expert Gynecology Treatments | Dr. Vinita Khemani",
        description: "Comprehensive women's health treatments: Pregnancy, PCOS, Fertility, Surgery. Trusted care in Kolkata.",
        type: "website",
    },
};

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
