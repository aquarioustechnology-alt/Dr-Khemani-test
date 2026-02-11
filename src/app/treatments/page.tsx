"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight, ArrowRight, Calendar, CheckCircle,
    Baby, HeartPulse, Sparkles, Scan, Stethoscope, Heart,
    Shield, Microscope, UserCheck, ChevronDown
} from "lucide-react";
import { useState } from "react";

const FertilityIcon = ({ className }: { className?: string }) => (
    <div className={`relative ${className || "w-6 h-6"}`}>
        <Image
            src="/images/fertility-treatment-ico.svg"
            alt="Fertility Treatment"
            fill
            className="object-contain"
        />
    </div>
);

const LaparoscopyIcon = ({ className }: { className?: string }) => (
    <div className={`relative ${className || "w-6 h-6"}`}>
        <Image
            src="/images/laparoscopy-surgery-ico.svg"
            alt="Laparoscopic Surgery"
            fill
            className="object-contain"
        />
    </div>
);

const PcosIcon = ({ className }: { className?: string }) => (
    <div className={`relative ${className || "w-6 h-6"}`}>
        <Image
            src="/images/pcos-treatment-ico.svg"
            alt="PCOS Treatment"
            fill
            className="object-contain"
        />
    </div>
);

const serviceCategories = [
    {
        id: "pregnancy",
        icon: Baby,
        title: "Pregnancy Care",
        subtitle: "Complete Prenatal to Postnatal Care",
        description: "Comprehensive pregnancy monitoring from conception to postnatal recovery. Dr. Vinita Khemani prioritizes normal delivery, with 2,348+ successful deliveries in Kolkata.",
        services: ["Normal Delivery", "Painless Labor (Epidural)", "Prenatal Checkups", "Nutrition Counseling", "Delivery Planning", "Postnatal Recovery"],
        image: "/images/Pregnancy Care.png",
        href: "/treatments/pregnancy-care",
        color: "#f5e6ef",
    },
    {
        id: "high-risk",
        icon: HeartPulse,
        title: "High-Risk Pregnancy",
        subtitle: "Specialized Complex Pregnancy Management",
        description: "Expert care for pregnancies complicated by gestational diabetes, preeclampsia, placenta previa, multiple pregnancies, and recurrent miscarriage with round-the-clock monitoring.",
        services: ["Gestational Diabetes", "Preeclampsia Care", "Multiple Pregnancy", "Placenta Previa", "Recurrent Miscarriage", "NICU Coordination"],
        image: "/images/High-Risk Pregnancy.webp",
        href: "/treatments/high-risk-pregnancy",
        color: "#e8d5e0",
    },
    {
        id: "fertility",
        icon: FertilityIcon,
        title: "Fertility Treatment",
        subtitle: "Evidence-Based Fertility Solutions",
        description: "Comprehensive fertility evaluation and personalized treatment plans. From ovulation induction to IUI and IVF coordination, Dr. Khemani has helped thousands of couples realize their dream of parenthood.",
        services: ["Fertility Evaluation", "Ovulation Induction", "IUI Procedures", "IVF Coordination", "PCOS Fertility Support", "Male Factor Management"],
        image: "/images/Fertility Treatment.webp",
        href: "/treatments/fertility",
        color: "#d4a5c4",
    },
    {
        id: "laparoscopy",
        icon: LaparoscopyIcon,
        title: "Laparoscopic Surgery",
        subtitle: "Minimally Invasive Surgical Care",
        description: "583+ advanced laparoscopic surgeries for fibroids, ovarian cysts, endometriosis, hysterectomy, and ectopic pregnancy with minimal scarring and faster recovery.",
        services: ["Diagnostic Laparoscopy", "Fibroid Removal", "Ovarian Cystectomy", "Laparoscopic Hysterectomy", "Ectopic Pregnancy", "Endometriosis Surgery"],
        image: "/images/Laparoscopic Surgery.jpg",
        href: "/treatments/laparoscopic-surgery",
        color: "#c97ba3",
    },
    {
        id: "pcos",
        icon: PcosIcon,
        title: "PCOS / PCOD Treatment",
        subtitle: "Expert Hormonal Balance Care",
        description: "Comprehensive PCOS/PCOD management through lifestyle modification, medication, and fertility support. Dr. Khemani treats the root cause, not just the symptoms.",
        services: ["Hormonal Assessment", "Lifestyle Modification", "Medication Management", "Weight Management", "Fertility Support", "Long-term Monitoring"],
        image: "/images/2023-04-06.webp",
        href: "/treatments/pcos-treatment",
        color: "#f5e6ef",
    },
    {
        id: "menopause",
        icon: Heart,
        title: "Menopause & HRT",
        subtitle: "Comprehensive Menopause Management",
        description: "Symptom management including hot flashes, mood changes, and bone health. Hormone Replacement Therapy options, alternative therapies, and long-term wellness programs.",
        services: ["HRT Management", "Bone Health Screening", "Cardiovascular Risk Assessment", "Mood & Sleep Support", "Alternative Therapies", "Long-term Wellness"],
        image: "/images/2023-02-08.webp",
        href: "/treatments/menopause",
        color: "#e8d5e0",
    },
];

const whyChoose = [
    { icon: UserCheck, title: "Personalized Care", desc: "Every patient receives individualized attention and customized treatment plans." },
    { icon: Microscope, title: "Advanced Technology", desc: "Modern diagnostic equipment and minimally invasive surgical techniques." },
    { icon: Shield, title: "21+ Years Experience", desc: "Two decades of clinical excellence with thousands of successful outcomes." },
    { icon: Heart, title: "Compassionate Approach", desc: "Warm, supportive environment where patients feel heard and cared for." },
];

const serviceFaqs = [
    {
        q: "What gynecology services does Dr. Vinita Khemani offer?",
        a: "Dr. Vinita Khemani offers comprehensive women's healthcare including pregnancy care (normal & high-risk), fertility treatment (IUI, IVF coordination), laparoscopic surgery, PCOS/PCOD management, menopause care, and routine gynecological consultations."
    },
    {
        q: "Which is the best clinic for PCOS treatment in Kolkata?",
        a: "Healing Touch Clinic by Dr. Vinita Khemani at Bangur Avenue, Kolkata, is widely recognized for comprehensive PCOS treatment. Dr. Khemani uses an evidence-based approach combining lifestyle modification, medication, and long-term monitoring."
    },
    {
        q: "What is laparoscopic surgery and is it safe?",
        a: "Laparoscopic surgery is a minimally invasive surgical technique using small incisions and a camera. It offers 80% less pain, faster recovery (48 hours vs. weeks), and minimal scarring. Dr. Khemani has performed 583+ successful laparoscopic surgeries."
    },
    {
        q: "Does Dr. Vinita Khemani perform painless delivery?",
        a: "Yes, Dr. Vinita Khemani offers painless delivery (epidural analgesia) at her affiliated hospitals. She advocates a 'normal delivery first' approach and discusses all delivery options during prenatal consultations."
    },
    {
        q: "How do I choose the right treatment for my condition?",
        a: "Dr. Vinita Khemani provides a thorough evaluation during your first consultation, explains all available treatment options, and together with you, decides the best course of action. Call +91-9903588155 to schedule a consultation."
    },
];

export default function TreatmentsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero Section */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div
                        className="relative rounded-[3rem] overflow-hidden py-16 md:py-24 flex items-center"
                        style={{ background: 'linear-gradient(135deg, #fadce9 0%, #fff 100%)' }}
                    >
                        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
                            <div className="max-w-4xl mx-auto text-center">
                                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                    <div
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4]"
                                        style={{ background: 'rgba(255,255,255,0.6)' }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Specialized Expertise</span>
                                    </div>

                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Comprehensive Women&apos;s</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">
                                            Healthcare Treatments.
                                        </span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                        From pregnancy care to advanced laparoscopic surgery, Dr. Vinita Khemani provides
                                        expert gynecological treatments backed by 21+ years of clinical experience in Kolkata.
                                    </p>

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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatments Grid */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="space-y-20">
                        {serviceCategories.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
                            >
                                {/* Image */}
                                <div className={`relative h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl group ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <Image
                                        src={service.image}
                                        alt={`${service.title} - Dr. Vinita Khemani Kolkata`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6">
                                        <span className="inline-block px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[#C21975] text-sm font-bold">
                                            {service.subtitle}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: service.color }}>
                                            <service.icon className="w-6 h-6 text-[#C21975]" />
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-wider text-[#C21975]">{service.id.replace("-", " ")}</span>
                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>

                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {service.services.map((s, j) => (
                                            <div key={j} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0" />
                                                <span className="text-sm text-gray-700 font-medium">{s}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href="#contact"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C21975] text-white text-sm font-semibold hover:bg-[#8a2f5e] hover:gap-3 transition-all shadow-lg hover:shadow-xl w-fit"
                                    >
                                        Book Consultation
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                            Why Choose Us
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Trusted by</span>{" "}
                            <span className="text-[#C21975]">10,000+ Patients</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChoose.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 text-center group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7 text-[#C21975]" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                                Common Questions
                            </span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Treatments</span>{" "}
                                <span className="text-[#C21975]">FAQ</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {serviceFaqs.map((faq, i) => (
                                <div key={i} className="rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#C21975] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                                    </button>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="px-6 pb-6"
                                        >
                                            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #730940 0%, #C21975 100%)' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Find Your Treatment
                        </h2>
                        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">
                            Not sure which treatment is right for you? Consult with Dr. Vinita Khemani for a personalized recommendation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            >
                                Consult Now
                                <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <Calendar className="w-6 h-6" />
                                </span>
                            </Link>
                            <a
                                href="tel:+919903588155"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all"
                            >
                                Call: +91 99035 88155
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": serviceFaqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })
                }}
            />

            <Footer />
        </main>
    );
}
