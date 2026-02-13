"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Microscope, Target, ChevronDown, Zap, Award } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const procedures = [
    { title: "Total Laparoscopic Hysterectomy (TLH)", desc: "Complete removal of the uterus using minimally invasive techniques, widely considered the gold standard for hysterectomy." },
    { title: "Laparoscopic Myomectomy", desc: "Surgical removal of fibroids while preserving the uterus. Crucial for women wishing to retain fertility." },
    { title: "Corrective Surgeries", desc: "Repair of uterine anomalies (like septum), tubal recanalization, or adhesiolysis to restore normal anatomy." },
    { title: "Ectopic Pregnancy", desc: "Emergency laparoscopic management of tubal pregnancies, prioritizing tube preservation whenever possible." },
    { title: "Ovarian Cystectomy", desc: "Precise removal of cysts (Dermoid, Endometriotic, Simple) while sparing healthy ovarian tissue." },
    { title: "Diagnostic Laparoscopy", desc: "The definitive method for diagnosing unexplained pelvic pain, endometriosis, or infertility factors." }
];

const faqs = [
    { q: "Why choose advanced laparoscopy over open surgery?", a: "Advanced laparoscopy offers significant benefits: minimal scarring (tiny 5mm incisions), less post-operative pain, shorter hospital stay (often 24 hours), and a much faster return to daily life (1-2 weeks vs 6 weeks)." },
    { q: "Is it safe for large fibroids?", a: "Yes. With advanced morcellation techniques, even large fibroids can be safely removed through tiny incisions. Dr. Khemani has extensive experience in handling complex, large-volume uteri laparoscopically." },
    { q: "Can previous C-sections affect laparoscopy?", a: "Previous surgeries can cause adhesions (scar tissue), but they are not a contraindication. Advanced laparoscopic skills allow for safe adhesiolysis (clearing of scars) to proceed with the surgery." },
    { q: "How long does the surgery take?", a: "Duration varies by procedure. A diagnostic laparoscopy may take 30 minutes, while a complex TLH or myomectomy could take 1-3 hours depending on severity." },
];

export default function AdvancedLaparoscopyPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[70vh] flex items-center bg-[#f5f3ff]">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-violet-200 bg-white/60 backdrop-blur-sm">
                                        <Microscope className="w-4 h-4 text-violet-700" />
                                        <span className="text-sm font-semibold tracking-wide text-violet-700 uppercase">Minimally Invasive Excellence</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Advanced </span> <br />
                                        <span className="italic text-violet-700">Laparoscopy.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Complex gynecological surgeries performed through tiny incision. Less pain, minimal scarring, and faster return to normal life. Dr. Vinita Khemani is a master of keyhole surgery.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-violet-600 to-violet-800"
                                    >
                                        Book Consultation
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[400px] md:h-[500px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/Laparoscopic Surgery.jpg" alt="Keyhole Surgery" fill className="object-cover" />
                                    </div>
                                    {/* Float Card */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-white"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-violet-100 rounded-lg text-violet-700"><Zap className="w-5 h-5" /></div>
                                            <span className="font-bold text-gray-800">Precision</span>
                                        </div>
                                        <p className="text-sm text-gray-600">High-definition visualization allows for meticulous surgery and better outcomes.</p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procedures List */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-violet-200 text-violet-700 bg-violet-50">Scope of Work</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Procedures We <span className="text-violet-700">Perform</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {procedures.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-4 p-8 rounded-[2rem] bg-violet-50/50 hover:bg-white border border-violet-100 hover:shadow-lg hover:shadow-violet-100/50 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white text-violet-600 flex items-center justify-center shadow-sm shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10" />
                <div className="container-fluid mx-auto max-w-[1400px] px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8">Why Advanced <br /><span className="text-violet-400">Laparoscopy?</span></h2>
                            <div className="space-y-6">
                                {[
                                    { t: "Micro-Precision", d: "Magnified view allows for precise dissection of tissues." },
                                    { t: "Minimal Blood Loss", d: "Advanced sealing devices ensure minimal bleeding." },
                                    { t: "Cosmetic Advantage", d: "Tiny scars that fade over time, unlike large abdominal cuts." },
                                    { t: "Faster Recovery", d: "Return to work/home routine in days." }
                                ].map((adv, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 mt-1">
                                            <Award className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{adv.t}</h4>
                                            <p className="text-gray-400 text-sm">{adv.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10">
                            <Image src="/images/unnamed.webp" alt="Surgical precision" fill className="object-cover opacity-80" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section with Updated Style */}
            <section className="py-24 bg-gradient-to-b from-white to-[#f5f3ff]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32 text-left">
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-violet-200 text-violet-700 bg-violet-50">
                                    FAQ
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] mb-6 pb-1">
                                    Surgical <br />
                                    <span className="text-violet-700">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Common queries about laparoscopic procedures.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-violet-700 font-semibold hover:text-violet-900 transition-colors group"
                                >
                                    Talk to a Surgeon
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
                                        ? "bg-white border-violet-500/30 shadow-lg shadow-violet-500/5 ring-1 ring-violet-500/20"
                                        : "bg-white/80 border-white/50 shadow-sm hover:border-violet-100 hover:bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                    >
                                        <span className={`text-lg md:text-xl font-semibold transition-colors ${openFaq === i ? "text-violet-700" : "text-gray-900"}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ml-4 ${openFaq === i
                                            ? "bg-violet-700 border-violet-700 text-white rotate-180"
                                            : "bg-transparent border-gray-200 text-gray-400 group-hover:border-violet-700 group-hover:text-violet-700"
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

            <SharedCTA title="Advanced Care, Minimal Pain" subtitle="Choose the best for your surgical needs." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <Footer />
        </main>
    );
}
