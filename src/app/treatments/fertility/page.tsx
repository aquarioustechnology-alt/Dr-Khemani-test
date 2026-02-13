"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Sparkles, CheckCircle, Calendar, ArrowUpRight, ChevronDown,
    Heart, Users, Microscope, FlaskConical
} from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const treatmentOptions = [
    {
        title: "Fertility Evaluation",
        desc: "Complete hormonal panel, ultrasound assessment, HSG (fallopian tube check), semen analysis, and AMH testing to identify the root cause of infertility.",
        icon: Microscope,
    },
    {
        title: "Ovulation Induction",
        desc: "Medication-assisted ovulation stimulation for women with irregular or absent ovulation, monitored with serial ultrasounds for optimal timing.",
        icon: Sparkles,
    },
    {
        title: "IUI (Intrauterine Insemination)",
        desc: "A simple, minimally invasive procedure where processed sperm is placed directly into the uterus during the fertile window to increase conception chances.",
        icon: Heart,
    },
    {
        title: "IVF Coordination",
        desc: "Dr. Khemani coordinates with leading IVF centers in Kolkata for cases requiring in-vitro fertilization, ensuring seamless care throughout the process.",
        icon: FlaskConical,
    },
    {
        title: "PCOS Fertility Support",
        desc: "Specialized fertility management for women with PCOS, combining lifestyle modification, medication, and ovulation induction protocols.",
        icon: Users,
    },
    {
        title: "Recurrent Miscarriage Care",
        desc: "Thorough investigation and treatment of recurrent pregnancy loss including thrombophilia screening, immunological workup, and progesterone support.",
        icon: CheckCircle,
    },
];

const journeySteps = [
    { step: "01", title: "Initial Consultation", desc: "Detailed history, examination, and first-round tests." },
    { step: "02", title: "Diagnostic Workup", desc: "Complete hormonal panel, ultrasound, HSG, semen analysis." },
    { step: "03", title: "Treatment Plan", desc: "Personalized strategy based on diagnosis and patient goals." },
    { step: "04", title: "Active Treatment", desc: "Ovulation induction, IUI, or IVF coordination as needed." },
    { step: "05", title: "Monitoring & Support", desc: "Regular follow-ups, emotional support, and pregnancy confirmation." },
];

const faqs = [
    { q: "When should I see a fertility specialist?", a: "If you've been trying to conceive for over 12 months (or 6 months if over 35) without success, it's time to consult a fertility specialist. Dr. Vinita Khemani provides comprehensive evaluation and treatment." },
    { q: "What are the common causes of infertility?", a: "Common causes include PCOS, tubal blockage, endometriosis, low sperm count/motility, thyroid disorders, and age-related decline. About 30% of cases involve both partners." },
    { q: "What is the success rate of IUI?", a: "IUI success rates range from 10-20% per cycle depending on age, cause of infertility, and sperm quality. Multiple cycles may be recommended for optimal results." },
    { q: "Does Dr. Khemani perform IVF?", a: "Dr. Khemani provides fertility evaluation, ovulation induction, and IUI at her clinic. For IVF, she coordinates with leading IVF centers in Kolkata and manages the complete care pathway." },
];

export default function FertilityPage() {
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
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Fertility Solutions</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Your Dream of</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">Parenthood Awaits.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Evidence-based fertility treatment by Dr. Vinita Khemani. From thorough evaluation to IUI and IVF coordination — compassionate care for every couple&apos;s unique journey.
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
                                        <Image src="/images/Fertility Treatment.webp" alt="Fertility Treatment in Kolkata" fill className="object-cover" priority />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Options Grid */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Treatment Options</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Comprehensive</span>{" "}
                            <span className="text-[#C21975]">Fertility Care</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {treatmentOptions.map((opt, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <opt.icon className="w-7 h-7 text-[#C21975]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{opt.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{opt.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Steps */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Your Journey</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Treatment</span>{" "}
                            <span className="text-[#C21975]">Pathway</span>
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {journeySteps.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-6 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                <div className="w-16 h-16 rounded-2xl bg-[#C21975] flex items-center justify-center shrink-0">
                                    <span className="text-2xl font-bold text-white">{step.step}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">FAQ</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Fertility</span>{" "}
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
            <SharedCTA showForm={true} title="Start Your Journey Today" subtitle="Consult Dr. Vinita Khemani for personalized fertility guidance and compassionate care." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main>
    );
}
