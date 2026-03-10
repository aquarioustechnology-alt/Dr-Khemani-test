import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dr Vinita Khemani Clinic Schedule | Book Appointment in Kolkata",
    description: "Check Dr Vinita Khemani's clinic schedule in Kolkata. Book your appointment for gynecology, fertility, PCOS, pregnancy care, and women's health.",
    keywords: "dr vinita khemani clinic timings, gynecologist schedule kolkata, healing touch clinic timings, doctor appointment bangur avenue, gynecologist near me timing",
    openGraph: {
        title: "Dr Vinita Khemani Clinic Schedule | Book Appointment in Kolkata",
        description: "Check Dr Vinita Khemani's clinic schedule in Kolkata. Book your appointment for gynecology, fertility, PCOS, pregnancy care, and women's health.",
        type: "website",
    },
};

export default function ClinicScheduleLayout({ children }: { children: React.ReactNode }) {
    return children;
}
