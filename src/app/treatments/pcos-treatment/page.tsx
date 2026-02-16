"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    HeartPulse, CheckCircle, ArrowUpRight, ChevronDown,
    Activity, Scale, Pill, AlertOctagon, Brain, Baby,
    Utensils, X, Check
} from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const symptoms = [
    "Irregular or absent periods (Oligomenorrhea)",
    "Heavy or prolonged menstrual bleeding",
    "Excessive facial/body hair (Hirsutism)",
    "Severe acne, often cystic or unresponsive",
    "Unexplained weight gain / Difficulty losing weight",
    "Male-pattern baldness or thinning scalp hair",
    "Darkening of skin folds (Acanthosis Nigricans)",
    "Difficulty getting pregnant (Infertility)",
    "Pelvic pain during periods",
    "Constant fatigue and sleep issues",
];

const causes = [
    {
        title: "Insulin Resistance",
        desc: "Up to 70% of women with PCOS exhibit insulin resistance, where cells don't respond effectively to insulin. The body compensates by producing excess insulin, which directly stimulates the ovaries to release too many male hormones. This hormonal surge disrupts ovulation and causes common symptoms like resistant weight gain and dark patches on the skin.",
        icon: Activity
    },
    {
        title: "Hormonal Imbalance",
        desc: "PCOS creates a disconnect in brain-ovary signaling. Elevated levels of Luteinizing Hormone (LH) prevent eggs from fully maturing and releasing. Instead of ovulating, the follicles remain as small fluid-filled sacs or 'cysts'. Simultaneously, high androgen levels trigger physical symptoms like acne, unwanted facial hair growth, and scalp thinning.",
        icon: Scale
    },
    {
        title: "Low-Grade Inflammation",
        desc: "Chronic, low-grade inflammation is a hidden driver of PCOS in many women. This immune system overactivity stimulates polycystic ovaries to produce androgens, independent of body weight. Over time, this inflammatory state worsens hormonal imbalances and significantly increases the risk of developing heart disease and type 2 diabetes later in life.",
        icon: HeartPulse
    },
    {
        title: "Genetic Factors",
        desc: "While the exact cause is unknown, genetics play a major role. If your mother or sister has PCOS, your likelihood of developing it is much higher. However, genes are not destiny—environmental triggers like stress, diet, and poor lifestyle choices can 'activate' these genetic predispositions, leading to the onset of symptoms.",
        icon: Brain
    }
];

const diets = [
    {
        title: "Foods to Embrace",
        list: ["High-fiber vegetables (Spinach, Broccoli)", "Lean proteins (Dal, Paneer, Fish, Eggs)", "Anti-inflammatory spices (Turmeric, Ginger)", "Low GI fruits (Berries, Guava, Apple)", "Healthy fats (Walnuts, Flaxseeds, Ghee)"],
        type: "good"
    },
    {
        title: "Foods to Limit",
        list: ["Refined carbs (Maida, White Rice, Bread)", "Sugary drinks and sodas", "Processed and packaged snacks", "Excessive dairy (if sensitive)", "Fried & oily street foods"],
        type: "bad"
    }
];

const myths = [
    { m: "You can't get pregnant with PCOS.", f: "Most women with PCOS can get pregnant naturally or with simple fertility treatments like ovulation induction." },
    { m: "PCOS only affects overweight women.", f: "Lean PCOS exists. Thin women can also have high androgens and irregular periods." },
    { m: "Birth control pills are the only treatment.", f: "Pills manage symptoms but don't cure PCOS. Lifestyle helps reversible management." },
    { m: "You must have ovarian cysts to have PCOS.", f: "The name is misleading. You can be diagnosed based on irregular periods and hormone levels alone." }
];

const faqs = [
    { q: "Can PCOS be cured permanently?", a: "PCOS is a chronic, lifelong condition, meaning it cannot be 'cured' in the traditional sense. However, symptoms can be effectively managed and even reversed with the right combination of lifestyle changes, diet, and medical treatment, allowing women to live varied, healthy lives." },
    { q: "Will I be able to get pregnant with PCOS?", a: "Yes, absolutely. PCOS is one of the most treatable causes of infertility. While irregular ovulation makes natural conception harder, treatments like ovulation induction (medicine to stimulate egg release), lifestyle changes, and IUI have very high success rates." },
    { q: "Do I need to take birth control pills?", a: "Not necessarily. While oral contraceptives are a common treatment to regulate periods and reduce acne/hair growth, they are not the only option. Dr. Khemani prescribes treatment based on your primary goal—whether it's regularising cycles, managing symptoms, or planning pregnancy." },
    { q: "How is PCOS diagnosed?", a: "Diagnosis follows the Rotterdam Criteria, requiring at least 2 of 3 signs: 1) Irregular periods, 2) Signs of high androgens (acne, excess hair) or blood tests showing it, 3) Polycystic ovaries seen on ultrasound. Dr. Khemani also checks insulin and thyroid levels." },
    { q: "Does PCOS cause diabetes?", a: "More than half of women with PCOS develop Type 2 diabetes by age 40. This is due to insulin resistance. Regular screening and maintaining a healthy weight significantly reduce this risk." },
];

export default function PCOSTreatmentPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero Section */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[75vh] flex items-center bg-[#fff0f5]">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#fadce9] to-transparent rounded-full blur-3xl opacity-60 mix-blend-multiply" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Polycystic Ovary Syndrome</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Holistic Control Over</span> <br />
                                        <span className="italic text-[#C21975]">
                                            PCOS & Hormonal Health.
                                        </span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        It&apos;s not just about irregular periods. Dr. Vinita Khemani offers a comprehensive, evidence-based approach to manage PCOS—tackling insulin resistance, fertility, body weight, and emotional well-being together.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <button
                                            onClick={() => setIsEnquiryModalOpen(true)}
                                            className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                        >
                                            Book Consultation
                                            <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                                <ArrowUpRight className="w-6 h-6" />
                                            </span>
                                        </button>
                                        <Link href="#symptoms" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#C21975]/30 text-[#C21975] font-semibold hover:bg-[#fff0f5] transition-colors">
                                            Check Symptoms
                                        </Link>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[450px] md:h-[550px] order-first">
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/PCOS-bg.png" alt="PCOS Awareness and Treatment" fill className="object-cover" priority />
                                    </div>
                                    {/* Float Card */}
                                    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg max-w-[240px] hidden md:block border border-pink-100">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-pink-100 rounded-lg text-[#C21975]"><Activity className="w-5 h-5" /></div>
                                            <p className="font-bold text-gray-900 text-sm">Hormonal Balance</p>
                                        </div>
                                        <p className="text-xs text-gray-600">Personalized plans to restore ovulation and reduce androgen levels.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PCOS in India: The Growing Concern */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">India&apos;s Silent Epidemic</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">PCOS in India: <br /><span className="text-[#C21975]">A Growing Concern</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Polycystic Ovary Syndrome affects an estimated 1 in 5 Indian women of reproductive age, making it one of the most prevalent endocrine disorders in the country. According to studies published in the Indian Journal of Endocrinology and Metabolism, the prevalence of PCOS in India ranges from 3.7% to 22.5%, with urban areas showing significantly higher rates due to sedentary lifestyles and dietary changes.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                What makes PCOS particularly challenging for Indian women is the intersection of genetic predisposition, high-carbohydrate diets (rice, roti, and sweets being dietary staples), increasing stress levels in urban environments, and cultural stigma around discussing reproductive health openly. Dr. Vinita Khemani has been at the forefront of PCOS awareness and treatment in Kolkata for over 23 years, helping thousands of women understand, manage, and overcome PCOS.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                {[
                                    { num: "20%", label: "Indian women affected" },
                                    { num: "70%", label: "Cases go undiagnosed" },
                                    { num: "50%", label: "Develop diabetes by 40" },
                                    { num: "10K+", label: "Patients treated" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-pink-50">
                                        <p className="text-2xl md:text-3xl font-bold text-[#C21975]">{stat.num}</p>
                                        <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Get Expert PCOS Assessment
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative">
                            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image src="/images/pcos-awareness-indian.jpg" alt="PCOS awareness among Indian women - Dr. Vinita Khemani Kolkata" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block">
                                <p className="text-sm font-bold text-gray-900 mb-1">Did You Know?</p>
                                <p className="text-xs text-gray-600">Indian women are genetically more prone to insulin resistance, a key driver of PCOS. Early detection can prevent lifelong complications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Understanding Causes Section - Refactored */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="max-w-xl">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Root Causes</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Understanding <span className="text-[#C21975]">Why It Happens</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                PCOS is complex and presents differently in every woman. It often stems from a combination of genetic and environmental factors that disrupt hormonal harmony.
                            </p>
                            <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image src="/images/2023-04-23 (1).webp" alt="Doctor explaining causes" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                            {causes.map((cause, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative pl-6 border-l-2 border-[#C21975]/20 hover:border-[#C21975] transition-colors"
                                >
                                    <cause.icon className="w-8 h-8 text-[#C21975] mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{cause.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{cause.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Myths vs Facts */}
            <section className="py-24 bg-[#fff9fc]">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">PCOS <span className="text-[#C21975]">Myths vs Facts</span></h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {myths.map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 flex flex-col md:flex-row gap-6 items-center md:items-start">
                                <div className="flex-1 text-center md:text-right border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-6 w-full md:w-auto">
                                    <div className="flex items-center justify-center md:justify-end gap-2 text-red-500 font-bold mb-2">
                                        <X className="w-5 h-5" /> Myth
                                    </div>
                                    <p className="text-gray-600 italic">&quot;{item.m}&quot;</p>
                                </div>
                                <div className="flex-1 text-center md:text-left pt-4 md:pt-0 pl-0 md:pl-2 w-full md:w-auto">
                                    <div className="flex items-center justify-center md:justify-start gap-2 text-green-600 font-bold mb-2">
                                        <Check className="w-5 h-5" /> Fact
                                    </div>
                                    <p className="text-gray-900 font-medium">{item.f}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Worried About PCOS Symptoms?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Don&apos;t wait for symptoms to worsen. Early intervention can prevent long-term complications like diabetes, heart disease, and infertility. Get a comprehensive evaluation today.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Schedule Your PCOS Checkup
                        <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </button>
                </div>
            </section>

            {/* Symptoms Grid */}
            <section id="symptoms" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/noise.png')] opacity-20 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1400px] px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Symptoms Checklist</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Could You Have <span className="text-[#C21975]">PCOS?</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Symptoms vary widely. You don&apos;t need to have cysts on your ovaries to have PCOS. If you experience two or more of these signs, a clinical evaluation is recommended.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {symptoms.map((s, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-pink-50 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-[#C21975] shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium text-gray-700">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative lg:order-first">
                            <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
                                <Image src="/images/2023-04-06.webp" alt="PCOS Awareness" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#540d2d]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-bold">1/5</div>
                                        <div>
                                            <p className="text-lg font-bold">Indian Women</p>
                                            <p className="text-sm text-pink-100">suffer from PCOS symptoms</p>
                                        </div>
                                    </div>
                                    <p className="text-sm opacity-80 leading-relaxed">
                                        Early diagnosis prevents long-term complications like Diabetes and Endometrial Cancer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagnosis Section - Structured like Reference */}
            <section className="py-24 bg-[#fff0f5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Clinical Evaluation</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Accurate <span className="text-[#C21975]">PCOS Diagnosis</span></h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Diagnosis is confirmed if you meet <strong>2 out of 3</strong> Rotterdam Criteria. We ensure a thorough check to rule out other hormonal issues.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100">
                                    <div className="w-10 h-10 rounded-full bg-[#fdeef6] text-[#C21975] flex items-center justify-center font-bold mb-3">A</div>
                                    <h4 className="font-bold text-gray-900 mb-1">Irregular Periods</h4>
                                    <p className="text-xs text-gray-500">Ovulatory dysfunction leading to missed or heavy cycles.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100">
                                    <div className="w-10 h-10 rounded-full bg-[#fdeef6] text-[#C21975] flex items-center justify-center font-bold mb-3">B</div>
                                    <h4 className="font-bold text-gray-900 mb-1">High Androgens</h4>
                                    <p className="text-xs text-gray-500">Physical signs (acne, hair growth) or elevated blood levels.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100 sm:col-span-2">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#fdeef6] text-[#C21975] flex items-center justify-center font-bold shrink-0">C</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Polycystic Ovaries</h4>
                                            <p className="text-xs text-gray-500">Multiple immature follicles visible on ultrasonography.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => setIsEnquiryModalOpen(true)} className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-3 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]">
                                    Book Consultation
                                    <span className="w-8 h-8 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45"><ArrowUpRight className="w-4 h-4" /></span>
                                </button>
                                <div className="px-6 py-3 rounded-full border border-pink-200 bg-white/50 text-sm text-gray-600 flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-[#C21975]" />
                                    Includes Thyroid & Prolactin screening
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image src="/images/WhatsApp Image 2026-01-14 at 12.55.29 PM.jpeg" alt="PCOS Diagnosis Consultation Dr. Khemani" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Long Term Risks Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Image */}
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image src="/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg" alt="Consultation regarding long-term risks" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-lg font-bold">Holistic Health</p>
                                <p className="text-sm opacity-90">Preventing long-term risks through specialized care.</p>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-200 text-red-600 bg-red-50">Health Alert</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Long-Term <span className="text-red-500">Risks</span></h2>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                                Untreated PCOS is more than just irregular periods. The chronic hormonal imbalance and inflammation can lead to serious lifelong health complications if not managed early.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Type 2 Diabetes", desc: "50% risk by age 40 due to insulin resistance.", icon: Activity },
                                    { title: "Heart Disease", desc: "Elevated BP and cholesterol increase cardiovascular risk.", icon: HeartPulse },
                                    { title: "Endometrial Cancer", desc: "Irregular shedding of lining increases cancer risk.", icon: AlertOctagon },
                                    { title: "Depression & Anxiety", desc: "Hormonal fluctuations often trigger mood disorders.", icon: Brain },
                                ].map((risk, i) => (
                                    <div key={i} className="bg-[#fff9f9] p-6 rounded-2xl border border-red-100 hover:border-red-200 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-red-500 mb-4">
                                            <risk.icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">{risk.title}</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">{risk.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indian Diet Plan Section - Rebranded */}
            <section className="py-24 bg-[#2D0C1E] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C21975]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="container-fluid mx-auto max-w-[1400px] px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border border-pink-400/30 text-pink-300 bg-pink-900/20">Indian Diet Context</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Eat Right for <br /><span className="text-[#C21975]">PCOS Reversal</span></h2>
                            <p className="text-pink-100/80 text-lg mb-10 leading-relaxed">
                                Most Indian diets are carb-heavy (Rice, Roti), which spikes insulin levels. Dr. Khemani recommends a modified Indian diet focusing on portion control and macro-balance.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="w-12 h-12 rounded-full bg-[#C21975] flex items-center justify-center text-white mb-2"><Utensils className="w-6 h-6" /></div>
                                    <p className="font-bold">Home-Cooked</p>
                                    <p className="text-xs text-pink-200">Focus on &apos;Ghar ka khana&apos; with less oil.</p>
                                </div>
                                <div className="h-full w-px bg-white/10 mx-2"></div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-12 h-12 rounded-full bg-[#C21975] flex items-center justify-center text-white mb-2"><Scale className="w-6 h-6" /></div>
                                    <p className="font-bold">Portion Control</p>
                                    <p className="text-xs text-pink-200">1/2 Plate Veggies, 1/4 Protein, 1/4 Carbs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-white/10">
                            <div className="space-y-8">
                                {diets.map((d, i) => (
                                    <div key={i}>
                                        <h4 className={`text-xl font-bold mb-4 flex items-center gap-3 ${d.type === 'good' ? 'text-pink-400' : 'text-red-400'}`}>
                                            {d.type === 'good' ? <CheckCircle className="w-5 h-5" /> : <AlertOctagon className="w-5 h-5" />}
                                            {d.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {d.list.map((item, j) => (
                                                <span key={j} className={`px-3 py-1.5 rounded-full text-xs font-medium ${d.type === 'good' ? 'bg-[#C21975]/20 text-pink-200 border border-[#C21975]/30' : 'bg-red-900/30 text-red-200 border border-red-900/50'}`}>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10 text-center">
                                <p className="text-sm font-medium text-pink-200">&quot;Food is the first medicine for PCOS.&quot;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Pillars - Refactored */}
            <section className="py-24 bg-[#F9F9F9]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[600px] rounded-[3rem] overflow-hidden hidden lg:block shadow-2xl">
                            <Image src="/images/WhatsApp Image 2026-01-14 at 12.55.30 PM.jpeg" alt="PCOS Treatment Personalized Plan" fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <h3 className="text-3xl font-bold mb-2">Holistic Care</h3>
                                <p className="opacity-90">We treat the root cause, not just the symptoms.</p>
                            </div>
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Clinical Approach</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-12">
                                Personalized <br />
                                <span className="text-[#C21975]">Treatment Plan</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#C21975] shadow-sm border border-gray-100 shrink-0 group-hover:scale-110 group-hover:bg-[#C21975] group-hover:text-white transition-all duration-300">
                                        <Pill className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Hormonal Regulation</h3>
                                        <p className="text-gray-600 leading-relaxed">Use of Oral Contraceptive Pills (OCPs) or cyclic progesterone to regularize periods and protect the uterus.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#C21975] shadow-sm border border-gray-100 shrink-0 group-hover:scale-110 group-hover:bg-[#C21975] group-hover:text-white transition-all duration-300">
                                        <Baby className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Fertility Focus</h3>
                                        <p className="text-gray-600 leading-relaxed">Ovulation induction agents (Letrozole/Clomiphene) and follicular monitoring for those planning pregnancy.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#C21975] shadow-sm border border-gray-100 shrink-0 group-hover:scale-110 group-hover:bg-[#C21975] group-hover:text-white transition-all duration-300">
                                        <Activity className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Insulin Sensitizers</h3>
                                        <p className="text-gray-600 leading-relaxed">Metformin is prescribed where insulin resistance is a key factor, aiding weight loss and ovulation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#C21975] shadow-sm border border-gray-100 shrink-0 group-hover:scale-110 group-hover:bg-[#C21975] group-hover:text-white transition-all duration-300">
                                        <Utensils className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Anti-Androgens & Lifestyle</h3>
                                        <p className="text-gray-600 leading-relaxed">Medications to block male hormones combined with sleep hygiene and stress management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exercise & Lifestyle for PCOS */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl order-last lg:order-first sticky top-32">
                            <Image src="/images/pcos-exercise-yoga.jpg" alt="Indian woman doing yoga exercise for PCOS management" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#540d2d]/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-lg font-bold">30 Minutes Daily</p>
                                <p className="text-sm opacity-90">Even moderate exercise can reduce insulin resistance by up to 30%</p>
                            </div>
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Lifestyle Medicine</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Exercise &amp; Lifestyle <br /><span className="text-[#C21975]">for PCOS Reversal</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Research consistently shows that lifestyle modification is the single most effective first-line treatment for PCOS. A structured exercise program of just 150 minutes per week can significantly improve insulin sensitivity, reduce androgen levels, restore ovulation, and improve mood — often more effectively than medication alone.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani recommends a combination of exercises tailored to each patient&apos;s fitness level and PCOS type. For Indian women, incorporating traditional practices like Yoga and Pranayama has shown remarkable results in managing stress-related hormonal imbalances.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    { title: "Brisk Walking / Jogging", desc: "30 minutes daily improves insulin sensitivity by up to 25%. Best done in the morning for hormonal balance." },
                                    { title: "Yoga & Pranayama", desc: "Surya Namaskar, Bhujangasana, and Kapalbhati reduce cortisol levels and improve ovarian function." },
                                    { title: "Strength Training", desc: "2-3 sessions per week builds lean muscle mass, which naturally improves metabolism and reduces insulin resistance." },
                                    { title: "Stress Management", desc: "Meditation, adequate sleep (7-8 hours), and reducing screen time before bed are critical for hormonal health." }
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
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Get Personalized Lifestyle Plan
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* PCOS and Mental Health */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Beyond Physical Symptoms</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">PCOS &amp; Your <br /><span className="text-[#C21975]">Mental Wellbeing</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                PCOS is not just a reproductive disorder — it profoundly impacts mental health. Studies show that women with PCOS are 3 times more likely to experience depression and anxiety compared to those without the condition. The hormonal chaos caused by elevated androgens and insulin directly affects brain chemistry, while visible symptoms like acne, hair growth, and weight gain can severely impact self-esteem and body image.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                In the Indian context, where societal pressure around marriage, appearance, and fertility is immense, the emotional burden of PCOS can feel overwhelming. Many women in Kolkata and across India suffer in silence because they feel ashamed or believe their symptoms are &quot;normal.&quot; Dr. Vinita Khemani takes a compassionate, holistic approach — addressing both the physical and emotional dimensions of PCOS.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 mb-8">
                                <h4 className="font-bold text-gray-900 mb-4">Emotional Support at Our Clinic</h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {["Confidential counseling sessions", "Body-positive treatment approach", "Support group referrals", "Stress management protocols", "Sleep hygiene guidance", "Family education & awareness"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-[#C21975] shrink-0" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white sticky top-32">
                            <Image src="/images/family-planning-counseling.jpg" alt="Mental health counseling and support for PCOS" fill className="object-cover object-top" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Dr. Khemani for PCOS */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Trusted Expertise</span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why Women in Kolkata <span className="text-[#C21975]">Trust Dr. Khemani</span></h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">With over 23 years of clinical experience specializing in PCOS, Dr. Vinita Khemani combines evidence-based medicine with a deeply empathetic approach to patient care.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { num: "23+", title: "Years Experience", desc: "Two decades of specialization in hormonal disorders and reproductive health in Kolkata." },
                            { num: "10,000+", title: "Happy Patients", desc: "Trusted by thousands of women across Bengal for compassionate, result-oriented treatment." },
                            { num: "608+", title: "Successful Surgeries", desc: "Including laparoscopic ovarian drilling for PCOS cases resistant to medical management." }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="text-center p-8 rounded-[2rem] bg-[#fff9fc] border border-pink-100 hover:shadow-lg transition-shadow">
                                <p className="text-4xl md:text-5xl font-bold text-[#C21975] mb-3">{item.num}</p>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-stretch bg-[#fff0f5] rounded-[2.5rem] p-8 md:p-12">
                        <div className="relative min-h-[500px] h-full rounded-[2rem] overflow-hidden shadow-xl">
                            <Image src="/images/pcos_doctor_consult_1771254617510.png" alt="Dr. Vinita Khemani consulting patient about PCOS treatment in Kolkata" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dr. Vinita Khemani&apos;s PCOS Philosophy</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                &quot;PCOS is not a disease to be feared — it is a condition to be understood and managed. Every woman&apos;s body tells a different story, and real healing begins when we listen to that story. At our clinic, we don&apos;t just prescribe medication; we build a comprehensive wellness plan that addresses diet, exercise, emotional health, and hormonal balance together.&quot;
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Dr. Khemani is affiliated with leading hospitals in Kolkata including Bhagirathi Neotia, Charnock Hospital, and ILS Hospital, ensuring that patients have access to the latest diagnostic tools and treatment modalities.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#C21975] shrink-0" />
                                    <span className="text-gray-700 font-medium">Evidence-Based Treatment Protocols</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#C21975] shrink-0" />
                                    <span className="text-gray-700 font-medium">Holistic Lifestyle Integration</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#C21975] shrink-0" />
                                    <span className="text-gray-700 font-medium">Compassionate & Confidential Care</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e] w-fit"
                            >
                                Consult Dr. Khemani Today
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
                                    Expert answers to help you navigate your PCOS journey with confidence.
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
            <SharedCTA title="Take Control of Your PCOS" subtitle="Get a comprehensive evaluation and personalized treatment plan from Dr. Vinita Khemani." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main>
    );
}
