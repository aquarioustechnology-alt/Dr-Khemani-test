import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Dr Vinita Khemani | Leading Gynecologist in Kolkata",
    description: "Meet Dr Vinita Khemani, a renowned gynecologist & fertility specialist in Kolkata. Expert care in pregnancy, PCOS, and women's health. Book now!",
    keywords: "dr vinita khemani, best gynecologist kolkata, lady gynecologist kolkata, obstetrician kolkata, FOGSI member kolkata, women health specialist kolkata",
    openGraph: {
        title: "About Dr Vinita Khemani | Leading Gynecologist in Kolkata",
        description: "Meet Dr Vinita Khemani, a renowned gynecologist & fertility specialist in Kolkata. Expert care in pregnancy, PCOS, and women's health. Book now!",
        type: "profile",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
