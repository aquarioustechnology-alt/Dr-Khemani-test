"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Stethoscope } from "lucide-react";

const FertilityIcon = ({ className }: { className?: string }) => (
    <div className={`relative ${className || "w-8 h-8"}`}>
        <Image
            src="/images/fertility-treatment-ico.svg"
            alt="Infertility Training"
            fill
            className="object-contain"
        />
    </div>
);

const LaparoscopyIcon = ({ className }: { className?: string }) => (
    <div className={`relative ${className || "w-8 h-8"}`}>
        <Image
            src="/images/laparoscopy-surgery-ico.svg"
            alt="Advanced Laparoscopy"
            fill
            className="object-contain"
        />
    </div>
);

const historyData = [
    {
        year: "1998",
        title: "MBBS Graduation",
        subtitle: "B.S. Medical College, Bankura",
        desc: "Graduated with Honors in 2 subjects, laying a strong foundation in medical sciences and women's health.",
        image: "/images/2023-04-06.webp",
        icon: GraduationCap
    },
    {
        year: "2003",
        title: "DGO Specialization",
        subtitle: "NRS Medical College, Kolkata",
        desc: "Completed Post-Graduate Diploma in Obstetrics & Gynaecology, specializing in high-risk pregnancies and maternal care.",
        image: "/images/2023-02-08.jpg",
        icon: Stethoscope
    },
    {
        year: "2005",
        title: "Infertility Training",
        subtitle: "FOGSI Certified",
        desc: "Advanced certification in infertility management, empowering couples to achieve their dreams of parenthood.",
        image: "/images/Fertility Treatment.webp",
        icon: FertilityIcon
    },
    {
        year: "2006",
        title: "Advanced Laparoscopy",
        subtitle: "Minimally Invasive Surgery",
        desc: "Mastered advanced laparoscopic techniques for fibroids, cysts, and hysterectomies with minimal recovery time.",
        image: "/images/Laparoscopic Surgery.jpg",
        icon: LaparoscopyIcon
    },
    {
        year: "Present",
        title: "Leading Consultant",
        subtitle: "6+ Hospitals in Kolkata",
        desc: "Senior Consultant at top hospitals including Bhagirathi Neotia, Charnock, and Apollo, while running Healing Touch Clinic.",
        image: "/images/dr-vinita-about-hero.webp",
        icon: Award
    }
];

export function AcademicJourney() {
    const [activeYear, setActiveYear] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveYear((prev) => (prev + 1) % historyData.length);
        }, 3000); // Change slide every 3 seconds

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section className="py-24 bg-white">
            <div className="container-fluid mx-auto max-w-[1400px] px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                        Milestones
                    </span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
                        Academic & Clinical Journey
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Timeline Navigation */}
                    <div className="lg:col-span-4 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[40px] top-6 bottom-6 w-[2px] bg-gray-100" />

                        <div className="flex flex-col gap-8 relative z-10">
                            {historyData.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveYear(i)}
                                    className={`group flex items-center gap-6 text-left transition-all duration-300 w-full p-2 rounded-xl hover:bg-gray-50 ${activeYear === i ? "bg-gray-50 scale-105 ml-2" : "hover:translate-x-1"}`}
                                >
                                    <div className={`w-20 py-2 rounded-full border-2 shrink-0 flex items-center justify-center transition-all duration-300 ${activeYear === i ? "border-[#C21975] bg-[#C21975] text-white shadow-lg shadow-pink-500/20" : "border-gray-200 bg-white text-gray-500 group-hover:border-[#C21975] group-hover:text-[#C21975]"}`}>
                                        <span className="text-sm font-bold">{item.year}</span>
                                    </div>
                                    <div>
                                        <span className={`block text-lg font-bold transition-colors ${activeYear === i ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
                                            {item.title}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Dynamic Content */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeYear}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid md:grid-cols-2 gap-8 items-center bg-[#fff5f9] p-8 md:p-12 rounded-[3rem]"
                            >
                                <div className="space-y-6 order-2 md:order-1">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm text-[#C21975]">
                                        {(() => {
                                            const Icon = historyData[activeYear].icon;
                                            return <Icon className="w-8 h-8" />;
                                        })()}
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">{historyData[activeYear].title}</h3>
                                        <p className="text-lg text-[#C21975] font-medium mb-4">{historyData[activeYear].subtitle}</p>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {historyData[activeYear].desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-xl order-1 md:order-2">
                                    <Image
                                        src={historyData[activeYear].image}
                                        alt={historyData[activeYear].title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#C21975]/10 mix-blend-multiply" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
