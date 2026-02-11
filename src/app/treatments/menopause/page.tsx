"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Sun, CheckCircle, Calendar, ArrowUpRight, ChevronDown,
    Heart, ShieldCheck, Bone, Brain, Thermometer
} from "lucide-react";

const stages = [
    { stage: "Perimenopause", age: "Age 40-50", desc: "Transitional phase with irregular periods, hot flashes, and hormonal fluctuations. Early management significantly improves quality of life." },
    { stage: "Menopause", age: "Average age 51", desc: "12 consecutive months without menstruation marks menopause. Hormonal therapy and lifestyle adjustments become critical for comfort and health." },
    { stage: "Post-menopause", age: "Beyond menopause", desc: "Long-term health monitoring for bone density, cardiovascular health, and cognitive wellness. Regular screenings ensure healthy aging." },
];

const services = [
    { icon: Thermometer, title: "Hot Flash Management", desc: "Effective relief from hot flashes, night sweats, and vasomotor symptoms through HRT and non-hormonal alternatives." },
    { icon: Bone, title: "Bone Health & Osteoporosis", desc: "DEXA scanning, calcium/vitamin D supplementation, and osteoporosis prevention strategies to maintain bone density." },
    { icon: Heart, title: "Cardiovascular Screening", desc: "Heart disease risk assessment and prevention. Cholesterol management, blood pressure monitoring, and lifestyle counseling." },
    { icon: Brain, title: "Mood & Cognitive Support", desc: "Management of mood swings, anxiety, sleep disturbances, and brain fog through integrated medical and lifestyle approaches." },
    { icon: ShieldCheck, title: "HRT (Hormone Therapy)", desc: "Bioidentical hormone replacement therapy (estrogen, progesterone) customized to individual symptoms, risk profile, and preferences." },
    { icon: Sun, title: "Wellness Programs", desc: "Holistic menopause wellness including nutrition counseling, exercise planning, stress management, and preventive health screenings." },
];

const faqs = [
    { q: "At what age does menopause typically start?", a: "The average age of natural menopause in Indian women is 46-48 years. Perimenopause (the transitional phase) can begin 4-8 years earlier. Some women may experience early menopause before 40." },
    { q: "Is HRT safe?", a: "Modern HRT is very safe when prescribed appropriately and individualized. Dr. Khemani carefully evaluates each patient's risk profile before recommending hormone therapy. For most women, benefits significantly outweigh risks when started within 10 years of menopause." },
    { q: "What are the alternatives to HRT?", a: "For women who cannot or prefer not to take HRT, alternatives include non-hormonal medications (SSRIs, gabapentin), herbal supplements, cognitive behavioral therapy for hot flashes, and intensive lifestyle modifications." },
    { q: "How do I know if I'm in menopause?", a: "Classic signs include irregular periods (eventually stopping), hot flashes, night sweats, vaginal dryness, mood changes, and sleep problems. Blood tests for FSH and estradiol can confirm menopause." },
];

export default function MenopausePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Menopause Care</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Graceful Menopause</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">Management & HRT.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Dr. Vinita Khemani provides compassionate menopause care — from symptom relief and HRT to bone health and long-term wellness strategies for every stage of the journey.
                                    </p>
                                    <Link href="#contact" className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl" style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 100%)' }}>
                                        Book Consultation
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45"><ArrowUpRight className="w-6 h-6" /></span>
                                    </Link>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[400px] md:h-[500px] order-first lg:order-none">
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                        <Image src="/images/2023-04-23.webp" alt="Menopause care and HRT" fill className="object-cover" priority />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stages */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Understanding Menopause</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Three</span>{" "}
                            <span className="text-[#C21975]">Stages</span>
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {stages.map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 pointer-events-none">{String(i + 1).padStart(2, '0')}</div>
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#C21975] bg-[#f5e6ef] mb-4">{s.age}</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.stage}</h3>
                                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Our Services</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Menopause</span>{" "}
                            <span className="text-[#C21975]">Services</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((svc, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <svc.icon className="w-7 h-7 text-[#C21975]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image + content section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image src="/images/unnamed (2).webp" alt="Dr. Vinita Khemani providing menopause counseling" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Why Dr. Khemani?</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Compassionate</span>{" "}
                                <span className="text-[#C21975]">Approach</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                With 21+ years of experience, Dr. Khemani understands that menopause is not just a medical event — it&apos;s a life transition. Her approach combines evidence-based treatment with empathetic, patient-centered care.
                            </p>
                            <div className="space-y-4">
                                {["Individualized treatment plans", "Evidence-based HRT protocols", "Regular monitoring & dose adjustment", "Long-term bone & heart health management", "Emotional support & lifestyle coaching"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Menopause</span>{" "}
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

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #730940 0%, #C21975 100%)' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Navigate Menopause Confidently</h2>
                        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">Schedule a consultation with Dr. Vinita Khemani for personalized menopause management.</p>
                        <Link href="#contact" className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg hover:scale-105 transition-transform shadow-xl">
                            Book Consultation <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center group-hover:rotate-45 transition-transform"><Calendar className="w-6 h-6" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main>
    );
}
