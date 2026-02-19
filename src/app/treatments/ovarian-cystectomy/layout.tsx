import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Ovarian Cyst Removal in Kolkata | Laparoscopic Cystectomy | Dr. Vinita Khemani",
    description: "Expert ovarian cyst removal in Kolkata by Dr. Vinita Khemani. Laparoscopic cystectomy for dermoid cysts, endometriomas, cystadenomas with ovary preservation and minimal scarring.",
    keywords: "ovarian cyst removal kolkata, ovarian cystectomy kolkata, laparoscopic cystectomy kolkata, ovarian cyst treatment kolkata, ovarian cyst surgery kolkata, Dr Vinita Khemani cystectomy",
    openGraph: {
        title: "Ovarian Cyst Removal Surgery in Kolkata | Dr. Vinita Khemani",
        description: "Laparoscopic ovarian cystectomy by Dr. Vinita Khemani in Kolkata - fertility-preserving, minimally invasive cyst removal.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
