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
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[85vh] flex items-center bg-[#fdf2f7]">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <Microscope className="w-4 h-4 text-[#C21975]" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">No-Cut Surgery</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Advanced </span> <br />
                                        <span className="italic text-[#C21975]">Hysteroscopy.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        A revolutionary diagnostic and treatment method that allows Dr. Khemani to see and treat inside the womb without a single incision. Gold standard care for abnormal bleeding and infertility.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                    >
                                        Book Evaluation
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[500px] lg:h-[600px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
                                        <Image src="/images/2023-04-23 (1).webp" alt="Hysteroscopy Procedure" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/30 to-transparent"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">The Process</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">See Without <span className="text-[#C21975]">Scars</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Hysteroscopy uses a thin telescope inserted through the natural passage, meaning no external cuts or stitches.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-[#fff0f5] p-8 rounded-[2.5rem] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C21975]/10 rounded-bl-full" />
                            <span className="text-6xl font-display font-bold text-[#C21975]/20 absolute top-4 right-6">01</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Preparation</h3>
                            <p className="text-gray-600 leading-relaxed relative z-10">Done typically after your period (Day 6-10). No prolonged fasting is usually required for diagnostic procedures.</p>
                        </div>
                        <div className="bg-[#fff0f5] p-8 rounded-[2.5rem] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C21975]/10 rounded-bl-full" />
                            <span className="text-6xl font-display font-bold text-[#C21975]/20 absolute top-4 right-6">02</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Insertion</h3>
                            <p className="text-gray-600 leading-relaxed relative z-10">A thin hysteroscope (telescope) is gently passed through the cervix. Saline water expands the uterus for a clear view.</p>
                        </div>
                        <div className="bg-[#fff0f5] p-8 rounded-[2.5rem] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C21975]/10 rounded-bl-full" />
                            <span className="text-6xl font-display font-bold text-[#C21975]/20 absolute top-4 right-6">03</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Treatment</h3>
                            <p className="text-gray-600 leading-relaxed relative z-10">Using tiny instruments through the scope, we can remove polyps, fibroids, or correct septums instantly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Uses Section */}
            <section className="py-24 bg-[#F9F9F9]">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Applications</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why is it <span className="text-[#C21975]">Done?</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {uses.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-4 p-8 rounded-[2rem] border border-gray-100 bg-white hover:shadow-xl transition-all group hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-pink-50 text-[#C21975] flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform cursor-default">
                                    <item.icon className="w-7 h-7" />
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
            <section className="py-24 bg-gradient-to-b from-white to-[#fff0f5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32 text-left">
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                                    FAQ
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] mb-6 pb-1">
                                    Common <br />
                                    <span className="text-[#C21975]">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Everything you need to know about Hysteroscopy.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
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
                                        ? "bg-white border-[#C21975]/30 shadow-lg shadow-pink-500/5 ring-1 ring-[#C21975]/20"
                                        : "bg-white/80 border-white/50 shadow-sm hover:border-pink-100 hover:bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                    >
                                        <span className={`text-lg md:text-xl font-semibold transition-colors ${openFaq === i ? "text-[#C21975]" : "text-gray-900"}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ml-4 ${openFaq === i
                                            ? "bg-[#C21975] border-[#C21975] text-white rotate-180"
                                            : "bg-transparent border-gray-200 text-gray-400 group-hover:border-[#C21975] group-hover:text-[#C21975]"
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
