import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Emergency Caesarean Section in Kolkata | Dr. Vinita Khemani",
    description: "Expert emergency C-section and caesarean delivery care in Kolkata by Dr. Vinita Khemani. 24/7 availability at NICU-equipped hospitals for safe mother and baby outcomes.",
    keywords: "emergency caesarean kolkata, C-section kolkata, caesarean delivery kolkata, emergency delivery kolkata, cesarean section specialist kolkata, Dr Vinita Khemani caesarean",
    openGraph: {
        title: "Emergency Caesarean Section in Kolkata | Dr. Vinita Khemani",
        description: "Expert caesarean section surgery by Dr. Vinita Khemani at NICU-equipped hospitals in Kolkata. Safe delivery for mother and baby.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
