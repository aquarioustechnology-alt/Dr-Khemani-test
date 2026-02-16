"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CircleDot, ArrowUpRight, ChevronDown, Activity, AlertTriangle, ShieldCheck, Heart, Stethoscope, FlaskConical } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const types = [
    { title: "Functional Cysts", desc: "Common, benign fluid-filled sacs that form during the menstrual cycle and often disappear on their own.", icon: CircleDot },
    { title: "Dermoid Cysts", desc: "Cysts containing tissues like hair or skin. They rarely resolve on their own and may need removal.", icon: ShieldCheck },
    { title: "Endometriomas", desc: "Chocolate cysts caused by endometriosis. They are painful and can affect fertility.", icon: AlertTriangle },
    { title: "Cystadenomas", desc: "Cysts developing from ovarian surface cells, filled with watery or mucous material. Can grow large.", icon: Activity }
];

const faqs = [
    { q: "Do all ovarian cysts need surgery?", a: "No. Most functional cysts disappear on their own. We recommend surgery only if the cyst is large (>5-6cm), persistent, looks suspicious on ultrasound, or causes severe pain or fertility issues." },
    { q: "Is the surgery done laparoscopically?", a: "Yes, we specialize in 3D Laparoscopic Cystectomy. This minimally invasive technique uses tiny incisions, ensuring less pain, minimal scarring, and a much faster return to normal life compared to open surgery." },
    { q: "Will cyst removal affect my fertility?", a: "Dr. Khemani is an expert in 'Ovarian Sparing Surgery'. Using precise energy sources, she carefully peels the cyst wall (cystectomy) while preserving the healthy ovarian tissue and egg reserve, protecting your future fertility." },
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
                                        <span className="text-gray-900">Ovarian <br /> Cystectomy.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Advanced laparoscopic removal of ovarian cysts with a focus on preserving your healthy ovarian tissue and fertility. Get back to a pain-free life with minimal recovery time.
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
                                        <Image src="/images/Laparoscopic Surgery.jpg" alt="Laparoscopic Ovarian Cyst Removal" fill className="object-cover" />
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
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image src="/images/pcos-bg.png" alt="Symptoms of Ovarian Cysts" fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                        <div>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                                Signs You <span className="text-[#C21975]">Shouldn&apos;t Ignore</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-[#C21975] shrink-0 mt-1"><Activity className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Pelvic Pain</h4>
                                        <p className="text-gray-600">Dull ache or sharp pain in the lower abdomen, often on the side of the cyst.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-[#C21975] shrink-0 mt-1"><AlertTriangle className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Bloating & Heaviness</h4>
                                        <p className="text-gray-600">Feeling of fullness or pressure in the abdomen, similar to indigestion.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-[#C21975] shrink-0 mt-1"><ShieldCheck className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Irregular Cycles</h4>
                                        <p className="text-gray-600">Changes in menstrual flow, spotting, or painful periods.</p>
                                    </div>
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
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Personalized <span className="text-[#C21975]">Care</span>
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
                                Our primary goal is to remove the cyst while meticulously preserving healthy ovarian tissue, safeguarding your future fertility.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                            <div className="w-14 h-14 rounded-full bg-pink-50 text-[#C21975] flex items-center justify-center shadow-sm mb-6 group-hover:bg-[#C21975] group-hover:text-white transition-colors">
                                <Stethoscope className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Minimally Invasive</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Utilizing advanced 3D laparoscopic techniques for smaller incisions, less pain, faster recovery, and minimal scarring.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                            <div className="w-14 h-14 rounded-full bg-pink-50 text-[#C21975] flex items-center justify-center shadow-sm mb-6 group-hover:bg-[#C21975] group-hover:text-white transition-colors">
                                <FlaskConical className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Long-Term Wellness</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Beyond surgery, we provide comprehensive post-operative care and guidance to minimize recurrence and promote overall well-being.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ovarian Cysts in India - Long-form Content */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Understanding Cysts</span>
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
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image src="/images/ovarian-cyst-care.jpg" alt="Ovarian cyst evaluation and care" fill className="object-cover" />
                            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block">
                                <p className="text-sm font-bold text-gray-900 mb-1">Fertility First</p>
                                <p className="text-xs text-gray-600">Laparoscopic cystectomy preserves ovarian tissue and protects future fertility.</p>
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

            {/* Dr. Khemani&apos;s Expertise */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#fff0f5] rounded-[2.5rem] p-8 md:p-12">
                        <div className="relative h-[350px] rounded-[2rem] overflow-hidden shadow-xl">
                            <Image src="/images/dr-vinita-about-hero.webp" alt="Dr. Vinita Khemani - Ovarian Cyst Specialist" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Expert Care</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Dr. Khemani for Cyst Surgery?</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Dr. Khemani specializes in laparoscopic ovarian cystectomy with a strong focus on fertility preservation. Her surgical expertise ensures the cyst is completely removed while maximizing the preservation of healthy ovarian tissue.
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    "Fertility-preserving laparoscopic cystectomy",
                                    "Expert management of complex and large cysts",
                                    "Same-day discharge for most laparoscopic cases",
                                    "Thorough pre-operative evaluation with tumor markers",
                                    "23+ years of gynecological surgical experience"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <ShieldCheck className="w-4 h-4 text-[#C21975] shrink-0" />
                                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Consult Dr. Khemani
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
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

            <SharedCTA title="Worried about Ovarian Cysts?" subtitle="Get a precise diagnosis and fertility-sparing treatment plan." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <Footer />
        </main>
    );
}
