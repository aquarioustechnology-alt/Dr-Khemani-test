import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Advanced Laparoscopic Procedures in Kolkata | Dr. Vinita Khemani",
    description: "Advanced laparoscopic gynecological procedures in Kolkata by Dr. Vinita Khemani. Myomectomy, ovarian cystectomy, adhesiolysis, ectopic pregnancy management, and diagnostic laparoscopy.",
    keywords: "advanced laparoscopic surgery kolkata, laparoscopic myomectomy kolkata, fibroid removal surgery kolkata, ovarian cyst removal kolkata, ectopic pregnancy treatment kolkata, Dr Vinita Khemani laparoscopy",
    openGraph: {
        title: "Advanced Laparoscopic Procedures in Kolkata | Dr. Vinita Khemani",
        description: "Expert laparoscopic myomectomy, cystectomy, and adhesiolysis by Dr. Vinita Khemani at top hospitals in Kolkata.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
