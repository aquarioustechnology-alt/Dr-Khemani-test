"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
    ShieldAlert, CheckCircle, ArrowUpRight, ChevronDown,
    AlertTriangle, HeartPulse, Stethoscope, Baby, Activity, Eye
} from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const riskConditions = [
    { icon: HeartPulse, title: "Gestational Diabetes", desc: "Comprehensive glucose monitoring, insulin management, and dietary guidance for gestational diabetes to protect both mother and baby." },
    { icon: AlertTriangle, title: "Preeclampsia / Eclampsia", desc: "Early detection through regular BP monitoring, urine testing, and blood work. Timely intervention and delivery planning." },
    { icon: Baby, title: "Multiple Pregnancies", desc: "Specialized care for twin and higher-order pregnancies with frequent monitoring, nutritional support, and delivery planning." },
    { icon: Activity, title: "Recurrent Miscarriage", desc: "Thorough investigation (thrombophilia, immunology, anatomy) and progesterone support for women with recurrent pregnancy loss." },
    { icon: Eye, title: "Advanced Maternal Age (35+)", desc: "Enhanced screening, genetic counseling, and closer monitoring for women above 35 to ensure healthy outcomes." },
    { icon: Stethoscope, title: "Pre-existing Medical Conditions", desc: "Management of pregnancy with thyroid disorders, heart disease, kidney disease, epilepsy, or autoimmune conditions." },
];

const monitoringProtocol = [
    { week: "Weeks 6-12", items: ["Viability scan & dating", "Complete blood panel", "Thyroid & immunity screening", "Risk stratification"] },
    { week: "Weeks 12-20", items: ["NT scan + biochemical screening", "Cervical length monitoring", "Anomaly scan at 18-20 wks", "Progesterone support if needed"] },
    { week: "Weeks 20-28", items: ["Fetal growth assessment", "Gestational diabetes screening", "Blood pressure monitoring", "Fetal Doppler studies"] },
    { week: "Weeks 28-40", items: ["Bi-weekly visits", "Non-stress test (NST)", "Delivery planning", "Hospital coordination"] },
];

const faqs = [
    { q: "What makes a pregnancy high-risk?", a: "Factors include advanced age (35+), pre-existing conditions (diabetes, hypertension, thyroid), previous pregnancy complications, multiple pregnancies, obesity, or history of miscarriage. Dr. Khemani evaluates each case individually." },
    { q: "How often do high-risk patients need checkups?", a: "High-risk pregnancies typically require visits every 2 weeks until 28 weeks, then weekly until delivery. Additional visits are scheduled based on specific conditions." },
    { q: "Can high-risk pregnancies result in normal delivery?", a: "Yes! Many high-risk pregnancies with proper management result in healthy normal deliveries. Dr. Khemani aims for the safest delivery mode based on each patient's unique situation." },
    { q: "What hospital facilities are available for high-risk delivery?", a: "Dr. Khemani operates at hospitals equipped with NICU, blood bank, ICU, and 24/7 anesthesia — ensuring complete emergency preparedness." },
];

export default function HighRiskPregnancyPage() {
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
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">High-Risk Pregnancy</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Expert Care for</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">Complex Pregnancies.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Dr. Vinita Khemani specializes in managing high-risk pregnancies with advanced monitoring, timely intervention, and hospital-grade safety — giving every mother the best chance for a healthy delivery.
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
                                        <Image src="/images/dr-vinita-khemani-kolkata-ymcrv.jpg" alt="High-Risk Pregnancy Care in Kolkata" fill className="object-cover" priority />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditions Grid */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Conditions We Manage</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Risk</span>{" "}
                            <span className="text-[#C21975]">Conditions</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {riskConditions.map((cond, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><cond.icon className="w-7 h-7 text-[#C21975]" /></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{cond.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{cond.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Monitoring Timeline */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Monitoring Protocol</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Enhanced</span>{" "}
                            <span className="text-[#C21975]">Monitoring</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {monitoringProtocol.map((phase, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                <div className="w-full py-3 rounded-xl bg-[#C21975] text-white text-center font-bold mb-6">{phase.week}</div>
                                <ul className="space-y-3">
                                    {phase.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" /><span className="text-sm text-gray-700">{item}</span></li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image src="/images/unnamed (1).webp" alt="Hospital NICU facility for high-risk pregnancies" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Safety First</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Hospital-Grade</span>{" "}
                                <span className="text-[#C21975]">Safety</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Dr. Khemani operates at hospitals equipped with comprehensive emergency facilities to handle any complication.
                            </p>
                            <div className="space-y-4">
                                {["24/7 emergency obstetric care", "Neonatal ICU (NICU) on-site", "Blood bank availability", "Expert anesthesia team on standby", "Multi-disciplinary specialist coordination"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3"><ShieldAlert className="w-5 h-5 text-[#C21975] shrink-0" /><span className="text-gray-700 font-medium">{item}</span></div>
                                ))}
                            </div>
                        </motion.div>
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
                                    Expert answers regarding high-risk pregnancy.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
                                >
                                    Still have questions? Contact us
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

            {/* Shared CTA Section */}
            <SharedCTA title="Need Expert High-Risk Care?" subtitle="Consult Dr. Vinita Khemani for specialized high-risk pregnancy management." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main>
    );
}
