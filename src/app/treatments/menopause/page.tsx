"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import {
    Sun, ArrowUpRight, ChevronDown,
    Heart, ShieldCheck, Bone, Brain, Thermometer, CheckCircle2
} from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const stages = [
    { stage: "Perimenopause", age: "Age 40-50", desc: "The transitional phase leading up to menopause. You may start experiencing irregular periods, hot flashes, and mood swings as hormone levels fluctuate. Early management during this phase can significantly improve your quality of life and ease the transition." },
    { stage: "Menopause", age: "Average age 51", desc: "Defined as 12 consecutive months without a menstrual period. This marks the end of your reproductive years. Hormonal therapy and lifestyle adjustments become critical for managing symptoms like vaginal dryness, sleep disturbances, and hot flashes." },
    { stage: "Post-menopause", age: "Beyond menopause", desc: "The phase following menopause, lasting for the rest of your life. The focus shifts to long-term health monitoring, particularly for bone density (osteoporosis risk) and cardiovascular health, as the protective effect of estrogen is lost." },
];

const services = [
    {
        id: 1,
        icon: Thermometer,
        title: "Hot Flash Management",
        subtitle: "Cooling the fire within",
        description: "Hot flashes and night sweats are among the most common and bothersome symptoms of menopause. We offer a comprehensive approach to manage these vasomotor symptoms. From non-hormonal medications and lifestyle modifications to advanced hormonal therapies, we tailor the treatment to your specific severity and medical history, helping you regain comfort and sleep quality.",
        features: ["Lifestyle Triggers Analysis", "Non-Hormonal Medications", "Low-Dose HRT Options", "Cooling Techniques"],
        image: "/images/hot-flash-abstract.svg",
        color: "#fff0f5",
        badgeText: "Symptom Relief"
    },
    {
        id: 2,
        icon: Bone,
        title: "Bone Health & Osteoporosis",
        subtitle: "Strengthening your foundation",
        description: "Estrogen plays a crucial role in maintaining bone density. After menopause, bone loss accelerates, increasing the risk of osteoporosis and fractures. We provide comprehensive bone health assessments, including DEXA scans, and create personalized plans involving calcium/vitamin D supplementation, weight-bearing exercise protocols, and medical therapy when necessary to keep your bones strong.",
        features: ["DEXA Screening", "Nutritional Counseling", "Strength Training Guide", "Fracture Prevention"],
        image: "/images/bone-health-abstract.svg",
        color: "#f5e6ef",
        badgeText: "Preventive Care"
    },
    {
        id: 3,
        icon: Heart,
        title: "Cardiovascular Screening",
        subtitle: "Protecting your heart",
        description: "Heart disease risk increases significantly for women after menopause. We go beyond basic checkups to offer in-depth cardiovascular risk assessments. Our program includes monitoring cholesterol levels, blood pressure, and blood sugar, along with lifestyle coaching to manage weight and stress, ensuring your heart remains healthy for the years to come.",
        features: ["Lipid Profile Analysis", "Blood Pressure Monitoring", "Metabolic Syndrome Check", "Heart-Healthy Diet Plans"],
        image: "/images/cardio-abstract.svg",
        color: "#fff0f5",
        badgeText: "Heart Health"
    },
    {
        id: 4,
        icon: Brain,
        title: "Mood & Cognitive Support",
        subtitle: "Mental clarity and emotional balance",
        description: "Hormonal fluctuations can lead to mood swings, anxiety, depression, and 'brain fog'. We understand these are real physiological changes, not just 'in your head'. Our holistic approach integrates medical management, counseling support, and cognitive strategies to help you navigate these emotional tides and maintain mental sharpness.",
        features: ["Mood Assessment", "Cognitive Exercises", "Sleep Hygiene Protocols", "Supportive Counseling"],
        image: "/images/mood-abstract.svg",
        color: "#f5e6ef",
        badgeText: "Mental Wellness"
    },
    {
        id: 5,
        icon: ShieldCheck,
        title: "HRT (Hormone Therapy)",
        subtitle: "Restoring balance safely",
        description: "Hormone Replacement Therapy (HRT) is the most effective treatment for many menopausal symptoms. We specialize in Bioidentical Hormone Replacement Therapy (BHRT), customizing the dosage and delivery method (patch, gel, pill) to your unique needs. We carefully evaluate your personal and family history to ensure the safest and most effective approach.",
        features: ["Bioidentical Hormones", "Customized Dosing", "Regular Safety Monitoring", "Risk-Benefit Analysis"],
        image: "/images/hrt-abstract.svg",
        color: "#fff0f5",
        badgeText: "Advanced Therapy"
    },
    {
        id: 6,
        icon: Sun,
        title: "Wellness Programs",
        subtitle: "Thriving in your second spring",
        description: "Menopause is a time for renewal. Our holistic wellness programs focus on nutrition, physical activity, and stress management. We help you embrace this life stage with vitality, offering guidance on weight management, sexual health, and overall well-being to ensure you feel your best every day.",
        features: ["Nutritional Planning", "Sexual Health Support", "Yoga & Meditation", "Weight Management"],
        image: "/images/wellness-abstract.svg",
        color: "#f5e6ef",
        badgeText: "Holistic Living"
    },
];

const faqs = [
    { q: "At what age does menopause typically start?", a: "The average age of natural menopause in Indian women is 46-48 years. Perimenopause (the transitional phase) can begin 4-8 years earlier. Some women may experience early menopause before 40." },
    { q: "Is HRT safe?", a: "Modern HRT is very safe when prescribed appropriately and individualized. Dr. Khemani carefully evaluates each patient's risk profile before recommending hormone therapy. For most women, benefits significantly outweigh risks when started within 10 years of menopause." },
    { q: "What are the alternatives to HRT?", a: "For women who cannot or prefer not to take HRT, alternatives include non-hormonal medications (SSRIs, gabapentin), herbal supplements, cognitive behavioral therapy for hot flashes, and intensive lifestyle modifications." },
    { q: "How do I know if I'm in menopause?", a: "Classic signs include irregular periods (eventually stopping), hot flashes, night sweats, vaginal dryness, mood changes, and sleep problems. Blood tests for FSH and estradiol can confirm menopause." },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
const ServiceCard = ({ service, index, range, targetScale }: { service: any, index: number, range: any, targetScale: any }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(scrollYProgress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className="flex flex-col relative -top-[25vh] h-[550px] w-full max-w-[1200px] rounded-[3rem] p-8 md:p-12 origin-top border border-gray-200 shadow-2xl overflow-hidden bg-white"
            >
                <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                    {/* Content */}
                    <div className="flex flex-col justify-center h-full order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: service.color }}>
                                <service.icon className="w-5 h-5 text-[#C21975]" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider text-[#C21975]">{service.badgeText}</span>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-lg text-[#C21975] font-medium mb-4 italic">{service.subtitle}</p>
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base line-clamp-4 hover:line-clamp-none transition-all duration-300">
                            {service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 mt-auto">
                            {service.features.map((feature: string, i: number) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-[#C21975] shrink-0" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-full w-full rounded-[2rem] overflow-hidden order-1 lg:order-2">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                            <Image
                                fill
                                src={service.image}
                                alt={service.title}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/10 to-transparent mix-blend-multiply" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default function MenopausePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
    const container = useRef(null);

    useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

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
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl" style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 100%)' }}>
                                        Book Consultation
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45"><ArrowUpRight className="w-6 h-6" /></span>
                                    </button>
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

            {/* Services Parallax Section */}
            <section ref={container} className="relative py-24 bg-[#F9F9F9]">
                <div className="container-fluid mx-auto px-6 mb-20 text-center max-w-3xl">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Our Services</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Menopause</span>{" "}
                        <span className="text-[#C21975]">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-6">Comprehensive care designed to support you through every aspect of the menopausal transition.</p>
                </div>

                <div className="container-fluid mx-auto px-4 md:px-6">
                    {services.map((service, index) => {
                        const targetScale = 1 - ((services.length - index) * 0.05);
                        return <ServiceCard key={service.id} service={service} index={index} range={[index * 0.25, 1]} targetScale={targetScale} />;
                    })}
                </div>
            </section>

            {/* Menopause in India - Long-form Content */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Indian Context</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Menopause in India: <br /><span className="text-[#C21975]">Breaking the Silence</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Over 130 million Indian women are currently in the menopausal or postmenopausal phase, yet menopause remains one of the least discussed health topics in the country. Cultural taboos, lack of awareness, and the misconception that menopause symptoms must simply be endured lead millions of women to suffer in silence.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Indian women typically experience menopause between ages 46-52, slightly earlier than the global average of 51. The menopausal transition (perimenopause) can begin 4-8 years before the final period, bringing symptoms like hot flashes, mood swings, sleep disturbances, joint pain, and vaginal dryness. Studies from AIIMS show that over 70% of Indian perimenopausal women report significant quality-of-life impacts.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani provides comprehensive menopause management that goes beyond simply prescribing hormones. Her approach includes detailed hormonal assessment, bone density screening, cardiovascular risk evaluation, nutritional counseling, and evidence-based hormone replacement therapy (HRT) when indicated — tailored to each woman&apos;s individual risk profile and symptom severity.
                            </p>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Schedule Menopause Consultation
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image src="/images/menopause-wellness.jpg" alt="Menopause health awareness in India" fill className="object-cover" />
                            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block">
                                <p className="text-sm font-bold text-gray-900 mb-1">Holistic Approach</p>
                                <p className="text-xs text-gray-600">Personalized treatment plans addressing symptoms, bone health, and heart health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Struggling with Menopause Symptoms?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">You don&apos;t have to simply endure it. Modern management can significantly improve your quality of life during this transition.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Get Expert Help
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
                            <Image src="/images/dr-vinita-about-hero.webp" alt="Dr. Vinita Khemani - Menopause Specialist Kolkata" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Compassionate Care</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Dr. Khemani for Menopause?</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Dr. Khemani understands that menopause is not a disease — it is a natural transition that deserves expert guidance. Her comprehensive approach addresses not just symptoms, but long-term health risks including osteoporosis and cardiovascular disease.
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    "Evidence-based hormone replacement therapy (HRT)",
                                    "Bone density screening and osteoporosis prevention",
                                    "Cardiovascular risk assessment during transition",
                                    "Non-hormonal alternatives when HRT is contraindicated",
                                    "Nutritional and lifestyle modification guidance"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-[#C21975] shrink-0" />
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
                                    Menopause <br />
                                    <span className="text-[#C21975]">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Navigate this transition with clarity.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
                                >
                                    Book Consultation
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
            <SharedCTA title="Navigate Menopause Confidently" subtitle="Schedule a consultation with Dr. Vinita Khemani for personalized menopause management." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main>
    );
}
