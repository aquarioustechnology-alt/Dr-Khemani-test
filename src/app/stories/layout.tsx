import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Patient Stories & Testimonials | Dr. Vinita Khemani | Gynecologist Kolkata",
    description: "Read real patient testimonials and success stories from Dr. Vinita Khemani's patients. 10,000+ happy patients, 4.9★ Google rating. Best gynecologist reviews in Kolkata.",
    keywords: "dr vinita khemani reviews, gynecologist reviews kolkata, patient testimonials, best gynecologist kolkata reviews, healing touch clinic reviews",
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
