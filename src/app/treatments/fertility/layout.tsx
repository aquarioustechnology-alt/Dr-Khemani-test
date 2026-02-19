import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Fertility Treatment in Kolkata | IUI, IVF Coordination | Dr. Vinita Khemani",
    description: "Expert fertility treatment by Dr. Vinita Khemani. Comprehensive fertility evaluation, ovulation induction, IUI, IVF coordination, and PCOS-related fertility support in Kolkata.",
    keywords: "fertility treatment kolkata, IUI kolkata, IVF doctor kolkata, infertility specialist kolkata, fertility evaluation kolkata, best fertility doctor kolkata, Dr Vinita Khemani fertility",
    openGraph: {
        title: "Fertility Treatment in Kolkata | Dr. Vinita Khemani",
        description: "Expert fertility treatment in Kolkata. Comprehensive evaluation, ovulation induction, IUI, IVF coordination by Dr. Vinita Khemani.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
