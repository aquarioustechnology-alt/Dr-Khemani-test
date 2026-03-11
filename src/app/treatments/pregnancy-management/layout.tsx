import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pregnancy Management specialist in Kolkata | Dr Vinita Khemani",
    description: "Expert pregnancy specialist in Kolkata providing prenatal care, pregnancy checkups and safe delivery planning for healthy motherhood. Call +91-99035 88155.",
    keywords: "pregnancy care kolkata, normal delivery kolkata, painless delivery kolkata, prenatal care kolkata, pregnancy doctor kolkata, best delivery doctor kolkata",
    openGraph: {
        title: "Pregnancy Management specialist in Kolkata | Dr Vinita Khemani",
        description: "Expert pregnancy specialist in Kolkata providing prenatal care, pregnancy checkups and safe delivery planning for healthy motherhood. Call +91-99035 88155.",
        type: "website",
        locale: "en_IN",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
