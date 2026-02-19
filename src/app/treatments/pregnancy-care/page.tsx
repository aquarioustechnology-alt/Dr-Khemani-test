"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Baby, Heart, Shield, CheckCircle,
    ArrowUpRight, ChevronDown, Clock, Users,
    Stethoscope, Activity, Sparkles, Utensils
} from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const trimesterCare = [
    {
        title: "First Trimester",
        weeks: "Weeks 1–12",
        subtitle: "The Foundation Phase",
        desc: "The most critical period for fetal development. We focus on confirming viability, dating the pregnancy, and starting essential supplementation.",
        points: [
            "Viability Scan & Dating Ultrasound (6-8 weeks)",
            "NT Scan & Double Marker Test (11-13 weeks)",
            "Thyroid, Sugar, and Thalassemia Screening",
            "Morning Sickness & Diet Management",
            "Folic Acid Supplementation Start"
        ],
        color: "bg-pink-50 border-pink-100 text-[#C21975]"
    },
    {
        title: "Second Trimester",
        weeks: "Weeks 13–27",
        subtitle: "The Honeymoon Phase",
        desc: "As morning sickness fades, we focus on detailed anomaly checks and monitoring fetal growth.",
        points: [
            "Anomaly Scan (Level II Ultrasound) at 18-20 weeks",
            "Tetanus & Flu Vaccinations",
            "Gestational Diabetes Screening (GTT)",
            "Iron & Calcium Supplementation",
            "Fetal Movement Monitoring (Quickening)"
        ],
        color: "bg-purple-50 border-purple-100 text-purple-700"
    },
    {
        title: "Third Trimester",
        weeks: "Weeks 28–40",
        subtitle: "The Home Stretch",
        desc: "Preparing for delivery. Visits become more frequent to monitor position, fluid levels, and mother's BP.",
        points: [
            "Growth Scans & Doppler Studies",
            "Non-Stress Test (NST) for Fetal Heart Rate",
            "BP Monitoring for Preeclampsia",
            "Birth Plan & Delivery Mode Discussion",
            "Pelvic Assessment for Normal Delivery"
        ],
        color: "bg-orange-50 border-orange-100 text-orange-700"
    }
];

const dietaryTips = [
    { title: "Iron-Rich Foods", desc: "Spinach, Dates, Jaggery, Lentils – Prevention of Anemia is priority #1.", icon: Utensils },
    { title: "Protein Power", desc: "Paneer, Eggs, Soya, Chicken – Essential for baby's tissue growth.", icon: Activity },
    { title: "Hydration", desc: "3-4 Liters of water daily to maintain amniotic fluid levels.", icon: Sparkles },
    { title: "Avoid", desc: "Raw papaya, pineapple, excess caffeine, and unpasteurized dairy.", icon: Shield },
];

const faqs = [
    {
        q: "Who is the best doctor for pregnancy care in Kolkata?",
        a: "Dr. Vinita Khemani is highly regarded in Kolkata for her comprehensive pregnancy care, high normal delivery rates, and management of high-risk pregnancies at top hospitals like Bhagirathi Neotia and AMRI."
    },
    {
        q: "When should I book my first appointment?",
        a: "Ideally, as soon as you miss your period or get a positive home pregnancy test. An early scan at 6-7 weeks at Dr. Khemani's Kolkata clinic is crucial to confirm the pregnancy location and heartbeat."
    },
    {
        q: "What are the chances of a normal delivery?",
        a: "Dr. Vinita Khemani is a strong proponent of vaginal delivery. Unless there is a specific medical indication for a C-section (like placenta previa or fetal distress), we always trial for a normal delivery. Our normal delivery rates are significantly higher than the Kolkata city average."
    },
    {
        q: "Is it safe to exercise during pregnancy?",
        a: "Yes! Unless you have a high-risk condition (like low-lying placenta), antenatal yoga and walking are highly recommended. Dr. Khemani often advises prenatal yoga classes available in Kolkata to build stamina for labor."
    },
    {
        q: "Do you handle high-risk pregnancies?",
        a: "Yes, Dr. Khemani specializes in high-risk cases including pregnancy with diabetes, hypertension, and thyroid issues. We have advanced monitoring protocols at our Kolkata clinics for such cases."
    },
    {
        q: "Normal delivery vs C-section?",
        a: "We prioritize normal delivery for a faster recovery. However, C-section is recommended for medical necessity (like fetal distress). Dr. Khemani discusses all options with you to ensure the safest birth."
    },
    {
        q: "What is the delivery package cost in Kolkata?",
        a: "Delivery packages vary by hospital and room choice. Dr. Khemani offers transparent guidance on costs at her affiliated hospitals (like Bhagirathi Neotia and AMRI) to help you plan your maternity finances."
    },
    {
        q: "What hospitals are you affiliated with?",
        a: "Dr. Khemani delivers at top maternity hospitals in Kolkata including AMRI, Bhagirathi Neotia, and others, ensuring you have access to the best NICU and emergency facilities."
    },
];

export default function PregnancyCarePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero Section */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[80vh] flex items-center bg-[#fff5f9]">
                        {/* Abstract Shapes */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <Baby className="w-4 h-4 text-[#C21975]" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Obstetrics & Maternity Care</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Comprehensive</span> <br />
                                        <span className="italic text-[#C21975]">
                                            Pregnancy Care &amp; Delivery in Kolkata.
                                        </span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Experience safe, supported, and joyful maternity care in South Kolkata with Dr. Vinita Khemani, regarded as the best gynecologist for pregnancy in Kolkata. From the first heartbeat to the first cry, we walk with you every step.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                        <button
                                            onClick={() => setIsEnquiryModalOpen(true)}
                                            className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl hover:shadow-pink-500/20 bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                        >
                                            Book Prenatal Visit
                                            <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                                <ArrowUpRight className="w-6 h-6" />
                                            </span>
                                        </button>
                                        <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white border border-pink-100 shadow-sm">
                                            <div className="flex -space-x-3">
                                                {[
                                                    "/images/WhatsApp Image 2026-01-14 at 12.55.29 PM (1).jpeg",
                                                    "/images/doctor_clinic_portrait_1770790565861.png",
                                                    "/images/pcos_doctor_consult_1771254346129.png"
                                                ].map((src, i) => (
                                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden">
                                                        <Image src={src} alt="Happy Patient" fill className="object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="text-sm">
                                                <p className="font-bold text-gray-900">2,300+</p>
                                                <p className="text-gray-500 text-xs">Deliveries</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="relative h-[500px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl"
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_70%)] z-10" />
                                    <Image
                                        src="/images/mother_newborn_1770790584420.png"
                                        alt="Mother holding newborn baby"
                                        fill
                                        className="object-contain relative z-20 drop-shadow-2xl"
                                        priority
                                    />

                                    {/* Floating Stats */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        className="absolute top-20 right-0 bg-white p-4 rounded-2xl shadow-xl z-30 border border-gray-50"
                                    >
                                        <Heart className="w-8 h-8 text-red-500 mb-2 fill-current" />
                                        <p className="font-bold text-gray-900 leading-tight">Normal Delivery<br />Focus</p>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                        className="absolute bottom-20 left-0 bg-white p-4 rounded-2xl shadow-xl z-30 border border-gray-50"
                                    >
                                        <Shield className="w-8 h-8 text-blue-500 mb-2" />
                                        <p className="font-bold text-gray-900 leading-tight">High-Risk<br />Expertise</p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                        More Than Just <span className="text-[#C21975]">Checkups</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                        Pregnancy is a transformation. We don&apos;t just monitor the baby; we care for the mother. From nutritional planning to labor preparation classes, our goal is a healthy mother and a healthy baby. Dr. Khemani is renowned for her patience, accessibility, and calm demeanor during delivery.
                    </p>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Clock, label: "24/7 Emergency Support" },
                            { icon: Stethoscope, label: "Advanced Fetal Monitoring" },
                            { icon: Users, label: "Partner Involvement" },
                            { icon: Activity, label: "Postnatal Recovery Plan" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center text-[#C21975]">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <span className="font-semibold text-gray-800">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trimester Timeline - Refactored */}
            <section className="py-24 bg-[#fafafa]">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#C21975] font-semibold tracking-wider uppercase text-sm">Your Roadmap</span>
                        <h2 className="font-display text-4xl font-bold text-gray-900 mt-2">Trimester by Trimester Care</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We follow international protocols ensuring no detail is missed at any stage.</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C21975] via-pink-200 to-transparent md:-translate-x-1/2" />

                        <div className="space-y-16">
                            {trimesterCare.map((tri, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${i % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"}`}
                                >
                                    {/* Content Side */}
                                    <div className="flex-1 pl-20 md:pl-0 md:pt-4">
                                        <div className={`inline-flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <span className="text-[#C21975] font-bold text-xl">{tri.weeks}</span>
                                            <div className="h-px w-10 bg-[#C21975]/30"></div>
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{tri.title}</h3>
                                        <h4 className="text-lg text-gray-500 font-medium italic mb-4">{tri.subtitle}</h4>
                                        <p className="text-gray-600 mb-6 leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-gray-100">{tri.desc}</p>
                                        <ul className={`space-y-2 inline-flex flex-col ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                            {tri.points.map((pt, j) => (
                                                <li key={j} className={`flex items-center gap-3 text-gray-700 text-sm ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                                    <CheckCircle className="w-4 h-4 text-[#C21975] shrink-0" />
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Center Point */}
                                    <div className="absolute left-8 md:left-1/2 top-0 md:top-6 w-4 h-4 bg-white border-4 border-[#C21975] rounded-full -translate-x-1/2 z-10 shadow-[0_0_0_8px_rgba(194,25,117,0.1)]" />

                                    {/* Empty Side for layout balance */}
                                    <div className="flex-1 hidden md:block relative h-[350px] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                                        <Image
                                            src={[
                                                "/images/unnamed (2).webp",
                                                "/images/pregnancy-care-india.jpg",
                                                "/images/high_risk_monitoring_1771475096742.png"
                                            ][i]}
                                            alt={tri.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Diet Section */}
            <section className="py-24 bg-[#730940] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10" />
                <div className="container-fluid mx-auto max-w-[1400px] px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Nourishing <br />Two Lives</h2>
                            <p className="text-pink-100 text-lg mb-8 leading-relaxed">
                                In India, pregnancy diet is often surrounded by myths. Dr. Khemani provides scientific, culturally appropriate diet charts that ensure you gain weight healthily without compromising on nutrition.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all">
                                Get a Diet Chart <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {dietaryTips.map((tip, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                                    <tip.icon className="w-8 h-8 text-pink-300 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">{tip.title}</h4>
                                    <p className="text-sm text-pink-100">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Postnatal Care */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/pcos_consultation_img_1771254403690.png"
                                alt="Postnatal consultation"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                                The Fourth Trimester
                            </span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                                Postnatal Support
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                The journey doesn&apos;t end at delivery. The first 40 days (postpartum period) are crucial for recovery. We support you with:
                            </p>

                            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    "Lactation Counseling",
                                    "Stitch Care & Healing",
                                    "Postpartum Depression Screening",
                                    "Contraception Advice",
                                    "Newborn Vaccination Schedule",
                                    "Pelvic Floor Rehab"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#C21975] shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Maternal Health in India - Long-form Content */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Maternal Health Reality</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Pregnancy Care in India: <br /><span className="text-[#C21975]">Why Quality Matters</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                India has made remarkable strides in reducing maternal mortality — from 556 per 100,000 live births in 1990 to approximately 97 per 100,000 in recent years. Yet, significant gaps remain, particularly in the quality of antenatal care. According to NFHS-5, while 83% of Indian women receive at least one antenatal checkup, only 58% receive the WHO-recommended 4+ visits, and comprehensive monitoring for blood pressure, blood sugar, and fetal growth remains inconsistent.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                In urban Kolkata, the challenges are different but equally important. The rising trends of late marriages, career-first family planning, and increasing rates of gestational diabetes and hypertension mean that today&apos;s pregnancies require more sophisticated monitoring than ever before. Modern pregnancy care must address not just the physical aspects but also nutritional guidance, mental health support, and birth plan counseling.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani provides comprehensive, evidence-based pregnancy care that covers every aspect of the maternal journey — from preconception counseling and first-trimester screening through regular growth monitoring, anomaly scans, gestational diabetes screening, and finally, personalized delivery planning. Her approach prioritizes normal delivery whenever safely possible, while keeping emergency surgical capabilities readily available.
                            </p>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Start Your Pregnancy Journey
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative sticky top-32">
                            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image src="/images/unnamed.webp" alt="Pregnancy care and antenatal monitoring" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block z-20">
                                <p className="text-sm font-bold text-gray-900 mb-1">Comprehensive Care</p>
                                <p className="text-xs text-gray-600">From preconception to postpartum — complete pregnancy management under one trusted gynecologist.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Expecting or Planning to Conceive?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Begin your pregnancy journey with expert guidance. From preconception planning to safe delivery — Dr. Khemani is with you every step.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Book Antenatal Consultation
                        <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </button>
                </div>
            </section>

            {/* Dr. Khemani&apos;s Approach */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-stretch bg-[#fff0f5] rounded-[2.5rem] p-8 md:p-12">
                        <div className="relative min-h-[500px] h-full rounded-[2rem] overflow-hidden shadow-xl">
                            <Image src="/images/doctor_portrait_scrubs_1771254318496.png" alt="Dr. Vinita Khemani - Pregnancy Care Specialist" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Trusted Obstetric Care</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Dr. Khemani for Pregnancy Care?</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                With 23+ years of experience and thousands of successful deliveries, Dr. Khemani provides the kind of comprehensive, personalized pregnancy care that every expecting mother deserves. Her approach prioritizes normal delivery while maintaining full emergency preparedness.
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    "Comprehensive antenatal care with scheduled monitoring",
                                    "High normal delivery rates with minimal intervention",
                                    "GDM screening and specialized diet counseling",
                                    "Hospital affiliations with NICU and 24/7 emergency OT",
                                    "Postnatal care including lactation support"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 text-[#C21975] shrink-0" />
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
                                    Expert answers to help you feel prepared and confident.
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
            <SharedCTA title="Start Your Pregnancy Journey in Kolkata" subtitle="Book your first prenatal consultation with Dr. Vinita Khemani today." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main >
    );
}
