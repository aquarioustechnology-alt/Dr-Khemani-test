import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Health Blog | Dr. Vinita Khemani | Women's Health Tips & Insights",
    description: "Expert health articles by Dr. Vinita Khemani covering pregnancy tips, PCOS management, menopause care, fertility guidance, and women's wellness. Evidence-based insights from Kolkata's leading gynecologist.",
    keywords: "women health blog, pregnancy tips, PCOS diet, menopause advice, fertility tips, gynecology blog kolkata",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
