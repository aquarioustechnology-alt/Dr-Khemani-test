import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Menopause Specialist in Kolkata | Dr Vinita Khemani",
    description: "Consult Dr Vinita Khemani for menopause treatment in Kolkata. Get hormone therapy, lifestyle guidance, and personalised care for women. Book now!",
    keywords: "menopause treatment kolkata, HRT kolkata, hormone replacement therapy kolkata, menopause symptoms treatment kolkata, hot flashes treatment kolkata, best menopause doctor kolkata",
    openGraph: {
        title: "Menopause Specialist in Kolkata | Dr Vinita Khemani",
        description: "Consult Dr Vinita Khemani for menopause treatment in Kolkata. Get hormone therapy, lifestyle guidance, and personalised care for women. Book now!",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
