import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Dr. Vinita Khemani | Best Gynecologist in Kolkata | 21+ Years Experience",
    description: "Learn about Dr. Vinita Khemani – DGO, FOGSI Life Member, with 21+ years experience, 10,000+ patients treated, and 2,348+ successful deliveries. Best gynecologist & obstetrician in Kolkata.",
    keywords: "dr vinita khemani, best gynecologist kolkata, lady gynecologist kolkata, obstetrician kolkata, FOGSI member kolkata, women health specialist kolkata",
    openGraph: {
        title: "About Dr. Vinita Khemani | Best Gynecologist in Kolkata",
        description: "21+ years experience, DGO in Obs & Gynae, FOGSI Life Member. 10,000+ patients treated. Available at 6 clinic locations across Kolkata.",
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
