"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Scan, Calendar, ArrowUpRight, ChevronDown,
    Clock, Shield, Zap, TrendingUp
} from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const procedures = [
    { title: "Diagnostic Laparoscopy", desc: "Visual examination of pelvic organs to identify endometriosis, adhesions, or unexplained pelvic pain." },
    { title: "Laparoscopic Myomectomy", desc: "Precise removal of uterine fibroids while preserving the uterus, ideal for women planning future pregnancies." },
    { title: "Ovarian Cystectomy", desc: "Removal of ovarian cysts (dermoid, endometriotic, or functional) through tiny keyhole incisions." },
    { title: "Laparoscopic Hysterectomy", desc: "Complete or partial uterus removal through minimally invasive technique with faster recovery." },
    { title: "Ectopic Pregnancy", desc: "Emergency laparoscopic management of ectopic (tubal) pregnancy with organ preservation when possible." },
    { title: "Endometriosis Surgery", desc: "Excision and ablation of endometriotic implants to relieve chronic pain and improve fertility." },
];

const benefits = [
    { icon: Zap, title: "Minimal Pain", value: "80% less", desc: "Significantly reduced post-operative pain compared to open surgery" },
    { icon: Clock, title: "Faster Recovery", value: "48 hrs", desc: "Most patients return to normal activities within 48 hours" },
    { icon: Shield, title: "Tiny Incisions", value: "5-10mm", desc: "Only 2-3 small keyhole incisions instead of large cuts" },
    { icon: TrendingUp, title: "Success Rate", value: "99%+", desc: "Consistently excellent surgical outcomes" },
];

const faqs = [
    { q: "What is laparoscopic surgery?", a: "Laparoscopic surgery (keyhole surgery) is a minimally invasive technique where operations are performed through 2-3 tiny incisions (5-10mm) using a camera and specialized instruments. It offers less pain, faster recovery, and minimal scarring compared to open surgery." },
    { q: "How long is the recovery after laparoscopic surgery?", a: "Most patients can go home the same day or within 24 hours. Normal activities can be resumed within 48 hours, and full recovery typically takes 1-2 weeks compared to 4-6 weeks for open surgery." },
    { q: "Is laparoscopic surgery safe?", a: "Yes. Laparoscopic surgery is extremely safe when performed by an experienced surgeon. Dr. Vinita Khemani has performed 583+ successful laparoscopic procedures with excellent outcomes." },
    { q: "What conditions can be treated laparoscopically?", a: "Fibroids, ovarian cysts, endometriosis, ectopic pregnancy, adhesions, tubal ligation, diagnostic evaluation of infertility, and hysterectomy can all be performed laparoscopically." },
];

export default function LaparoscopicSurgeryPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[70vh] flex items-center" style={{ background: 'linear-gradient(135deg, #fadce9 0%, #fff 100%)' }}>
                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4]" style={{ background: 'rgba(255,255,255,0.6)' }}>
                                        <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Minimally Invasive</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Advanced Laparoscopic</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">Surgery in Kolkata.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        583+ successful laparoscopic surgeries by Dr. Vinita Khemani. Keyhole procedures with minimal pain, tiny scars, and recovery in days — not weeks.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl" style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 100%)' }}>
                                        Book Consultation
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45"><ArrowUpRight className="w-6 h-6" /></span>
                                    </button>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[400px] md:h-[500px] order-first lg:order-none">
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                        <Image src="/images/Laparoscopic Surgery.jpg" alt="Laparoscopic Surgery in Kolkata" fill className="object-cover" priority />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((b, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 text-center group">
                                <div className="w-14 h-14 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <b.icon className="w-7 h-7 text-[#C21975]" />
                                </div>
                                <p className="text-3xl font-bold text-gray-900 mb-1">{b.value}</p>
                                <p className="text-sm font-bold text-[#C21975] uppercase tracking-wider mb-1">{b.title}</p>
                                <p className="text-xs text-gray-500">{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Procedures */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Procedures Offered</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Laparoscopic</span>{" "}
                            <span className="text-[#C21975]">Procedures</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {procedures.map((proc, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Scan className="w-7 h-7 text-[#C21975]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{proc.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{proc.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open vs Laparoscopy Comparison */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Comparison</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Open Surgery vs</span>{" "}
                            <span className="text-[#C21975]">Laparoscopy</span>
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                        <div className="grid grid-cols-3 bg-[#730940] text-white font-bold text-sm p-4 text-center">
                            <span>Feature</span><span>Open Surgery</span><span className="text-yellow-300">Laparoscopy ✓</span>
                        </div>
                        {[
                            ["Incision Size", "10-15 cm", "5-10 mm"],
                            ["Hospital Stay", "5-7 days", "Same day / 1 day"],
                            ["Recovery Time", "4-6 weeks", "1-2 weeks"],
                            ["Post-op Pain", "Significant", "Minimal"],
                            ["Scarring", "Visible scar", "Nearly invisible"],
                            ["Infection Risk", "Higher", "Very low"],
                        ].map((row, i) => (
                            <div key={i} className={`grid grid-cols-3 text-center text-sm p-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f5e6ef]/30'}`}>
                                <span className="font-semibold text-gray-800">{row[0]}</span>
                                <span className="text-gray-500">{row[1]}</span>
                                <span className="font-bold text-[#C21975]">{row[2]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">FAQ</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Surgery</span>{" "}
                                <span className="text-[#C21975]">Questions</span>
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                                        <span className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#C21975] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                                    </button>
                                    {openFaq === i && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.a}</p></motion.div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Shared CTA Section */}
            <SharedCTA showForm={true} title="Need Surgery Consultation?" subtitle="Discuss your condition with Dr. Vinita Khemani and explore minimally invasive options." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Laparoscopic Surgery in Kolkata", "about": { "@type": "MedicalProcedure", "name": "Laparoscopic Surgery", "procedureType": "Minimally Invasive" }, "mainEntity": { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } }) }} />
            <Footer />
        </main>
    );
}
