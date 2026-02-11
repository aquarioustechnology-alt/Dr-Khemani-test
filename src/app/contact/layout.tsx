import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Dr. Vinita Khemani | Book Appointment | Gynecologist Kolkata",
    description: "Contact Dr. Vinita Khemani - Best Gynecologist in Kolkata. Book appointment online, call +91-9903588155, or WhatsApp. 6 clinic locations across Kolkata. Working hours & directions.",
    keywords: "contact gynecologist kolkata, book appointment dr vinita khemani, gynecologist near me kolkata, healing touch clinic bangur avenue, doctor appointment kolkata",
    openGraph: {
        title: "Contact & Book Appointment | Dr. Vinita Khemani",
        description: "Book your appointment with Dr. Vinita Khemani. Call +91-9903588155 or visit any of our 6 clinic locations across Kolkata.",
        type: "website",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
