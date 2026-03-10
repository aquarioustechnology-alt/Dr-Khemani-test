"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CircleDot, ArrowUpRight, ChevronDown, Egg, Flame, Droplets, Layers, Heart, Stethoscope, FlaskConical, Microscope, Timer, ShieldCheck, ClipboardCheck } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const types = [
    { title: "Functional Cysts", desc: "The most common type — fluid-filled sacs that form during ovulation. Typically harmless and resolve within 2-3 menstrual cycles without treatment. Monitoring via ultrasound is usually sufficient.", icon: CircleDot },
    { title: "Dermoid Cysts", desc: "Also called mature teratomas, these contain tissues like hair, fat, or teeth. They grow slowly but won't resolve on their own and may twist the ovary (torsion), requiring surgical removal.", icon: Layers },
    { title: "Endometriomas", desc: "Known as 'chocolate cysts' due to their dark blood content, these are caused by endometriosis. They can cause severe pain, damage ovarian tissue, and significantly impact fertility if left untreated.", icon: Flame },
    { title: "Cystadenomas", desc: "Develop from the outer surface of the ovary, filled with watery or mucous fluid. Can grow very large (10-30cm) and cause abdominal distension, requiring careful laparoscopic excision.", icon: Droplets }
];

const faqs = [
    { q: "Who is the best doctor for ovarian cyst treatment?", a: "Dr. Vinita Khemani is a leading laparoscopic surgeon specializing in ovarian cystectomy. She focuses on fertility-preserving techniques to remove cysts while keeping ovaries healthy." },
    { q: "What is the cost of ovarian cyst surgery?", a: "The cost depends on the type of cyst (dermoid, endometrioma) and the hospital facility. Dr. Khemani offers affordable laparoscopic packages at top hospitals." },
    { q: "Do all ovarian cysts need surgery?", a: "No. Most functional cysts disappear on their own. We recommend surgery at our the city clinic only if the cyst is large (>5-6cm), persistent, looks suspicious on ultrasound, or causes severe pain." },
    { q: "Is the surgery done laparoscopically?", a: "Yes, we specialize in 3D Laparoscopic Cystectomy. This minimally invasive technique uses tiny incisions, ensuring less pain, minimal scarring, and a much faster return to normal life compared to open surgery." },
    { q: "Will cyst removal affect my fertility?", a: "Dr. Khemani is an expert in 'Ovarian Sparing Surgery'. Using precise energy sources, she carefully peels the cyst wall (cystectomy) while preserving the healthy ovarian tissue and egg reserve, protecting your future fertility." },
    { q: "Is ovarian cystectomy painful?", a: "Since we perform minimally invasive laparoscopic cystectomy, pain is significantly less compared to open surgery. Most patients experience only mild discomfort for 1-2 days, which is easily managed with oral painkillers." },
    { q: "Can cysts come back after removal?", a: "Functional cysts can recur. Conditions like endometriosis also have a recurrence risk. We don't just operate; we provide long-term medical management and lifestyle guidance to minimize this risk." },
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
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[85vh] flex items-center bg-[#fff0f5]">
                        {/* Abstract Shapes */}
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <CircleDot className="w-4 h-4 text-[#C21975]" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Ovary-Sparing Surgery</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Ovarian Cystectomy</span> <br />
                                        <span className="italic text-[#C21975]">Surgery in Kolkata.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Looking for ovarian cyst removal surgery? Dr. Vinita Khemani is a leading laparoscopic cystectomy specialist focused on preserving your healthy ovarian tissue and fertility. Get back to a pain-free life with expert, minimally invasive care.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                    >
                                        Book Evaluation
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </span>
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[500px] lg:h-[600px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
                                        <Image src="/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg" alt="Laparoscopic Ovarian Cyst Removal" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/40 to-transparent"></div>
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
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Diagnosis</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Common Types of <span className="text-[#C21975]">Cysts</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Not all cysts are the same. Correct diagnosis is key to the right treatment.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {types.map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#C21975] flex items-center justify-center shadow-sm mb-4 group-hover:bg-[#C21975] group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Warning Signs</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Signs You <span className="text-[#C21975]">Shouldn&apos;t Ignore</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Most cysts are silent. But when symptoms appear, they demand attention.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="relative sticky top-32">
                            <div className="relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image src="/images/ovarian-cyst-care.jpg" alt="Ovarian cyst diagnosis and symptoms explained by Dr. Khemani" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#C21975] shrink-0"><Flame className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Pelvic Pain &amp; Cramping</h4>
                                    <p className="text-gray-600 leading-relaxed">A persistent dull ache or sudden sharp pain in the lower abdomen, typically on the side of the cyst. Pain may worsen during intercourse, exercise, or bowel movements.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#C21975] shrink-0"><Droplets className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Bloating &amp; Abdominal Pressure</h4>
                                    <p className="text-gray-600 leading-relaxed">Persistent feeling of fullness, heaviness, or swelling in the lower belly. Large cysts can press on the bladder causing frequent urination, or on the bowel causing constipation.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#C21975] shrink-0"><CircleDot className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Irregular or Heavy Periods</h4>
                                    <p className="text-gray-600 leading-relaxed">Changes in menstrual flow — heavier bleeding, spotting between periods, or missed cycles. Endometriomas are notorious for causing painful, irregular menstruation.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#C21975] shrink-0"><Egg className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Difficulty Conceiving</h4>
                                    <p className="text-gray-600 leading-relaxed">Endometriomas and large cysts can disrupt ovulation and damage healthy ovarian tissue, making it harder to get pregnant. Early evaluation protects your fertility window.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-red-50 border border-red-200 shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0"><ShieldCheck className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-red-800 mb-1">Emergency: Sudden Severe Pain</h4>
                                    <p className="text-red-700/80 leading-relaxed">Sudden, intense pelvic pain with nausea and vomiting may indicate cyst rupture or ovarian torsion (twisting). This is a surgical emergency — seek immediate care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customized Surgical Approach Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Our Approach</span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Fertility-Preserving <span className="text-[#C21975]">Ovarian Surgery</span><br />by Dr. Vinita Khemani
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Every woman&apos;s journey is unique. Dr. Khemani tailors each treatment plan to your specific needs and health goals.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                            <div className="w-14 h-14 rounded-full bg-pink-50 text-[#C21975] flex items-center justify-center shadow-sm mb-6 group-hover:bg-[#C21975] group-hover:text-white transition-colors">
                                <Heart className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fertility Preservation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our primary goal is to remove the cyst while meticulously preserving maximal healthy ovarian tissue. Dr. Khemani uses careful dissection techniques to protect the ovarian blood supply and egg reserve (AMH), safeguarding your future ability to conceive naturally or via IVF.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                            <div className="w-14 h-14 rounded-full bg-pink-50 text-[#C21975] flex items-center justify-center shadow-sm mb-6 group-hover:bg-[#C21975] group-hover:text-white transition-colors">
                                <Stethoscope className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Minimally Invasive</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Utilizing advanced 3D HD laparoscopic technology, we operate through tiny 5mm incisions. This keyhole approach ensures minimal blood loss, significantly reduced post-operative pain, and almost invisible scarring, allowing you to walk the same day and return to work within a week.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                            <div className="w-14 h-14 rounded-full bg-pink-50 text-[#C21975] flex items-center justify-center shadow-sm mb-6 group-hover:bg-[#C21975] group-hover:text-white transition-colors">
                                <FlaskConical className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Long-Term Wellness</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Surgery is just one step. To prevent cyst recurrence—especially with endometriosis—we provide a holistic long-term plan involving hormonal management, dietary modifications, and lifestyle counseling. We treat the root cause, not just the symptom, promoting complete hormonal balance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ovarian Cysts in India - Long-form Content */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">When to Act</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ovarian Cysts: <br /><span className="text-[#C21975]">When to Worry, When to Wait</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Ovarian cysts are extremely common — studies show that nearly every woman of reproductive age develops at least one ovarian cyst during her lifetime. The vast majority of these are functional cysts that resolve on their own within 2-3 menstrual cycles without any treatment.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                However, certain types of cysts — dermoid cysts, endometriomas (chocolate cysts), and cystadenomas — require careful evaluation and may need surgical removal. The key concern is always: Is it cancerous? Modern ultrasound techniques and tumor markers (CA-125) can help differentiate benign from suspicious cysts with high accuracy.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani&apos;s approach prioritizes ovarian conservation. Unlike some surgeons who default to removing the entire ovary, Dr. Khemani performs laparoscopic cystectomy — removing only the cyst while preserving the healthy ovarian tissue. This is especially critical for younger women who wish to preserve their fertility. Her meticulous surgical technique ensures minimal damage to the surrounding ovarian tissue, protecting the ovarian reserve.
                            </p>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Get a Cyst Evaluation
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative sticky top-32">
                            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image src="/images/WhatsApp Image 2026-01-14 at 12.55.30 PM.jpeg" alt="Laparoscopic ovarian cystectomy consultation and evaluation" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block z-20">
                                <p className="text-sm font-bold text-gray-900 mb-1">Ovary Preserved</p>
                                <p className="text-xs text-gray-600">Cyst removed, healthy tissue saved — protecting your fertility and hormonal balance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Concerned About an Ovarian Cyst?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Not every cyst needs surgery. Get expert evaluation to understand your options and find the right course of action.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Book a Consultation
                        <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </button>
                </div>
            </section>

            {/* Why Choose Us — Bento Grid */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Surgical Excellence</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Precision surgery that{" "}<br />
                                <span className="italic text-[#C21975]">Protects your fertility</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg max-w-md leading-relaxed lg:text-right">
                            Every cystectomy is planned with one goal: remove the disease, preserve the ovary, and protect your reproductive future.
                        </p>
                    </div>
                    {/* Row 1: 3 columns */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6"><Microscope className="w-7 h-7" /></div>
                                <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-4">Pre-Surgical Tumor Marker Evaluation</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">Every cyst undergoes CA-125, HE4, and ultrasound morphology assessment before surgery. This triple-check protocol ensures we identify any suspicious features and plan the safest surgical approach.</p>
                        </div>
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6"><Egg className="w-7 h-7" /></div>
                                <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-4">Ovarian Reserve Protection</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">Using precise stripping technique instead of cautery-heavy methods, Dr. Khemani minimizes thermal damage to surrounding follicles — preserving your AMH levels and egg reserve for future pregnancies.</p>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden min-h-[380px] shadow-lg">
                            <Image src="/images/WhatsApp_Image_2025-12-22_at_12.22.00_PM.jpeg" alt="3D Laparoscopic cystectomy technology used for precise ovarian surgery" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <p className="font-bold text-lg mb-1">3D HD Laparoscopy</p>
                                <p className="text-sm opacity-90">Depth perception that enables millimeter-precise cyst wall separation from healthy ovarian tissue.</p>
                            </div>
                        </div>
                    </div>
                    {/* Row 2: 3 columns */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6"><Timer className="w-7 h-7" /></div>
                                <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-4">Same-Day Discharge in Most Cases</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">Laparoscopic cystectomy typically takes 45-90 minutes. With just 3 tiny incisions (5mm each), most patients go home the same day and return to normal activities within 5-7 days.</p>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden min-h-[380px] shadow-lg">
                            <Image src="/images/WhatsApp Image 2025-12-22 at 12.22.01 PM.jpeg" alt="Dr. Vinita Khemani performing laparoscopic cystectomy consultation" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <p className="font-bold text-lg mb-1">Dr. Vinita Khemani</p>
                                <p className="text-sm opacity-90">23+ years specializing in fertility-preserving laparoscopic gynecological surgery.</p>
                            </div>
                        </div>
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6"><ClipboardCheck className="w-7 h-7" /></div>
                                <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-4">Comprehensive Post-Op &amp; Recurrence Prevention</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">Surgery is just the beginning. Every patient receives a personalized follow-up plan including hormonal management, dietary guidance, and scheduled ultrasound monitoring to minimize cyst recurrence.</p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <button onClick={() => setIsEnquiryModalOpen(true)} className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]">
                            Consult Dr. Khemani
                            <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45"><ArrowUpRight className="w-6 h-6" /></span>
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
                                    Dr. Khemani answers your concerns about cysts.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
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

            <SharedCTA title="Worried about Ovarian Cysts?" subtitle="Get a precise diagnosis and fertility-sparing treatment plan with Dr. Vinita Khemani." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main >
    );
}
