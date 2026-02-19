"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
    Scan, ArrowUpRight, ChevronDown,
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
    { q: "Who is the best laparoscopic surgeon in Kolkata?", a: "Dr. Vinita Khemani is one of the most trusted laparoscopic surgeons in Kolkata with over 23 years of experience. She has performed 583+ successful surgeries, specializing in fibroid removal, ovarian cysts, and hysterectomy with minimal scarring." },
    { q: "What is laparoscopic surgery?", a: "Laparoscopic surgery (keyhole surgery) is a minimally invasive technique where operations are performed through 2-3 tiny incisions (5-10mm) using a camera and specialized instruments. It offers less pain, faster recovery, and minimal scarring compared to open surgery." },
    { q: "How long is the recovery after laparoscopic surgery?", a: "Most patients can go home the same day or within 24 hours. Normal activities can be resumed within 48 hours, and full recovery typically takes 1-2 weeks compared to 4-6 weeks for open surgery. Dr. Khemani ensures rapid recovery protocols." },
    { q: "What is the cost of laparoscopic surgery in Kolkata?", a: "The cost depends on the complexity of the procedure (e.g., diagnostic vs operative) and the hospital facility chosen. Dr. Khemani operates at multiple reputable hospitals in Kolkata to provide flexible options for her patients." },
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
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Laparoscopic Surgery</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">in Kolkata</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Dr. Vinita Khemani, a leading gynecological surgeon in Kolkata, has performed 583+ successful laparoscopic surgeries. Keyhole procedures with minimal pain, tiny scars, and recovery in days — not weeks.
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
                                        <Image src="/images/emergency_ot_ready_1771254301635.png" alt="Laparoscopic Surgery in Kolkata" fill className="object-cover" priority />
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

            {/* Understanding Laparoscopy - Long-form Content */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">In-Depth Guide</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">The Revolution of <br /><span className="text-[#C21975]">Minimally Invasive Surgery</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Laparoscopic surgery has fundamentally transformed gynecological care over the past two decades. What once required large abdominal incisions, week-long hospital stays, and months of recovery can now be accomplished through 2-3 tiny keyhole incisions (5-10mm each), enabling same-day or next-day discharge with minimal pain.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                In India, the adoption of laparoscopic gynecological surgery has been steadily growing, but many women are still unaware that their conditions — fibroids, ovarian cysts, endometriosis, ectopic pregnancy, and even hysterectomy — can be treated through keyhole techniques. The advantages are substantial: 80% less postoperative pain, virtually invisible scars, dramatically lower infection rates, and return to normal activities within days.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani has been at the forefront of laparoscopic gynecological surgery in Kolkata, having performed 583+ successful laparoscopic procedures. Her expertise spans the full spectrum — from simple diagnostic laparoscopy to complex procedures like total laparoscopic hysterectomy (TLH), laparoscopic myomectomy for large fibroids, and deep endometriosis excision. Each surgery is performed with meticulous precision, prioritizing organ preservation and patient safety.
                            </p>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Explore Laparoscopic Options
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image src="/images/endometriosis_surgery_1771474850115.png" alt="Advanced laparoscopic surgery technology" fill className="object-cover" />
                            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block">
                                <p className="text-sm font-bold text-gray-900 mb-1">583+ Procedures</p>
                                <p className="text-xs text-gray-600">Dr. Khemani&apos;s laparoscopic expertise spans diagnostic, operative, and complex cases.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Is Your Condition Treatable Laparoscopically?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Many conditions that once required open surgery can now be treated through keyhole incisions. Find out if laparoscopy is right for you.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Get a Surgical Opinion
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
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Why Choose Us</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Your trusted partner in{" "}<br />
                                <span className="italic text-[#C21975]">laparoscopic surgery</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg max-w-md leading-relaxed lg:text-right">
                            One of Kolkata&apos;s most experienced laparoscopic gynecological surgeons, with 583+ successful procedures and same-day discharge for most cases.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-6">Full spectrum care from diagnostic to complex operative laparoscopy</h3>
                            <p className="text-[#C21975] text-base leading-relaxed">Total Laparoscopic Hysterectomy (TLH) expertise, laparoscopic myomectomy with uterus preservation, and advanced endometriosis excision.</p>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden min-h-[380px] shadow-lg">
                            <Image src="/images/dr-vinita-about-hero.webp" alt="Dr. Vinita Khemani - Laparoscopic Surgery Expert" fill className="object-cover" />
                        </div>
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-6">Same-day or next-day discharge for most laparoscopic procedures</h3>
                            <p className="text-gray-600 text-base leading-relaxed">Comprehensive surgical skills combined with compassionate patient care, ensuring smaller incisions, less pain, and faster recovery for every patient.</p>
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
            <SharedCTA title="Need Laparoscopic Surgery in Kolkata?" subtitle="Consult Dr. Vinita Khemani for safe, minimally invasive surgical solutions tailored to your needs." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Laparoscopic Surgery in Kolkata", "about": { "@type": "MedicalProcedure", "name": "Laparoscopic Surgery", "procedureType": "Minimally Invasive" }, "mainEntity": { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } }) }} />
            <Footer />
        </main>
    );
}
