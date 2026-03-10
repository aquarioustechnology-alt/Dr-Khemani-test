import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Dr Vinita Khemani | Expert Gynecologist in Kolkata",
    description: "Contact Dr Vinita Khemani today to schedule an appointment. Trusted gynecologist in Kolkata for fertility, pregnancy, and women’s health.",
    keywords: "contact gynecologist kolkata, book appointment dr vinita khemani, gynecologist near me kolkata, healing touch clinic bangur avenue, doctor appointment kolkata",
    openGraph: {
        title: "Contact Dr Vinita Khemani | Expert Gynecologist in Kolkata",
        description: "Contact Dr Vinita Khemani today to schedule an appointment. Trusted gynecologist in Kolkata for fertility, pregnancy, and women’s health.",
        type: "website",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
