import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Endometriosis Treatment in Kolkata | Dr. Vinita Khemani - Gynecologist",
    description: "Expert endometriosis diagnosis and treatment in Kolkata by Dr. Vinita Khemani (23+ years). Laparoscopic excision, pain management, fertility preservation. Trusted care at leading Kolkata hospitals.",
    keywords: "endometriosis treatment kolkata, endometriosis specialist kolkata, endometriosis surgery kolkata, laparoscopic endometriosis treatment, pelvic pain treatment kolkata, Dr Vinita Khemani endometriosis",
    openGraph: {
        title: "Endometriosis Treatment in Kolkata | Dr. Vinita Khemani",
        description: "Advanced endometriosis care by Dr. Vinita Khemani in Kolkata. Laparoscopic excision surgery, pain management, and fertility-preserving treatment.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
