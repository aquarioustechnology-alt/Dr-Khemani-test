import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "High-Risk Pregnancy Specialist in Kolkata | Dr. Vinita Khemani",
    description: "Expert high-risk pregnancy management by Dr. Vinita Khemani. Gestational diabetes, preeclampsia, multiple pregnancies, advanced maternal age, recurrent miscarriage care in Kolkata.",
    keywords: "high risk pregnancy kolkata, gestational diabetes treatment kolkata, preeclampsia specialist kolkata, multiple pregnancy care kolkata, advanced maternal age pregnancy, best high risk pregnancy doctor kolkata",
    openGraph: {
        title: "High-Risk Pregnancy Specialist in Kolkata | Dr. Vinita Khemani",
        description: "Expert high-risk pregnancy management in Kolkata. Gestational diabetes, preeclampsia, multiple pregnancies by Dr. Vinita Khemani.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
