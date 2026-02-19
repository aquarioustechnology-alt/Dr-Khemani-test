import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Menopause Care & HRT in Kolkata | Dr. Vinita Khemani",
    description: "Expert menopause management by Dr. Vinita Khemani. HRT, bone health, cardiovascular risk assessment, mood support, and long-term wellness programs in Kolkata.",
    keywords: "menopause treatment kolkata, HRT kolkata, hormone replacement therapy kolkata, menopause symptoms treatment kolkata, hot flashes treatment kolkata, best menopause doctor kolkata",
    openGraph: {
        title: "Menopause Care & HRT in Kolkata | Dr. Vinita Khemani",
        description: "Expert menopause management in Kolkata. HRT, bone health, cardiovascular screening, mood support by Dr. Vinita Khemani.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
