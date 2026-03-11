import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Patient Stories – Dr Vinita Khemani, Gynecologist Kolkata",
    description: "Read patient success stories with Dr Vinita Khemani, expert gynecologist in Kolkata. Get real experiences in fertility, pregnancy, PCOS, and women's health.",
    keywords: "dr vinita khemani reviews, gynecologist reviews kolkata, patient testimonials, best gynecologist kolkata reviews, healing touch clinic reviews",
    openGraph: {
        title: "Patient Stories – Dr Vinita Khemani, Gynecologist Kolkata",
        description: "Read patient success stories with Dr Vinita Khemani, expert gynecologist in Kolkata. Get real experiences in fertility, pregnancy, PCOS, and women's health.",
        type: "website",
    },
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
