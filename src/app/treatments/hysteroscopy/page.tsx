"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle, ArrowUpRight, Microscope, Eye, ChevronDown, Layers, FileSearch } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const uses = [
    { title: "Abnormal Bleeding", desc: "Finding the cause of heavy or prolonged periods (polyps, fibroids, or hyperplasia).", icon: FileSearch },
    { title: "Polyp Removal", desc: "Small growths in the uterine lining can be identified and removed in the same sitting.", icon: CheckCircle },
    { title: "Fibroid Resection", desc: "Removing submucosal fibroids that bulge into the cavity and cause bleeding or infertility.", icon: Layers },
    { title: "Infertility Evaluation", desc: "Ensuring the womb is healthy and ready for implantation before IVF or IUI.", icon: Microscope },
    { title: "Septum Correction", desc: "Removing a uterine septum (a partition inside the womb) that causes miscarriages.", icon: CheckCircle },
    { title: "Lost IUCD Removal", desc: "Locating and removing an IUCD (Copper-T) whose threads are not visible.", icon: Eye }
];

const faqs = [
    { q: "Is hysteroscopy painful?", a: "Diagnostic hysteroscopy is often painless or causes only mild cramping, similar to a period. Does not always require anesthesia. Operative hysteroscopy (removing polyps/fibroids) is done under mild sedation or short anesthesia so you sleep through it." },
    { q: "How long is the procedure?", a: "A diagnostic look takes only 5-10 minutes. If a procedure is needed (like polyp removal), it may take 20-30 minutes." },
    { q: "Do I need to stay in the hospital?", a: "No. Hysteroscopy is almost always a Day Care procedure. You come in the morning and go home by afternoon." },
    { q: "When is the best time to do it?", a: "Ideally, just after your period finishes (Day 6-10 of your cycle). This is when the lining is thinnest and the view is clearest." },
];

export default function HysteroscopyPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[70vh] flex items-center bg-[#f0f9ff]">
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-blue-200 bg-white/60 backdrop-blur-sm">
                                        <Microscope className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Diagnostic & Operative</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Advanced </span> <br />
                                        <span className="italic text-blue-600">Hysteroscopy.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        A thin telescope allows Dr. Khemani to see inside the womb without any cuts. It is the gold standard for diagnosing and treating uterine problems like polyps, septum, or adhesions.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-blue-600 to-blue-800"
                                    >
                                        Book Hysteroscopy
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[400px] md:h-[500px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/2023-04-23 (1).webp" alt="Hysteroscopy Procedure" fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Uses Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200 text-blue-600 bg-blue-50">Applications</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why is it <span className="text-blue-600">Done?</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {uses.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-4 p-8 rounded-[2rem] border border-blue-100 bg-blue-50/50 hover:bg-white hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section with Updated Style */}
            <section className="py-24 bg-gradient-to-b from-white to-[#f0f9ff]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32 text-left">
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200 text-blue-600 bg-blue-50">
                                    FAQ
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] mb-6 pb-1">
                                    Common <br />
                                    <span className="text-blue-600">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Everything you need to know about Hysteroscopy.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                                >
                                    Ask a Question
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
                                        ? "bg-white border-blue-200 shadow-lg shadow-blue-100 ring-1 ring-blue-100"
                                        : "bg-white/80 border-white/50 shadow-sm hover:border-blue-200 hover:bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                    >
                                        <span className={`text-lg md:text-xl font-semibold transition-colors ${openFaq === i ? "text-blue-700" : "text-gray-900"}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ml-4 ${openFaq === i
                                            ? "bg-blue-600 border-blue-600 text-white rotate-180"
                                            : "bg-transparent border-gray-200 text-gray-400 group-hover:border-blue-600 group-hover:text-blue-600"
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

            <SharedCTA title="Day Care Procedure" subtitle="Most patients go home the same day. Book your evaluation now." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <Footer />
        </main>
    );
}
