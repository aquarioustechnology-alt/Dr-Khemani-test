"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CircleDot, ArrowUpRight, ChevronDown, Activity, AlertTriangle, ShieldCheck } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const types = [
    { title: "Functional Cysts", desc: "Common, benign fluid-filled sacs that form during the menstrual cycle and often disappear on their own.", icon: CircleDot },
    { title: "Dermoid Cysts", desc: "Cysts containing tissues like hair or skin. They rarely resolve on their own and may need removal.", icon: ShieldCheck },
    { title: "Endometriomas", desc: "Chocolate cysts caused by endometriosis. They are painful and can affect fertility.", icon: AlertTriangle },
    { title: "Cystadenomas", desc: "Cysts developing from ovarian surface cells, filled with watery or mucous material. Can grow large.", icon: Activity }
];

const faqs = [
    { q: "Do all ovarian cysts need surgery?", a: "No. Most functional cysts disappear on their own within 1-3 months. Surgery (Cystectomy) is only needed if the cyst is large (>5-6cm), causing pain, looks suspicious, or persists/grows over time." },
    { q: "Is the surgery done laparoscopically?", a: "Yes, laparoscopic ovarian cystectomy is the standard of care. It is minimally invasive, leaves tiny scars, and preserves the greatest amount of healthy ovarian tissue." },
    { q: "Will cyst removal affect my fertility?", a: "Dr. Khemani prioritizes 'Ovarian Sparing Surgery', meaning only the cyst is removed while preserving the healthy ovary. This protects your future fertility." },
    { q: "Can cysts come back after removal?", a: "Functional cysts can recur. Endometriomas also have a recurrence risk. Dr. Khemani will discuss post-surgery medical management to minimize the risk of recurrence." },
];

export default function OvarianCystectomyPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[70vh] flex items-center bg-[#fdf2f2]">
                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-red-200 bg-white/60 backdrop-blur-sm">
                                        <CircleDot className="w-4 h-4 text-red-500" />
                                        <span className="text-sm font-semibold tracking-wide text-red-500 uppercase">Cyst Management</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Ovarian <br /> Cystectomy.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Expert laparoscopic removal of ovarian cysts while preserving your ovaries and fertility. Safe, minimally invasive, and effective solutions for painful or persistent cysts.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-red-500 to-red-700"
                                    >
                                        Book Evaluation
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[400px] md:h-[500px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/Laparoscopic Surgery.jpg" alt="Laparoscopic Cystectomy" fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-200 text-red-500 bg-red-50">Varieties</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Types of <span className="text-red-500">Cysts</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {types.map((item, i) => (
                            <div key={i} className="bg-red-50 p-6 rounded-[2rem] border border-red-100 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-white text-red-500 flex items-center justify-center shadow-sm mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section with Updated Style */}
            <section className="py-24 bg-gradient-to-b from-white to-[#fff5f5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32 text-left">
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-200 text-red-500 bg-red-50">
                                    FAQ
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] mb-6 pb-1">
                                    Common <br />
                                    <span className="text-red-500">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Dr. Khemani answers your concerns about cysts.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-red-500 font-semibold hover:text-red-700 transition-colors group"
                                >
                                    Get Diagnosed
                                    <ChevronDown className="w-5 h-5 ml-2 -rotate-90 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Right: Accordion */}
                        <div className="lg:col-span-8 space-y-4">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className={`group rounded-2xl border transition-all duration-300 ${openFaq === i
                                        ? "bg-white border-red-200 shadow-lg shadow-red-100 ring-1 ring-red-100"
                                        : "bg-white/80 border-white/50 shadow-sm hover:border-red-200 hover:bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                    >
                                        <span className={`text-lg md:text-xl font-semibold transition-colors ${openFaq === i ? "text-red-600" : "text-gray-900"}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ml-4 ${openFaq === i
                                            ? "bg-red-500 border-red-500 text-white rotate-180"
                                            : "bg-transparent border-gray-200 text-gray-400 group-hover:border-red-500 group-hover:text-red-500"
                                            }`}>
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0">
                                            <div className="w-full h-px bg-gray-100 mb-6" />
                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SharedCTA title="Worried about Ovarian Cysts?" subtitle="Get a precise diagnosis and fertility-sparing treatment plan." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <Footer />
        </main>
    );
}
