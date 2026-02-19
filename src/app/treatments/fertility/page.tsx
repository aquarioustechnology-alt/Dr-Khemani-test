"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
    Sparkles, ArrowUpRight, ChevronDown, CheckCircle,
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
                                        <Image src="/images/best-lady-gynecologist-kolkata.webp" alt="Fertility Treatment in Kolkata" fill className="object-cover" priority />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Options Grid - Refactored */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Treatment Options</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Comprehensive</span>{" "}
                            <span className="text-[#C21975]">Fertility Care</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {treatmentOptions.map((opt, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="group">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-full bg-[#f5e6ef] flex items-center justify-center shrink-0 group-hover:bg-[#C21975] transition-colors duration-300">
                                        <opt.icon className="w-6 h-6 text-[#C21975] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{opt.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{opt.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Steps - Refactored */}
            <section className="py-24 bg-[#F9F9F9] relative overflow-hidden">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Your Approach</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Treatment</span>{" "}
                                <span className="text-[#C21975]">Pathway</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8">
                                We believe in a step-by-step, scientific approach. No unnecessary tests, no rushed procedures.
                            </p>
                            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image src="/images/2023-04-23.webp" alt="Fertility Journey" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="space-y-0 relative">
                            {/* Connector Line */}
                            <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gray-200" />

                            {journeySteps.map((step, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="relative flex items-start gap-8 pb-12 last:pb-0">
                                    <div className="w-14 h-14 rounded-full bg-white border-4 border-[#f5e6ef] flex items-center justify-center shrink-0 z-10 shadow-sm text-[#C21975] font-bold text-lg">
                                        {step.step}
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Infertility in India */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">The Reality</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Infertility in India: <br /><span className="text-[#C21975]">Breaking the Silence</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                According to the Indian Society of Assisted Reproduction (ISAR), approximately 10-15% of Indian couples face infertility challenges, affecting an estimated 27.5 million couples actively trying to conceive. Despite these staggering numbers, infertility remains heavily stigmatized in Indian society, with women often bearing the brunt of blame and social pressure.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The truth is that infertility is a medical condition — not a failing. And in approximately 40% of cases, male factors contribute significantly to the difficulty. Dr. Vinita Khemani approaches fertility evaluation as a couple&apos;s journey, ensuring both partners are assessed thoroughly and treated with dignity and compassion.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                In Kolkata, where cultural expectations around motherhood can be overwhelming, Dr. Khemani&apos;s clinic provides a safe, non-judgmental space for couples to explore their options and receive evidence-based treatment without unnecessary interventions.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                {[
                                    { num: "27.5M", label: "Couples affected" },
                                    { num: "40%", label: "Male factor involved" },
                                    { num: "80%", label: "Treatable cases" },
                                    { num: "23+", label: "Years experience" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center p-4 bg-[#fff9fc] rounded-2xl shadow-sm border border-pink-50">
                                        <p className="text-2xl md:text-3xl font-bold text-[#C21975]">{stat.num}</p>
                                        <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Start Your Fertility Assessment
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative sticky top-32">
                            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image src="/images/fertility-couple-hope.jpg" alt="Indian couple consulting for fertility treatment in Kolkata" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block z-10">
                                <p className="text-sm font-bold text-gray-900 mb-1">You Are Not Alone</p>
                                <p className="text-xs text-gray-600">1 in 6 couples in India face fertility challenges. Most cases are treatable with the right medical guidance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Trying to Conceive?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Don&apos;t let months of uncertainty become years. A systematic fertility evaluation can identify the cause and the solution — often simpler than you think.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Book a Fertility Consultation
                        <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </button>
                </div>
            </section>

            {/* Understanding Infertility Causes */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl order-last lg:order-first sticky top-32">
                            <Image src="/images/fertility-diagnosis.jpg" alt="Comprehensive fertility diagnosis and evaluation" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Root Cause Analysis</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Understanding <br /><span className="text-[#C21975]">Why Conception Delays</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Infertility can stem from various factors in either partner. Dr. Khemani conducts a thorough, systematic evaluation to identify the exact cause before recommending any treatment.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Female Factor (40%)", desc: "PCOS, tubal blockage, endometriosis, uterine fibroids, age-related egg decline, thyroid disorders, and premature ovarian insufficiency." },
                                    { title: "Male Factor (40%)", desc: "Low sperm count, poor motility, abnormal morphology, varicocele, hormonal imbalances, and lifestyle factors like smoking and stress." },
                                    { title: "Combined Factors (10%)", desc: "Both partners have contributing issues, requiring coordinated treatment to address all factors simultaneously." },
                                    { title: "Unexplained (10%)", desc: "All tests appear normal but conception does not occur. Often responds well to IUI or IVF." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-pink-50 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-[#C21975] shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us — Enhanced Bento Grid */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Why Choose Dr. Khemani</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                A compassionate, science-driven{" "}
                                <br />
                                <span className="italic text-[#C21975]">approach to fertility</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg max-w-md leading-relaxed lg:text-right">
                            In India, 1 in 6 couples face infertility. Dr. Khemani believes every couple deserves an honest, step-by-step evaluation before being rushed into expensive treatments like IVF.
                        </p>
                    </div>

                    {/* Enhanced Bento Grid */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Left Column — 2 stacked cards */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-[#f5f0f2] rounded-[2rem] p-8 flex flex-col justify-between flex-1 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-[#C21975]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                                    Comprehensive Evaluation First, Not IVF First
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Many clinics push couples towards IVF immediately. Dr. Khemani starts with thorough hormonal panels, semen analysis, HSG, and ovulation tracking — often discovering treatable causes that make expensive procedures unnecessary.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-[#C21975] to-[#8a2f5e] rounded-[2rem] p-8 flex flex-col justify-between flex-1 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-snug mb-4">
                                    Seamless IVF Coordination Network
                                </h3>
                                <p className="text-pink-100 text-sm leading-relaxed">
                                    When advanced treatment is needed, Dr. Khemani coordinates with top IVF specialists at Bhagirathi Neotia and Charnock Hospital — ensuring continuity of care from initial workup through embryo transfer and beyond.
                                </p>
                            </div>
                        </div>

                        {/* Center — Image + Stats */}
                        <div className="flex flex-col gap-6">
                            <div className="relative rounded-[2rem] overflow-hidden min-h-[300px] flex-1 shadow-lg">
                                <Image src="/images/fertility-couple-hope.jpg" alt="Hopeful couple during fertility consultation with Dr. Vinita Khemani in Kolkata" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white text-sm font-semibold">&quot;Your fertility journey deserves patience, science, and a doctor who truly listens.&quot;</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#f5f0f2] rounded-2xl p-5 text-center">
                                    <p className="text-2xl font-bold text-[#C21975]">23+</p>
                                    <p className="text-xs text-gray-500 mt-1">Years Experience</p>
                                </div>
                                <div className="bg-[#f5f0f2] rounded-2xl p-5 text-center">
                                    <p className="text-2xl font-bold text-[#C21975]">6</p>
                                    <p className="text-xs text-gray-500 mt-1">Hospital Partners</p>
                                </div>
                                <div className="bg-[#f5f0f2] rounded-2xl p-5 text-center">
                                    <p className="text-2xl font-bold text-[#C21975]">100%</p>
                                    <p className="text-xs text-gray-500 mt-1">Personalized Care</p>
                                </div>
                                <div className="bg-[#f5f0f2] rounded-2xl p-5 text-center">
                                    <p className="text-2xl font-bold text-[#C21975]">IUI/IVF</p>
                                    <p className="text-xs text-gray-500 mt-1">Full Coordination</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column — 2 stacked cards */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-[#f5f0f2] rounded-[2rem] p-8 flex flex-col justify-between flex-1 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-[#C21975]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                                    Emotional Support Through the Journey
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Infertility takes an enormous emotional toll. Dr. Khemani provides a judgment-free space where couples can openly discuss fears, cultural pressures, and family expectations — ensuring mental well-being alongside medical treatment.
                                </p>
                            </div>
                            <div className="bg-[#f5f0f2] rounded-[2rem] p-8 flex flex-col justify-between flex-1 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-[#C21975]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                                    Hormonal Optimization &amp; Ovulation Tracking
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Precise cycle monitoring with serial ultrasounds and hormonal assays helps identify the optimal window for conception. Ovulation induction protocols are carefully tailored to minimize risks like ovarian hyperstimulation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setIsEnquiryModalOpen(true)}
                            className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                        >
                            Start Your Fertility Journey
                            <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight className="w-6 h-6" />
                            </span>
                        </button>
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
                                    Expert answers to help you feel prepared.
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
            <SharedCTA title="Start Your Journey Today" subtitle="Consult Dr. Vinita Khemani for personalized fertility guidance and compassionate care." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main>
    );
}
