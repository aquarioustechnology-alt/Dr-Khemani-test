"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight, ArrowRight, Calendar, CheckCircle,
    Baby, Heart,
    Shield, Microscope, UserCheck, ChevronDown,
    Stethoscope, Scissors, CircleDot, Users, Activity, Flower2
} from "lucide-react";
import { useState } from "react";
import { calculateExperience, calculateSurgeries } from "@/lib/utils";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

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
        id: "pcos-treatment",
        icon: PcosIcon,
        title: "PCOS Treatment & Management",
        subtitle: "Hormonal Balance & Wellness",
        description: "Comprehensive management of Polycystic Ovary Syndrome (PCOS) addressing irregular periods, acne, weight gain, and infertility. Dr. Khemani focuses on lifestyle changes and targeted medical therapies.",
        services: ["Hormonal Evaluation", "Diet & Lifestyle Plan", "Menstrual Regulation", "Acne & Hirsutism Treatment", "Metabolic Health", "Fertility Support"],
        image: "/images/2023-04-06.webp",
        href: "/treatments/pcos-treatment",
        color: "#f5e6ef",
    },
    {
        id: "endometriosis",
        icon: Stethoscope,
        title: "Endometriosis Management",
        subtitle: "Specialized Chronic Pain Relief",
        description: "Expert diagnosis and treatment for endometriosis, reducing pelvic pain and preserving fertility. We offer both medical management and advanced conservative surgery.",
        services: ["Pelvic Pain Assessment", "Diagnostic Laparoscopy", "Cyst Removal", "Adhesiolysis", "Fertility Preservation", "Long-term Management"],
        image: "/images/Laparoscopic Surgery.jpg",
        href: "/treatments/endometriosis",
        color: "#e8d5e0",
    },
    {
        id: "advanced-laparoscopy",
        icon: LaparoscopyIcon,
        title: "Advanced Laparoscopic Procedures",
        subtitle: "Complex Minimally Invasive Surgery",
        description: `State-of-the-art keyhole surgeries for complex gynecological conditions. Dr. Khemani has performed ${calculateSurgeries()}+ procedures ensuring faster recovery, minimal pain, and tiny scars.`,
        services: ["Total Laparoscopic Hysterectomy", "Myomectomy (Fibroids)", "Complex Cystectomy", "Ectopic Pregnancy", "Tubal Recanalization", "Fertility Enhancing Surgery"],
        image: "/images/Laparoscopic Surgery.jpg",
        href: "/treatments/advanced-laparoscopic-procedures",
        color: "#d4a5c4",
    },
    {
        id: "pregnancy-care",
        icon: Baby,
        title: "Pregnancy Management",
        subtitle: "Complete Prenatal to Postnatal Care",
        description: "Holistic pregnancy care tailored to your journey. From the first heartbeat to delivery and beyond, we prioritize the health and safety of both mother and baby.",
        services: ["Prenatal Checkups", "Ultrasound Monitoring", "Nutrition Counseling", "Normal Delivery Focus", "Labor Pain Management", "Postnatal Care"],
        image: "/images/Pregnancy Care.png",
        href: "/treatments/pregnancy-care",
        color: "#f5e6ef",
    },
    {
        id: "high-risk-pregnancy",
        icon: Shield,
        title: "High-Risk Pregnancy",
        subtitle: "Specialized Care for Complex Cases",
        description: "Dedicated management for pregnancies complicated by diabetes, hypertension, multiple gestations, or age-related factors. We ensure close monitoring for the best outcomes.",
        services: ["Gestational Diabetes", "Preeclampsia Management", "Twin/Triplet Care", "Preterm Labor Prevention", "Recurrent Miscarriage", "Fetal Monitoring"],
        image: "/images/High-Risk Pregnancy.webp",
        href: "/treatments/high-risk-pregnancy",
        color: "#e8d5e0",
    },
    {
        id: "fertility-management",
        icon: FertilityIcon,
        title: "Fertility Management",
        subtitle: "Pathways to Parenthood",
        description: "Compassionate evaluation and evidence-based treatments for couples facing conception challenges. We offer a range of assisted reproductive technologies.",
        services: ["Fertility Profiling", "Ovulation Induction", "IUI (Intrauterine Insemination)", "IVF Coordination", "Male Infertility Support", "Counseling"],
        image: "/images/Fertility Treatment.webp",
        href: "/treatments/fertility",
        color: "#d4a5c4",
    },
    {
        id: "family-planning",
        icon: Users,
        title: "Family Planning",
        subtitle: "Empowering Reproductive Choices",
        description: "Confidential guidance on contraception and reproductive health. We help you choose the best method for your lifestyle and future family goals.",
        services: ["Contraceptive Counseling", "IUD Insertion/Removal", "Oral Contraceptives", "Permanent Sterilization", "Pre-conception Counseling", "Sexual Health"],
        image: "/images/2023-02-08.webp",
        href: "/treatments/family-planning",
        color: "#f5e6ef",
    },
    {
        id: "emergency-c-section",
        icon: Activity,
        title: "Emergency Caesarean Section",
        subtitle: "Critical Care When Seconds Count",
        description: "Rapid response capability for emergency deliveries. Advanced surgical skill ensures the safety of mother and baby during unforeseen complications.",
        services: ["Fetal Distress Management", "Obstructed Labor", "Emergency Delivery", "NICU Backup", "Maternal Safety", "Post-Op Care"],
        image: "/images/High-Risk Pregnancy.webp",
        href: "/treatments/emergency-caesarean",
        color: "#e8d5e0",
    },
    {
        id: "hysterectomy",
        icon: Scissors,
        title: "Hysterectomy",
        subtitle: "Surgical Solution for Uterine Conditions",
        description: "Removal of the uterus when medically necessary for fibroids, cancer prevention, or severe bleeding. offering Laparoscopic, Abdominal, and Vaginal approaches.",
        services: ["Laparoscopic Hysterectomy", "Total/Subtotal Removal", "Ovary Preservation", "Fibroid Treatment", "Recovery Planning", "Hormonal Support"],
        image: "/images/Laparoscopic Surgery.jpg",
        href: "/treatments/hysterectomy",
        color: "#d4a5c4",
    },
    {
        id: "hysteroscopy",
        icon: Microscope,
        title: "Hysteroscopy",
        subtitle: "Direct Visual Diagnosis & Treatment",
        description: "Minimally invasive procedure to inspect the inside of the uterus. Used for diagnosing bleeding causes and treating polyps or septum without external cuts.",
        services: ["Diagnostic Hysteroscopy", "Polypectomy", "Septum Resection", "Adhesiolysis", "Biopsy", "Fibroid Resection"],
        image: "/images/Laparoscopic Surgery.jpg",
        href: "/treatments/hysteroscopy",
        color: "#f5e6ef",
    },
    {
        id: "ovarian-cystectomy",
        icon: CircleDot,
        title: "Ovarian Cystectomy",
        subtitle: "Preserving Ovarian Health",
        description: "Surgical removal of ovarian cysts while preserving the ovary and fertility. Specialized in treating dermoid, endometriotic, and simple cysts.",
        services: ["Laparoscopic Removal", "Fertility Preservation", "Pathology Review", "Pain Relief", "Cyst Surveillance", "Emergency Torsion Care"],
        image: "/images/Laparoscopic Surgery.jpg",
        href: "/treatments/ovarian-cystectomy",
        color: "#e8d5e0",
    },
    {
        id: "menopause-care",
        icon: Flower2,
        title: "Menopause Care",
        subtitle: "Graceful Transition Support",
        description: "Holistic support for women navigating menopause. addressing hot flashes, bone health, and emotional well-being to ensure quality of life.",
        services: ["Symptom Management", "Hormone Replacement Therapy (HRT)", "Bone Density Check", "Heart Health", "Lifestyle Guidance", "Wellness Checks"],
        image: "/images/2023-02-08.webp",
        href: "/treatments/menopause",
        color: "#d4a5c4",
    },
];

const whyChoose = [
    { icon: UserCheck, title: "Personalized Care", desc: "Every patient receives individualized attention and customized treatment plans." },
    { icon: Microscope, title: "Advanced Technology", desc: "Modern diagnostic equipment and minimally invasive surgical techniques." },
    { icon: Shield, title: `${calculateExperience()}+ Years Experience`, desc: `${calculateExperience()} years of clinical excellence with thousands of successful outcomes.` },
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
        a: `Laparoscopic surgery is a minimally invasive surgical technique using small incisions and a camera. It offers 80% less pain, faster recovery (48 hours vs. weeks), and minimal scarring. Dr. Khemani has performed ${calculateSurgeries()}+ successful laparoscopic surgeries.`
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
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

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
                                        expert gynecological treatments backed by {calculateExperience()} years of clinical experience in Kolkata.
                                    </p>

                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                        style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 100%)' }}
                                    >
                                        Book Consultation
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </span>
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatments Grid */}
            <section className="py-24 bg-gradient-to-b from-white to-[#fffafc]">
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

                                    <div className="flex flex-wrap gap-4">
                                        <button
                                            onClick={() => setIsEnquiryModalOpen(true)}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C21975] text-white text-sm font-semibold hover:bg-[#8a2f5e] transition-all shadow-lg hover:shadow-xl w-fit"
                                        >
                                            Book Consultation
                                            <Calendar className="w-4 h-4" />
                                        </button>
                                        <Link
                                            href={service.href}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#C21975] text-[#C21975] text-sm font-semibold hover:bg-[#C21975] hover:text-white transition-all w-fit group/btn"
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-gradient-to-b from-[#fffafc] to-[#fff0f5]">
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
                                    Frequently <br />
                                    <span className="text-[#C21975]">Asked</span> Questions
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Find answers to the most common questions about our services, treatments, and clinic policies.
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
                            {serviceFaqs.map((faq, i) => (
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
            <SharedCTA showForm={true} title="Find Your Treatment" subtitle="Not sure which treatment is right for you? Consult with Dr. Vinita Khemani for a personalized recommendation." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

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
