import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Advanced Laparoscopic Surgery in Kolkata | Dr Vinita Khemani",
    description: "Consult Dr Vinita Khemani, an expert laparoscopic surgery doctor in Kolkata. Get advanced laparoscopic procedures for faster recovery. Book now!",
    keywords: "advanced laparoscopic surgery kolkata, laparoscopic myomectomy kolkata, fibroid removal surgery kolkata, ovarian cyst removal kolkata, ectopic pregnancy treatment kolkata, Dr Vinita Khemani laparoscopy",
    openGraph: {
        title: "Advanced Laparoscopic Surgery in Kolkata | Dr Vinita Khemani",
        description: "Consult Dr Vinita Khemani, an expert laparoscopic surgery doctor in Kolkata. Get advanced laparoscopic procedures for faster recovery. Book now!",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
