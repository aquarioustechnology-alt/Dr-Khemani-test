import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Hysterectomy in Kolkata | Laparoscopic & Vaginal | Dr. Vinita Khemani",
    description: "Expert hysterectomy surgery in Kolkata by Dr. Vinita Khemani. Total laparoscopic hysterectomy (TLH), vaginal hysterectomy (NDVH), minimally invasive techniques with faster recovery at leading hospitals.",
    keywords: "hysterectomy kolkata, laparoscopic hysterectomy kolkata, vaginal hysterectomy kolkata, TLH surgery kolkata, uterus removal surgery kolkata, Dr Vinita Khemani hysterectomy",
    openGraph: {
        title: "Hysterectomy Surgery in Kolkata | Dr. Vinita Khemani",
        description: "Minimally invasive hysterectomy by Dr. Vinita Khemani. TLH, LAVH, NDVH at top hospitals in Kolkata with faster recovery.",
        type: "website",
        locale: "en_IN",
    },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
