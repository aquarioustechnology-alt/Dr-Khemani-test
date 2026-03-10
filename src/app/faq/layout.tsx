import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions – Gynecology & Fertility Kolkata",
    description: "Explore FAQs on fertility, PCOS, pregnancy, and gynecological treatments with Dr Vinita Khemani, trusted gynecologist in Kolkata. Visit Now!",
    openGraph: {
        title: "Frequently Asked Questions – Gynecology & Fertility Kolkata",
        description: "Explore FAQs on fertility, PCOS, pregnancy, and gynecological treatments with Dr Vinita Khemani, trusted gynecologist in Kolkata. Visit Now!",
        type: "website",
    },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    return children;
}
