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
    { title: "Abnormal Bleeding", desc: "Investigating the root cause of heavy, prolonged, or irregular periods. Hysteroscopy allows direct visualization to identify polyps, submucosal fibroids, or endometrial hyperplasia that ultrasounds might miss, often allowing for immediate biopsy or treatment.", icon: FileSearch },
    { title: "Polyp Removal (Polypectomy)", desc: " uterine polyps are common causes of spotting and infertility. Dr. Khemani uses precision hysteroscopic techniques to remove these growths completely from the root without damaging the surrounding healthy uterine lining, ensuring immediate symptom relief.", icon: CheckCircle },
    { title: "Submucosal Fibroid Resection", desc: "Removing fibroids that bulge into the uterine cavity (submucosal) and cause severe bleeding or fertility issues. Using a resectoscope, these can often be shaved down completely through the cervix, avoiding the need for open surgery or cuts on the abdomen.", icon: Layers },
    { title: "Infertility Evaluation", desc: "A critical step before IVF or IUI. We assess the uterine cavity for any anatomical barriers to implantation, such as adhesions, scar tissue, or congenital anomalies, ensuring the 'soil' is perfect for the embryo.", icon: Microscope },
    { title: "Septum Correction (Metroplasty)", desc: "Correcting a septate uterus (a congenital partition inside the womb) is vital for women with a history of recurrent miscarriage. Hysteroscopic resection restores the normal cavity shape, significantly improving the chances of carrying a pregnancy to term.", icon: CheckCircle },
    { title: "Lost IUCD Retrieval", desc: "Locating and safely removing an Intrauterine Contraceptive Device (Copper-T) when its strings are no longer visible. Hysteroscopy avoids blind manipulation and ensures the device is removed without injury to the uterine walls.", icon: Eye }
];

const faqs = [
    { q: "Who is the best doctor for hysteroscopy?", a: "Dr. Vinita Khemani is a highly experienced gynecologist known for her skill in diagnostic and operative hysteroscopy. She successfully treats uterine polyps, fibroids, and septums with minimal intervention." },
    { q: "What is the cost of hysteroscopy?", a: "The cost depends on whether it is diagnostic or operative and the hospital chosen. Dr. Khemani strives to provide affordable, transparent pricing packages for hysteroscopy at leading the city hospitals." },
    { q: "Is hysteroscopy painful?", a: "Diagnostic hysteroscopy is often painless or causes only mild cramping, similar to a period. Does not always require anesthesia. Operative hysteroscopy (removing polyps/fibroids) is done under mild sedation or short anesthesia at our the city facilities so you sleep through it." },
    { q: "How long is the procedure?", a: "A diagnostic look takes only 5-10 minutes. If a procedure is needed (like polyp removal), it may take 20-30 minutes." },
    { q: "Do I need to stay in the hospital?", a: "No. Hysteroscopy is almost always a Day Care procedure. You come in the morning to the hospital and go home by afternoon." },
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
                                        <span className="text-gray-900">Advanced Hysteroscopy</span> <br />
                                        <span className="italic text-[#C21975]">&amp; Uterine Evaluation in Kolkata.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        A revolutionary diagnostic and treatment method that allows Dr. Khemani to see and treat inside the womb without a single incision. As a specialist in Day-care hysteroscopy, Dr. Khemani is also a uterine polyp removal specialist, offering gold standard care for abnormal bleeding and infertility.
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
                                        <Image src="/images/2023-02-08.webp" alt="Hysteroscopy Procedure" fill className="object-cover" />
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

            {/* Understanding Hysteroscopy - Long-form Content */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">In-Depth Guide</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Diagnostic vs. Operative <br /><span className="text-[#C21975]">Hysteroscopy: What to Expect</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Hysteroscopy is one of the most valuable tools in modern gynecology, allowing direct visualization of the uterine cavity. Unlike ultrasound or MRI, which provide indirect images, hysteroscopy gives the surgeon a real-time, magnified view of the uterine lining — making diagnosis incredibly accurate.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                <strong>Diagnostic hysteroscopy</strong> is a quick, often outpatient procedure used to investigate abnormal bleeding, recurrent miscarriages, or infertility. A thin telescope (2-5mm) is inserted through the cervix — no incisions are needed. Most women describe mild cramping, similar to a period.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                <strong>Operative hysteroscopy</strong> goes a step further — the surgeon can remove polyps, fibroids (myomectomy), adhesions (synechiae), or correct uterine septum in the same sitting. This &quot;see and treat&quot; approach eliminates the need for a second procedure, saving the patient time, cost, and anxiety.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani performs hysteroscopy at well-equipped hospital settings, ensuring patient safety with anesthesia support and advanced resectoscope technology. For many women struggling with unexplained infertility or recurrent pregnancy loss, a single hysteroscopy can identify and correct the problem.
                            </p>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Ask About Hysteroscopy
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative sticky top-32">
                            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image src="/images/hysteroscopy-procedure.jpg" alt="Hysteroscopy procedure" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block z-20">
                                <p className="text-sm font-bold text-gray-900 mb-1">See &amp; Treat</p>
                                <p className="text-xs text-gray-600">Diagnose and treat uterine conditions in a single sitting — no incisions needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Need a Uterine Evaluation?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Hysteroscopy provides the most accurate diagnosis for abnormal bleeding, polyps, fibroids, and infertility-related uterine issues.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Book Hysteroscopy Consultation
                        <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </button>
                </div>
            </section>

            {/* Why Choose Dr. Khemani - Complex Grid Section */}
            <section className="py-24 bg-[#fff9fc]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    {/* Section Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
                        <div className="max-w-3xl">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">
                                Why Choose Dr. Khemani
                            </span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Expert Hysteroscopy Care <br />
                                <span className="text-[#C21975] italic">For Uterine Preservation</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                            With 23+ years of surgical excellence, Dr. Khemani uses advanced &quot;See &amp; Treat&quot; hysteroscope technology to ensure safe, scarless, and effective outcomes for every patient.
                        </p>
                    </div>

                    {/* Complex Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Left Column */}
                        <div className="flex flex-col gap-6 h-full">
                            {/* Card 1: White */}
                            <div className="bg-white p-8 rounded-[2.5rem] flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#C21975] flex items-center justify-center mb-6">
                                    <Microscope className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced German Optics</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Utilizing high-definition Storz/Wolf hysteroscopes for crystal-clear visualization, permitting Dr. Khemani to identify even the smallest pathologies that standard ultrasounds often miss.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Dark Purple */}
                            <div className="bg-[#8a2f5e] p-8 rounded-[2.5rem] flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow text-white">
                                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Single-Sitting &quot;See &amp; Treat&quot;</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        A unique approach where diagnosis and treatment happen simultaneously. If a polyp or fibroid is found, it is removed immediately, sparing you a second surgery.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Center Column: Image & Stats */}
                        <div className="space-y-6">
                            {/* Image with Quote */}
                            <div className="relative h-[400px] lg:h-[420px] rounded-[2.5rem] overflow-hidden group">
                                <Image
                                    src="/images/WhatsApp Image 2026-01-14 at 12.55.29 PM.jpeg"
                                    alt="Dr. Vinita Khemani Hysteroscopy Specialist"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white font-medium text-lg leading-relaxed">
                                        &quot;Accurate diagnosis is the first step to a cure. Hysteroscopy allows us to see the problem directly and fix it instantly.&quot;
                                    </p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#efebeb] p-6 rounded-[2rem] text-center">
                                    <p className="text-[#C21975] font-display text-3xl font-bold mb-1">23+</p>
                                    <p className="text-gray-600 text-sm font-medium">Years Experience</p>
                                </div>
                                <div className="bg-[#efebeb] p-6 rounded-[2rem] text-center">
                                    <p className="text-[#C21975] font-display text-3xl font-bold mb-1">10k+</p>
                                    <p className="text-gray-600 text-sm font-medium">Procedures Done</p>
                                </div>
                                <div className="bg-[#efebeb] p-6 rounded-[2rem] text-center">
                                    <p className="text-[#C21975] font-display text-3xl font-bold mb-1">Day Care</p>
                                    <p className="text-gray-600 text-sm font-medium">No Overnight Stay</p>
                                </div>
                                <div className="bg-[#efebeb] p-6 rounded-[2rem] text-center">
                                    <p className="text-[#C21975] font-display text-3xl font-bold mb-1">Painless</p>
                                    <p className="text-gray-600 text-sm font-medium">Minimal Recovery</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-6 h-full">
                            {/* Card 3: White */}
                            <div className="bg-white p-8 rounded-[2.5rem] flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#C21975] flex items-center justify-center mb-6">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Fertility Optimization</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Special focus on restoring the uterine cavity&apos;s shape and lining health to maximize implantation success rates for natural conception or IVF cycles.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4: White */}
                            <div className="bg-white p-8 rounded-[2.5rem] flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#C21975] flex items-center justify-center mb-6">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Painless Day Care</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Performed under safe short sedation in top hospital settings. Patients typically walk and walk out the same day with minimal to no downtime.
                                    </p>
                                </div>
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

            <SharedCTA title="Day Care Hysteroscopy" subtitle="Most patients go home the same day. Book your evaluation now." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main >
    );
}
