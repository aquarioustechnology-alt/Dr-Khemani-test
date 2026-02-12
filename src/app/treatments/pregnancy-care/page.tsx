"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Baby, Heart, Shield, CheckCircle, Calendar,
    ArrowUpRight, ChevronDown, Clock, Users
} from "lucide-react";

const trimesterCare = [
    {
        trimester: "First Trimester",
        weeks: "Weeks 1–12",
        icon: "🌱",
        color: "#f5e6ef",
        items: [
            "Pregnancy confirmation & dating ultrasound",
            "Blood group, Rh factor & complete blood panel",
            "Thyroid function tests (TSH, T3, T4)",
            "First trimester screening (NT scan + dual marker)",
            "Folic acid & prenatal vitamin prescription",
            "Diet & lifestyle counseling",
        ],
    },
    {
        trimester: "Second Trimester",
        weeks: "Weeks 13–27",
        icon: "🌿",
        color: "#e8d5e0",
        items: [
            "Anomaly scan (Level II ultrasound at 18-20 weeks)",
            "Gestational diabetes screening (GTT)",
            "Iron & calcium supplementation review",
            "Fetal growth monitoring",
            "Birth preparation classes enrollment",
            "Cervical length assessment if needed",
        ],
    },
    {
        trimester: "Third Trimester",
        weeks: "Weeks 28–40",
        icon: "🌸",
        color: "#d4a5c4",
        items: [
            "Bi-weekly to weekly monitoring",
            "Growth scan & amniotic fluid assessment",
            "Non-stress test (NST) for fetal wellbeing",
            "Delivery planning & birth preference discussion",
            "Group B Streptococcus screening",
            "Hospital bag preparation guidance",
        ],
    },
];

const deliveryOptions = [
    {
        title: "Normal Delivery",
        desc: "Dr. Khemani advocates a 'normal delivery first' approach. With 2,348+ successful deliveries, she ensures every mother gets the best chance at natural childbirth with full medical backup.",
        icon: Baby,
        highlight: true,
    },
    {
        title: "Painless Labor (Epidural)",
        desc: "Epidural analgesia for a comfortable birthing experience. Dr. Khemani coordinates with expert anesthesiologists to ensure safe and effective pain management during labor.",
        icon: Heart,
        highlight: false,
    },
    {
        title: "Cesarean Section (When Needed)",
        desc: "When medically necessary, Dr. Khemani performs cesarean deliveries with precision. She discusses all options transparently, ensuring informed decision-making by the family.",
        icon: Shield,
        highlight: false,
    },
];

const faqs = [
    {
        q: "When should I visit a gynecologist after finding out I'm pregnant?",
        a: "You should schedule your first prenatal visit within 6-8 weeks of your last menstrual period. Dr. Vinita Khemani recommends early booking to establish baseline health parameters and begin appropriate prenatal care."
    },
    {
        q: "What is the cost of normal delivery in Kolkata?",
        a: "Normal delivery costs in Kolkata vary depending on the hospital and room type. At Dr. Khemani's affiliated hospitals, costs are transparent and discussed during prenatal consultations. Insurance is accepted at most locations."
    },
    {
        q: "Does Dr. Vinita Khemani offer painless delivery?",
        a: "Yes. Dr. Khemani offers painless labor through epidural analgesia at her affiliated hospitals. The procedure is safe, well-managed by experienced anesthesiologists, and discussed thoroughly during the delivery planning consultation."
    },
    {
        q: "How many scans are needed during pregnancy?",
        a: "Typically 3-4 scans: a dating scan (6-8 weeks), NT scan (11-13 weeks), anomaly scan (18-20 weeks), and growth scan (32-34 weeks). Additional scans may be needed for high-risk pregnancies."
    },
    {
        q: "What should I eat during pregnancy?",
        a: "A balanced diet with adequate protein, iron, calcium, folic acid, and DHA is essential. Dr. Khemani provides personalized nutrition plans during consultations, considering individual health conditions and dietary preferences."
    },
];

export default function PregnancyCarePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero Section */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div
                        className="relative rounded-[3rem] overflow-hidden min-h-[70vh] flex items-center"
                        style={{ background: 'linear-gradient(135deg, #fadce9 0%, #fff 100%)' }}
                    >
                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4]" style={{ background: 'rgba(255,255,255,0.6)' }}>
                                        <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Pregnancy Care</span>
                                    </div>

                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Complete Pregnancy</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">
                                            Care & Delivery.
                                        </span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        From conception to postnatal recovery, Dr. Vinita Khemani provides comprehensive, personalized pregnancy
                                        care with 2,348+ successful deliveries and a &ldquo;normal delivery first&rdquo; philosophy.
                                    </p>

                                    {/* Quick Stats */}
                                    <div className="flex flex-wrap gap-6 mb-8">
                                        <div className="flex items-center gap-2">
                                            <Baby className="w-5 h-5 text-[#C21975]" />
                                            <span className="text-sm font-bold text-gray-800">2,348+ Deliveries</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-5 h-5 text-[#C21975]" />
                                            <span className="text-sm font-bold text-gray-800">10,000+ Patients</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-[#C21975]" />
                                            <span className="text-sm font-bold text-gray-800">21+ Years</span>
                                        </div>
                                    </div>

                                    <Link
                                        href="#contact"
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                        style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 100%)' }}
                                    >
                                        Book Consultation
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </span>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="relative h-[400px] md:h-[500px] order-first lg:order-none"
                                >
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                        <Image
                                            src="/images/mother_newborn_1770790584420.png"
                                            alt="Pregnancy Care in Kolkata - Dr. Vinita Khemani"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trimester Care Timeline */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                            Trimester-wise Care
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Your Pregnancy</span>{" "}
                            <span className="text-[#C21975]">Roadmap</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {trimesterCare.map((tri, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-4xl">{tri.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{tri.trimester}</h3>
                                        <p className="text-sm font-medium text-[#C21975]">{tri.weeks}</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {tri.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Delivery Options */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                            Delivery Options
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Safe &</span>{" "}
                            <span className="text-[#C21975]">Comfortable Delivery</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {deliveryOptions.map((option, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-[2rem] border shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 ${option.highlight ? 'bg-[#730940] border-[#730940] text-white' : 'bg-white border-gray-100'}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${option.highlight ? 'bg-white/10' : 'bg-[#f5e6ef]'}`}>
                                    <option.icon className={`w-7 h-7 ${option.highlight ? 'text-white' : 'text-[#C21975]'}`} />
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${option.highlight ? 'text-white' : 'text-gray-900'}`}>{option.title}</h3>
                                <p className={`leading-relaxed ${option.highlight ? 'text-pink-100' : 'text-gray-600'}`}>{option.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Postnatal Care */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/2023-04-23 (1).webp"
                                alt="Postnatal care and newborn checkup with Dr. Vinita Khemani"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                                After Delivery
                            </span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Postnatal</span>{" "}
                                <span className="text-[#C21975]">Recovery</span>
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Dr. Khemani provides comprehensive postnatal care including breastfeeding guidance, recovery monitoring, postpartum mental health support, and newborn care advice. She ensures a smooth transition into motherhood.
                            </p>

                            <div className="space-y-4">
                                {["Breastfeeding guidance & lactation support", "Postpartum follow-up visits at 2, 6 weeks", "Mental health screening & support", "Contraception counseling", "Newborn care & vaccination schedule"].map((item, i) => (
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

            {/* FAQ Section */}
            <section className="py-24 bg-gradient-to-b from-white to-[#fff0f5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32 text-left">
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                                    Common Questions
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] mb-6 pb-1">
                                    Pregnancy <br />
                                    <span className="text-[#C21975]">FAQ</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Find answers to the most common questions about prenatal care, delivery options, and postnatal recovery.
                                </p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
                                >
                                    Still have questions? Contact us
                                    <ChevronDown className="w-5 h-5 ml-2 -rotate-90 group-hover:translate-x-1 transition-transform" />
                                </Link>
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

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #730940 0%, #C21975 100%)' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Planning Your Pregnancy?
                        </h2>
                        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">
                            Book a prenatal consultation with Dr. Vinita Khemani and begin your pregnancy journey with expert care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#contact" className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl">
                                Book Now
                                <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <Calendar className="w-6 h-6" />
                                </span>
                            </Link>
                            <a href="tel:+919903588155" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all">
                                Call: +91 99035 88155
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalWebPage",
                    "name": "Pregnancy Care & Normal Delivery in Kolkata",
                    "description": "Expert pregnancy care by Dr. Vinita Khemani with 2,348+ successful deliveries",
                    "mainEntity": {
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
                    }
                })
            }} />

            <Footer />
        </main>
    );
}
