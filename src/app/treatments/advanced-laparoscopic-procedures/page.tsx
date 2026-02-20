"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Microscope, Target, ChevronDown, Zap, Stethoscope, Scissors, RefreshCw, AlertCircle, Search } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const procedures = [
    {
        title: "Total Laparoscopic Hysterectomy (TLH)",
        desc: "Complete removal of the uterus (and cervix) using precision minimally invasive techniques. This is widely considered the gold standard for hysterectomy, offering less pain, minimal blood loss, and a recovery time of just 1-2 weeks compared to 6-8 weeks for open surgery.",
        icon: Stethoscope
    },
    {
        title: "Laparoscopic Myomectomy",
        desc: "Surgical removal of uterine fibroids while meticulously preserving the uterus. This procedure is crucial for women wishing to retain future fertility or those who simply want to keep their uterus, removing even large or multiple fibroids safely.",
        icon: Scissors
    },
    {
        title: "Corrective Surgeries",
        desc: "Specialized repair of uterine anomalies (like septum or bicornuate uterus), tubal recanalization for reversal of ligation, or severe adhesiolysis. These procedures aim to restore normal pelvic anatomy and improve natural fertility potential.",
        icon: RefreshCw
    },
    {
        title: "Ectopic Pregnancy",
        desc: "Urgent laparoscopic management of tubal pregnancies to prevent rupture and internal bleeding. Dr. Khemani prioritizes 'salpingostomy' (tube preservation) whenever possible, saving the fallopian tube to protect future fertility.",
        icon: AlertCircle
    },
    {
        title: "Ovarian Cystectomy",
        desc: "Precise removal of pathological cysts (Dermoid, Endometriotic, Mucinous) while carefully sparing healthy ovarian tissue. This technique preserves ovarian reserve and hormonal function, which is critical for women of reproductive age.",
        icon: Target
    },
    {
        title: "Diagnostic Laparoscopy",
        desc: "The gold-standard investigation for unexplained pelvic pain, infertility, or suspected endometriosis. It allows for direct visualization of pelvic organs and often permits 'see-and-treat' intervention during the same anesthesia.",
        icon: Search
    }
];

const faqs = [
    { q: "Who is the best doctor for laparoscopic surgery?", a: "Dr. Vinita Khemani is a leading laparoscopic surgeon, known for her expertise in complex minimally invasive procedures like TLH, myomectomy, and endometriosis excision. She operates at top hospitals including Bhagirathi Neotia, Charnock Hospital, and Apollo Clinic." },
    { q: "Why choose advanced laparoscopy over open surgery?", a: "Advanced laparoscopy offers significant benefits: minimal scarring (tiny 5mm incisions), less post-operative pain, shorter hospital stay (often 24 hours), and a much faster return to daily life (1-2 weeks vs 6 weeks). Dr. Khemani specializes in these minimally invasive techniques." },
    { q: "What is the cost of laparoscopic surgery?", a: "The cost varies depending on the procedure (e.g., diagnostic vs. operative, hysterectomy vs. cystectomy) and the hospital chosen. Dr. Khemani offers surgical options at multiple hospitals to suit different insurance and budget requirements." },
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
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[70vh] flex items-center bg-[#fff0f5]">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <Microscope className="w-4 h-4 text-[#C21975]" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Minimally Invasive Excellence</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Advanced Laparoscopic </span> <br />
                                        <span className="italic text-[#C21975]">Procedures in Kolkata</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Complex gynecological surgeries performed through tiny incision. Less pain, minimal scarring, and faster return to normal life. Dr. Vinita Khemani is a master of keyhole surgery with over 608+ successful procedures.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                    >
                                        Book Surgical Consultation
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </span>
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[400px] md:h-[500px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/Laparoscopic Surgery.jpg" alt="Advanced laparoscopic keyhole surgery by Dr. Vinita Khemani" fill className="object-cover" />
                                    </div>
                                    {/* Float Card */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-white"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-pink-100 rounded-lg text-[#C21975]"><Zap className="w-5 h-5" /></div>
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
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Scope of Work</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Procedures We <span className="text-[#C21975]">Perform</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {procedures.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-4 p-8 rounded-[2rem] bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition-all group hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white text-[#C21975] flex items-center justify-center shadow-sm shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C21975] transition-colors">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patient Journey Section (New) */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Standard of <span className="text-[#C21975]">Care</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">From diagnosis to discharge, we ensure a seamless and supportive experience.</p>
                    </div>
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C21975]/20 to-transparent -translate-y-1/2 hidden lg:block" />

                        <div className="grid lg:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Evaluation", desc: "Detailed history and ultrasound to plan the surgery." },
                                { step: "02", title: "Preparation", desc: "Pre-anesthesia checkup and counseling." },
                                { step: "03", title: "Surgery", desc: "Minimally invasive procedure using latest tech." },
                                { step: "04", title: "Recovery", desc: "Rapid mobilization and discharge often in 24hrs." }
                            ].map((s, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="relative z-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center group hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 mx-auto bg-[#fff0f5] text-[#C21975] rounded-full flex items-center justify-center font-bold text-lg mb-4 ring-4 ring-white group-hover:scale-110 transition-transform">
                                        {s.step}
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-sm text-gray-600">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Understanding Laparoscopy - Deep Dive */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Understanding the Procedure</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">What is <br /><span className="text-[#C21975]">Laparoscopic Surgery?</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Laparoscopic surgery, often called &quot;keyhole surgery&quot; or &quot;minimally invasive surgery,&quot; is a modern surgical technique where operations are performed through tiny incisions (usually 5-10mm) instead of large open cuts. A thin telescope with a high-definition camera (laparoscope) is inserted through one incision, providing a magnified view of the internal organs on a monitor.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Specialized instruments are then inserted through additional small incisions to perform the surgery with precision. The surgeon operates while watching the magnified images on a screen, allowing for greater accuracy than what is possible with the naked eye during open surgery. Carbon dioxide gas is used to gently inflate the abdomen, creating a working space for the surgeon.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani has performed over 608 laparoscopic procedures across multiple hospitals, ranging from routine diagnostic laparoscopies to complex procedures like Total Laparoscopic Hysterectomy (TLH) for large uteri and laparoscopic myomectomy for multiple fibroids. Her expertise ensures that even complex cases that might traditionally require open surgery are safely handled through minimally invasive techniques.
                            </p>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Ask About Your Case
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative sticky top-32">
                            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image src="/images/laparoscopy-explanation.jpg" alt="Understanding laparoscopic keyhole surgery procedure" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[260px] hidden md:block z-20">
                                <p className="text-sm font-bold text-gray-900 mb-1">Open vs Laparoscopic</p>
                                <p className="text-xs text-gray-600">Laparoscopy uses 5mm incisions vs 15-20cm cuts in open surgery — 80% faster recovery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Considering Surgery?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Most gynecological surgeries that were traditionally done through large abdominal incisions can now be performed laparoscopically. Discuss your options with Dr. Khemani today.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Get a Surgical Consultation
                        <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </button>
                </div>
            </section>

            {/* Why Choose Us — Enhanced Bento Grid */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Why Choose Dr. Khemani</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                the city&apos;s leading expert in{" "}<br />
                                <span className="italic text-[#C21975]">Advanced laparoscopic surgery</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg max-w-md leading-relaxed lg:text-right">
                            A surgeon&apos;s skill directly determines your outcome. With 608+ laparoscopic surgeries and 23+ years of experience, Dr. Khemani brings precision and safety to every procedure.
                        </p>
                    </div>

                    {/* Enhanced Bento Grid */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Left Column — 2 stacked cards */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-[#f5f0f2] rounded-[2rem] p-8 flex flex-col justify-between flex-1 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-[#C21975]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                                    Complex Surgical Portfolio
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    From TLH for uteri up to 20-week size, myomectomies for multiple or large fibroids, extensive endometriosis excision, to challenging ovarian cystectomies and ectopic pregnancies — all performed through tiny 5mm incisions.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-[#C21975] to-[#8a2f5e] rounded-[2rem] p-8 flex flex-col justify-between flex-1 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-snug mb-4">
                                    Advanced Energy Devices &amp; Bloodless Technique
                                </h3>
                                <p className="text-pink-100 text-sm leading-relaxed">
                                    Using harmonic scalpels, bipolar vessel sealers, and HD 4K visualization systems for near-bloodless surgical fields. This precision minimizes tissue damage, reduces operative time, and accelerates healing.
                                </p>
                            </div>
                        </div>

                        {/* Center — Image + Stats */}
                        <div className="flex flex-col gap-6">
                            <div className="relative rounded-[2rem] overflow-hidden min-h-[300px] flex-1 shadow-lg">
                                <Image src="/images/laparoscopy-technology.jpg" alt="Advanced laparoscopic surgical equipment used by Dr. Vinita Khemani" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white text-sm font-semibold">&quot;Laparoscopic surgery is not just a technique — it&apos;s a commitment to better outcomes for every patient.&quot;</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#f5f0f2] rounded-2xl p-5 text-center">
                                    <p className="text-2xl font-bold text-[#C21975]">608+</p>
                                    <p className="text-xs text-gray-500 mt-1">Surgeries Done</p>
                                </div>
                                <div className="bg-[#f5f0f2] rounded-2xl p-5 text-center">
                                    <p className="text-2xl font-bold text-[#C21975]">5mm</p>
                                    <p className="text-xs text-gray-500 mt-1">Tiny Incisions</p>
                                </div>
                                <div className="bg-[#f5f0f2] rounded-2xl p-5 text-center">
                                    <p className="text-2xl font-bold text-[#C21975]">6</p>
                                    <p className="text-xs text-gray-500 mt-1">Hospitals across the region</p>
                                </div>
                                <div className="bg-[#f5f0f2] rounded-2xl p-5 text-center">
                                    <p className="text-2xl font-bold text-[#C21975]">24-48h</p>
                                    <p className="text-xs text-gray-500 mt-1">Avg Discharge</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column — 2 stacked cards */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-[#f5f0f2] rounded-[2rem] p-8 flex flex-col justify-between flex-1 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-[#C21975]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                                    Complete Surgical Care Pathway
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    From initial consultation and pre-operative workup through surgery and post-op recovery — every step is personally overseen by Dr. Khemani. Clear communication, detailed consent discussions, and structured follow-up protocols ensure peace of mind.
                                </p>
                            </div>
                            <div className="bg-[#f5f0f2] rounded-[2rem] p-8 flex flex-col justify-between flex-1 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-[#C21975]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                                    Multi-Hospital Access across the region
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Operating at Bhagirathi Neotia (New Town), Charnock Hospital (VIP Road), Apollo Clinic (Chinar Park), Spandan Hospital, and ILS Hospital (Dumdum) — choose the location most convenient to you, with the same expert surgical care.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <button onClick={() => setIsEnquiryModalOpen(true)} className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]">
                            Schedule a Surgical Consultation
                            <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45"><ArrowUpRight className="w-6 h-6" /></span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Recovery & Aftercare */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl order-last sticky top-32">
                            <Image src="/images/laparoscopy-recovery.jpg" alt="Recovery after laparoscopic surgery at home" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#540d2d]/50 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-lg font-bold">24-48 Hour Discharge</p>
                                <p className="text-sm opacity-90">Most patients go home within a day and return to work in 1-2 weeks</p>
                            </div>
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Post-Surgery Guide</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Recovery &amp; <br /><span className="text-[#C21975]">Aftercare</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                One of the biggest advantages of laparoscopic surgery is the dramatically faster recovery compared to open surgery. Dr. Khemani provides detailed post-operative care instructions and close follow-up to ensure a smooth recovery.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "First 24 Hours", desc: "Mild abdominal discomfort and shoulder tip pain from residual CO2 gas is normal. You will be mobilized early and encouraged to walk within hours of surgery." },
                                    { title: "Days 2-7", desc: "Gradual return to light activities. Incision sites should be kept clean and dry. Mild painkillers are sufficient for most patients." },
                                    { title: "Week 2-3", desc: "Most patients return to desk jobs and light household work. Avoid heavy lifting (over 5kg) and strenuous exercise." },
                                    { title: "Week 4-6", desc: "Full recovery. Resume all activities including exercise and intimacy (as advised). Follow-up appointment to confirm complete healing." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 p-4 bg-white rounded-xl border border-pink-50 shadow-sm hover:shadow-md transition-all"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#fff0f5] flex items-center justify-center text-[#C21975] font-bold shrink-0">{i + 1}</div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
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
                                    Surgical <br />
                                    <span className="text-[#C21975]">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Common queries about laparoscopic procedures.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
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

            <SharedCTA title="Advanced Laparoscopic Care" subtitle="Choose Dr. Vinita Khemani for safe, minimally invasive surgical solutions." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main >
    );
}
