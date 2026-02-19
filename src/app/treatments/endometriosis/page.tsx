"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle, ArrowUpRight, Flame, ChevronDown, AlertOctagon } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const symptoms = [
    "Severe Menstrual Cramps (Dysmenorrhea)",
    "Deep Intercourse Pain (Dyspareunia)",
    "Chronic Pelvic & Lower Back Pain",
    "Heavy or Irregular Periods",
    "Infertility / Difficulty Conceiving",
    "Painful Bowel Movements or Urination"
];

const faqs = [
    { q: "Who is the best doctor for endometriosis in Kolkata?", a: "Dr. Vinita Khemani is one of the most experienced gynecologists for endometriosis treatment in Kolkata, with over 23 years of expertise in advanced laparoscopic excision surgery. She practices at leading hospitals including Bhagirathi Neotia, Charnock Hospital, and ILS Hospital." },
    { q: "What is Endometriosis?", a: "Endometriosis is a condition where tissue similar to the lining of the uterus grows outside it—on the ovaries, fallopian tubes, and pelvic lining. This tissue sheds during periods but has no way to exit, causing intense pain, inflammation, and scar tissue. It affects approximately 1 in 10 women of reproductive age." },
    { q: "Can Endometriosis cause infertility?", a: "Yes, about 30-50% of women with endometriosis face fertility issues. The condition can block fallopian tubes, distort pelvic anatomy, or create an inflammatory environment that affects egg quality. Dr. Khemani\u2019s laparoscopic excision approach in Kolkata preserves fertility while removing disease." },
    { q: "What is the cost of endometriosis treatment in Kolkata?", a: "The cost depends on the severity and treatment approach. Hormonal management is more affordable, while laparoscopic excision surgery costs vary based on the hospital and complexity. Dr. Khemani practices at multiple hospitals in Kolkata, offering options for different budgets." },
    { q: "Is surgery the only option?", a: "Not always. For mild cases or those not planning immediate pregnancy, hormonal medications (pills, injections) are the first line of treatment to suppress pain. However, for deep infiltrating endometriosis or large cysts (Endometriomas), laparoscopic surgery is the gold standard." },
    { q: "Will Endometriosis come back after surgery?", a: "There is a chance of recurrence, but expert excision surgery significantly lowers this risk compared to simple ablation. Dr. Khemani focuses on removing the disease from the root to provide long-term relief, combined with post-operative medical management." },
];

export default function EndometriosisPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[75vh] flex items-center bg-[#fff0f5]">
                        {/* Background Elements */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl opacity-60" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <Flame className="w-4 h-4 text-[#C21975]" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Endometriosis Care</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Endometriosis Treatment </span> <br />
                                        <span className="italic text-[#C21975]">in Kolkata</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Endometriosis is often dismissed as &quot;just a bad period,&quot; but it&apos;s a whole-body condition affecting 1 in 10 women. Dr. Vinita Khemani, an experienced gynecologist in Kolkata, offers expert diagnosis and advanced laparoscopic excision to restore your quality of life and fertility.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                    >
                                        Book Endometriosis Consultation in Kolkata
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </span>
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[450px] md:h-[550px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/2023-04-23.webp" alt="Endometriosis treatment and diagnosis by Dr. Vinita Khemani in Kolkata" fill className="object-cover" />
                                    </div>
                                    {/* Stats Card */}
                                    <div className="absolute bottom-10 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[260px] hidden md:block">
                                        <p className="text-sm font-bold text-gray-900 mb-1">Did you know?</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">1 in 10 women suffer from Endometriosis. It takes an average of 7 years to get diagnosed.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Understanding Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">The Condition</span>
                            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">What is <span className="text-[#C21975]">Endometriosis?</span></h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                It is a condition where tissue similar to the lining of the uterus grows outside it—on ovaries, fallopian tubes, and pelvic tissue. This tissue bleeds during each period but has nowhere to exit, causing inflammation, scar tissue (adhesions), and severe pain.
                            </p>
                            <h3 className="font-bold text-xl text-gray-900 mb-4 mt-8">Common Symptoms</h3>
                            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                                {symptoms.map((s, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#C21975] shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[2.5rem] bg-[#fff0f5] relative overflow-hidden flex items-center justify-center p-8">
                                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30" />
                                <div className="text-center relative z-10">
                                    <p className="text-[#C21975] font-display text-8xl font-bold mb-2">10%</p>
                                    <p className="text-gray-600 text-xl font-medium">of women worldwide <br />suffer from Endometriosis.</p>
                                    <div className="mt-8 inline-block px-6 py-3 bg-white rounded-full shadow-md text-[#C21975] font-bold">Don&apos;t suffer in silence.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stages Section (New) */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stages of <span className="text-[#C21975]">Severity</span></h2>
                        <p className="text-gray-600">Endometriosis is classified into four stages based on location and depth.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { s: "Stage 1", t: "Minimal", d: "Small isolated implants, no significant scarring." },
                            { s: "Stage 2", t: "Mild", d: "More implants deeper in tissue, some scar tissue." },
                            { s: "Stage 3", t: "Moderate", d: "Deep cysts (Chocolate Cysts) may form on ovaries." },
                            { s: "Stage 4", t: "Severe", d: "Deep implants, large cysts, and extensive adhesions." }
                        ].map((stage, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 hover:border-[#C21975]/30 transition-colors">
                                <span className="text-5xl font-display font-bold text-gray-100 mb-4 block">{stage.s}</span>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{stage.t}</h4>
                                <p className="text-sm text-gray-600">{stage.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatment Approach */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Management</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Treatment <span className="text-[#C21975]">Protocol</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We tailor the approach based on your pain levels, stage of disease, and fertility goals.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-[2.5rem] bg-[#fff0f5] hover:bg-pink-50 transition-colors group">
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6 font-bold text-2xl group-hover:scale-110 transition-transform">1</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Management</h3>
                            <p className="text-gray-600 leading-relaxed">
                                For mild cases, we use hormonal therapies (Progestins, OCPs) to suppress tissue growth and manage pain effectively without surgery.
                            </p>
                        </div>
                        <div className="p-8 rounded-[2.5rem] bg-[#fff0f5] hover:bg-pink-50 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C21975]/10 rounded-bl-full" />
                            <div className="w-16 h-16 rounded-2xl bg-[#C21975] flex items-center justify-center text-white shadow-lg mb-6 font-bold text-2xl group-hover:scale-110 transition-transform">2</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Laparoscopic Excision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The Gold Standard. We perform minimally invasive surgery to thoroughly excise (cut out) endometrial lesions and adhesions while preserving healthy tissue.
                            </p>
                        </div>
                        <div className="p-8 rounded-[2.5rem] bg-[#fff0f5] hover:bg-pink-50 transition-colors group">
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6 font-bold text-2xl group-hover:scale-110 transition-transform">3</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fertility Preservation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                For women planning pregnancy, we prioritize ovary-sparing techniques and offer specialized protocols to protect egg reserve during treatment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Myths vs Facts */}
            <section className="py-24 bg-gray-50">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <h2 className="font-display text-3xl font-bold text-center mb-12">Debunking Myths</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-4 text-red-500 font-bold"><AlertOctagon className="w-5 h-5" /> MYTH: Pregnancy cures Endometriosis.</div>
                            <p className="text-gray-600">Pregnancy suppresses symptoms temporarily proper to hormonal changes, but the disease often returns after delivery.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-4 text-red-500 font-bold"><AlertOctagon className="w-5 h-5" /> MYTH: Hysterectomy is the only cure.</div>
                            <p className="text-gray-600">Removing the uterus doesn&apos;t remove endometriosis deposits elsewhere in the pelvis. Excision surgery is more effective.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Endometriosis in India: Delayed Diagnosis */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white order-last lg:order-first sticky top-32">
                            <Image src="/images/endometriosis-awareness.jpg" alt="Endometriosis awareness campaign for Indian women" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#540d2d]/50 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-lg font-bold">7+ Years to Diagnose</p>
                                <p className="text-sm opacity-90">Most women visit 4-5 doctors before receiving the correct diagnosis</p>
                            </div>
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">The Indian Reality</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Endometriosis in India: <br /><span className="text-[#C21975]">The Delayed Diagnosis Crisis</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                An estimated 25 million Indian women suffer from endometriosis, yet it remains one of the most under-diagnosed conditions in the country. The average delay in diagnosis is 7-10 years — far longer than the global average. This delay is largely due to the normalization of menstrual pain in Indian culture, where phrases like &quot;it&apos;s just your period&quot; or &quot;it will get better after marriage&quot; are commonly heard.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani is deeply committed to changing this narrative in Kolkata and across Bengal. With advanced diagnostic laparoscopy and a keen clinical eye developed over 23+ years of practice, she has helped hundreds of women finally receive the correct diagnosis and begin their journey toward pain-free living.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                                {[
                                    { num: "25M+", label: "Indian women affected" },
                                    { num: "7-10", label: "Years avg. diagnosis delay" },
                                    { num: "30-50%", label: "Face fertility issues" }
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
                                Get an Expert Diagnosis
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Is Your Pain &quot;Normal&quot;?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">If your period pain disrupts your daily life, causes you to miss work or school, or requires strong painkillers — it may not be &quot;normal.&quot; A specialist evaluation can identify treatable causes.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Schedule a Pain Evaluation
                        <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </button>
                </div>
            </section>

            {/* Endometriosis & Fertility */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Fertility Preservation</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Endometriosis <br /><span className="text-[#C21975]">&amp; Your Fertility</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                One of the most distressing aspects of endometriosis is its impact on fertility. Approximately 30-50% of women with endometriosis experience difficulty conceiving. The condition can block fallopian tubes, create adhesions that distort pelvic anatomy, reduce egg quality through chronic inflammation, and produce toxic substances that impair sperm function and embryo implantation.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                However, having endometriosis does not mean you cannot become a mother. With the right treatment approach — whether through expert laparoscopic surgery to remove disease, fertility-enhancing medications, or assisted reproduction techniques like IUI or IVF — many women with endometriosis go on to have healthy pregnancies.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani has helped numerous women with endometriosis-related infertility achieve their dream of motherhood. Her surgical technique prioritizes ovarian tissue preservation, ensuring that your egg reserve is protected during cyst removal. For patients requiring IVF, she coordinates closely with leading fertility centers in Kolkata to provide seamless, comprehensive care.
                            </p>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Discuss Your Fertility Options
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white sticky top-32">
                            <Image src="/images/endometriosis-fertility.jpg" alt="Fertility treatment and hope for women with endometriosis" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Living with Endometriosis */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl order-last lg:order-first sticky top-32">
                            <Image src="/images/endometriosis-lifestyle.jpg" alt="Healthy lifestyle management for endometriosis" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#540d2d]/50 via-transparent to-transparent" />
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Self-Care Guide</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Living Well with <br /><span className="text-[#C21975]">Endometriosis</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                While medical treatment is essential, lifestyle modifications can significantly complement your management plan and reduce the frequency and intensity of flare-ups. Dr. Khemani recommends a holistic approach that addresses diet, exercise, stress, and emotional wellbeing.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Anti-Inflammatory Diet", desc: "Focus on turmeric, ginger, leafy greens, omega-3 rich foods (fish, flaxseeds), and avoid processed foods, refined sugar, and excessive dairy which can worsen inflammation." },
                                    { title: "Gentle Exercise", desc: "Yoga, swimming, and walking help reduce pain perception, improve mood, and decrease estrogen levels. Avoid high-impact exercise during flare-ups." },
                                    { title: "Heat Therapy", desc: "Applying a warm compress to the pelvic area during pain episodes can relax muscles and improve blood flow, providing natural relief." },
                                    { title: "Stress Management", desc: "Chronic stress elevates cortisol which worsens inflammation. Pranayama, meditation, and adequate sleep (7-8 hours) are essential." },
                                    { title: "Track Your Symptoms", desc: "Maintaining a pain diary helps identify triggers, track cycle patterns, and provides valuable data for your doctor to personalize treatment." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-[#fff9fc] rounded-xl border border-pink-50">
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
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Why Choose Dr. Khemani</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Kolkata&apos;s trusted expert in{" "}
                                <br />
                                <span className="italic text-[#C21975]">endometriosis excision surgery</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg max-w-md leading-relaxed lg:text-right">
                            Most endometriosis cases in India go undiagnosed for 7-10 years. Dr. Khemani&apos;s specialized approach ensures accurate diagnosis and gold-standard excision surgery — not just symptom suppression.
                        </p>
                    </div>

                    {/* Enhanced Bento Grid */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Left Column — 2 stacked cards */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between flex-1 border border-pink-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-[#fff0f5] flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-[#C21975]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                                    Excision Over Ablation — The Gold Standard
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    While many surgeons use ablation (burning) which leaves disease behind, Dr. Khemani performs thorough excision surgery — cutting out endometrial implants completely. Studies show excision reduces recurrence by up to 80% compared to ablation techniques.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-[#C21975] to-[#8a2f5e] rounded-[2rem] p-8 flex flex-col justify-between flex-1 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-snug mb-4">
                                    Fertility-Preserving Approach
                                </h3>
                                <p className="text-pink-100 text-sm leading-relaxed">
                                    Every surgical decision is made keeping your future fertility in mind. Ovarian tissue is carefully preserved, adhesions are meticulously released, and tubal patency is maintained — giving you the best chance of natural conception or successful IVF.
                                </p>
                            </div>
                        </div>

                        {/* Center — Image + Stats */}
                        <div className="flex flex-col gap-6">
                            <div className="relative rounded-[2rem] overflow-hidden min-h-[300px] flex-1 shadow-lg">
                                <Image src="/images/endometriosis-awareness.jpg" alt="Dr. Vinita Khemani performing endometriosis excision surgery in Kolkata" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white text-sm font-semibold">&quot;Endometriosis is not just painful periods — it&apos;s a chronic disease that deserves expert surgical management.&quot;</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-2xl p-5 text-center border border-pink-50 shadow-sm">
                                    <p className="text-2xl font-bold text-[#C21975]">23+</p>
                                    <p className="text-xs text-gray-500 mt-1">Years Experience</p>
                                </div>
                                <div className="bg-white rounded-2xl p-5 text-center border border-pink-50 shadow-sm">
                                    <p className="text-2xl font-bold text-[#C21975]">608+</p>
                                    <p className="text-xs text-gray-500 mt-1">Surgeries Done</p>
                                </div>
                                <div className="bg-white rounded-2xl p-5 text-center border border-pink-50 shadow-sm">
                                    <p className="text-2xl font-bold text-[#C21975]">6</p>
                                    <p className="text-xs text-gray-500 mt-1">Hospital Affiliations</p>
                                </div>
                                <div className="bg-white rounded-2xl p-5 text-center border border-pink-50 shadow-sm">
                                    <p className="text-2xl font-bold text-[#C21975]">90%+</p>
                                    <p className="text-xs text-gray-500 mt-1">Patient Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column — 2 stacked cards */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between flex-1 border border-pink-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-[#fff0f5] flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-[#C21975]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                                    Multi-Disciplinary Pain Management
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Endometriosis pain is complex and requires more than painkillers. Dr. Khemani offers a combined approach — hormonal therapy, laparoscopic nerve-sparing surgery, dietary guidance, and psychological support for chronic pain management.
                                </p>
                            </div>
                            <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between flex-1 border border-pink-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-[#fff0f5] flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-[#C21975]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                                    One-Stop Diagnostic Precision
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    From initial ultrasound evaluation and CA-125 markers to definitive diagnostic laparoscopy — all under one roof. No referral chains. Dr. Khemani personally performs and interprets every diagnostic procedure to ensure nothing is missed.
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
                            Book Your Endometriosis Consultation
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
                                    Answers to help you understand your condition.
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

            <SharedCTA title="Stop Living with Endometriosis Pain" subtitle="Schedule an appointment with Dr. Vinita Khemani for expert endometriosis evaluation and treatment at her Kolkata clinics." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main>
    );
}
