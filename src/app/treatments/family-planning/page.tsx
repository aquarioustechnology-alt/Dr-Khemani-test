"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle, Users, ArrowUpRight, Shield, Heart, Activity, ChevronDown } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const methods = [
    { title: "Oral Contraceptives", desc: "Hormonal birth control pills that prevent ovulation. Highly effective when taken daily.", icon: Shield },
    { title: "Intrauterine Devices (IUD)", desc: "Long-acting reversible contraception (Copper-T or Mirena) placed in the uterus. Effective for 5-10 years.", icon: CheckCircle },
    { title: "Injectable Contraceptives", desc: "Hormonal injections (DMPA) given every 3 months. Convenient for those who forget daily pills.", icon: Activity },
    { title: "Male / Female Sterilization", desc: "Permanent birth control options (Vasectomy or Tubal Ligation) for completed families.", icon: Heart }
];

const faqs = [
    { q: "Who provides the best family planning counseling?", a: "Dr. Vinita Khemani offers confidential, non-judgmental family planning services. She helps couples choose the best contraceptive methods based on their health, age, and future goals." },
    { q: "Which contraceptive method is best for me?", a: "The best method depends on your health, age, lifestyle, and future pregnancy plans. Dr. Khemani will discuss all suitable options (hormonal, IUD, pills) available at her the city clinic to help you make an informed choice." },
    { q: "What is the cost of Copper-T insertion?", a: "The cost of IUD (Copper-T or Mirena) insertion is affordable and depends on the specific device chosen. Dr. Khemani provides safe, hygienic insertion procedures at her clinic." },
    { q: "Does the Copper-T cause pain?", a: "Placement might cause mild cramping, but it subsides quickly. Some women may experience heavier periods initially, but modern IUDs are very well tolerated." },
    { q: "Will birth control pills affect my future fertility?", a: "No. Fertility typically returns very quickly (often within days or weeks) after you stop taking the pill. There is no long-term negative effect on your ability to conceive." },
    { q: "Does IUD affect fertility?", a: "No. The IUD (Copper-T or Mirena) is completely reversible. As soon as it is removed by Dr. Khemani, your natural fertility returns almost immediately." },
    { q: "What is emergency contraception?", a: "Emergency contraceptive pills (Morning-after pills) can promote pregnancy prevention if taken within 72 hours of unprotected sex. They should not be used as a regular method." },
];

export default function FamilyPlanningPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[70vh] flex items-center bg-[#fff0f5]">
                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <Users className="w-4 h-4 text-[#C21975]" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Contraception & Counseling</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Family Planning &</span> <br /> <span className="text-[#C21975]">Contraception Specialist in Kolkata.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Empowering you to make informed decisions about your reproductive health. Dr. Vinita Khemani is the best gynecologist for birth control options, offering services like Copper-T insertion and contraceptive counselling in South the city.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                    >
                                        Private Consultation
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </span>
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[400px] md:h-[500px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/2023-04-23.webp" alt="Family Planning Advice" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/10 to-transparent"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methods */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Choices</span>
                        <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Your <span className="text-[#C21975]">Options</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {methods.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-4 p-8 rounded-[2rem] border border-gray-100 bg-[#fffbfc] hover:bg-white hover:shadow-xl transition-all text-center group hover:-translate-y-2"
                            >
                                <div className="mx-auto w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm text-[#C21975] group-hover:bg-[#C21975] group-hover:text-white transition-colors">
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

            {/* Comprehensive Contraceptive Guide - New Section */}
            <section className="py-24 bg-[#fff9fc]">
                <div className="container-fluid mx-auto max-w-[1240px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Detailed Guide</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">Finding the Right <span className="text-[#C21975]">Fit for You</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">There is no &quot;one size fits all&quot; in contraception. The best method depends on your reproductive goals, lifestyle, and medical history.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Short Term */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-pink-50 hover:shadow-lg transition-all">
                            <div className="w-14 h-14 rounded-full bg-pink-100/50 flex items-center justify-center text-[#C21975] mb-6">
                                <Activity className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Short-Term Methods</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">Best for women who want to prevent pregnancy now but may want to conceive in the near future.</p>
                            <ul className="space-y-3">
                                {[
                                    { name: "Oral Contraceptive Pills", desc: "Daily intake, 99% effective." },
                                    { name: "Barrier Methods", desc: "Condoms, Diaphragms." },
                                    { name: "Vaginal Ring", desc: "Monthly hormonal ring." }
                                ].map((m, i) => (
                                    <li key={i} className="flex flex-col border-b border-gray-50 pb-2 last:border-0">
                                        <span className="font-bold text-gray-800 text-sm">{m.name}</span>
                                        <span className="text-xs text-gray-500">{m.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Long Term */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-md border border-pink-100 hover:shadow-xl transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C21975]/5 rounded-bl-[3rem] transition-transform group-hover:scale-150" />
                            <div className="w-14 h-14 rounded-full bg-[#C21975] flex items-center justify-center text-white mb-6 shadow-lg shadow-pink-200">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Long-Acting (LARC)</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">&quot;Set and forget&quot; methods for women who want reliable protection for 3-10 years.</p>
                            <ul className="space-y-3">
                                {[
                                    { name: "Copper-T (IUD)", desc: "Hormone-free, 5-10 years." },
                                    { name: "Mirena (Hormonal IUD)", desc: "Reduces heavy periods, 5 years." },
                                    { name: "Contraceptive Implant", desc: "Arm implant, 3 years." }
                                ].map((m, i) => (
                                    <li key={i} className="flex flex-col border-b border-gray-50 pb-2 last:border-0">
                                        <span className="font-bold text-gray-800 text-sm">{m.name}</span>
                                        <span className="text-xs text-gray-500">{m.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Permanent */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-pink-50 hover:shadow-lg transition-all">
                            <div className="w-14 h-14 rounded-full bg-pink-100/50 flex items-center justify-center text-[#C21975] mb-6">
                                <CheckCircle className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Permanent Solutions</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">For couples who have completed their family and want a permanent solution.</p>
                            <ul className="space-y-3">
                                {[
                                    { name: "Laparoscopic Tubal Ligation", desc: "Minimally invasive female sterilization." },
                                    { name: "Vasectomy", desc: "Simple procedure for male partners." }
                                ].map((m, i) => (
                                    <li key={i} className="flex flex-col border-b border-gray-50 pb-2 last:border-0">
                                        <span className="font-bold text-gray-800 text-sm">{m.name}</span>
                                        <span className="text-xs text-gray-500">{m.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Family Planning in India - Long-form Content */}
                <section className="py-24 bg-[#fdf8fa]">
                    <div className="container-fluid mx-auto max-w-[1400px] px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Empowering Choices</span>
                                <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Family Planning in India: <br /><span className="text-[#C21975]">Empowering Informed Choices</span></h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Despite being home to one of the world&apos;s largest family planning programs, India still faces significant gaps in contraceptive awareness and access. According to NFHS-5 data, the unmet need for family planning in India remains around 9.4%, meaning millions of women who want to delay or prevent pregnancy lack access to effective contraception.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    In urban settings like the city, women today have more choices than ever — from hormonal pills and IUDs to long-acting reversible contraceptives (LARCs) and permanent methods. Yet, many women rely on outdated or ineffective methods simply because they were never properly counseled about modern options. The key to effective family planning is informed, non-judgmental counseling from a trusted gynecologist.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Dr. Vinita Khemani provides comprehensive family planning counseling that respects each woman&apos;s unique circumstances — her health, age, family goals, and medical history. Whether you&apos;re looking to space pregnancies, prevent future pregnancies, or reverse a previous procedure, Dr. Khemani ensures you understand all your options and their implications before making a decision.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                >
                                    Book Family Planning Session
                                    <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </span>
                                </button>
                            </div>
                            <div className="relative sticky top-32">
                                <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                    <Image src="/images/family-planning-counseling.jpg" alt="Family planning consultation with Dr. Vinita Khemani" fill className="object-cover object-top" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block z-20">
                                    <p className="text-sm font-bold text-gray-900 mb-1">Your Choice</p>
                                    <p className="text-xs text-gray-600">Personalized contraceptive counseling tailored to your health, lifestyle, and family goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pre-Conception Counseling - New Section */}
                <section className="py-24 bg-white relative">
                    <div className="container-fluid mx-auto max-w-[1400px] px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#fff0f5]">
                                <Image src="/images/fertility-still-life-arrangement.jpg" alt="Planning for pregnancy - Pre-conception counseling" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                                    <p className="font-bold text-xl mb-1">Planning a Baby?</p>
                                    <p className="text-sm opacity-90">Start your journey with a health check-up to ensure a safe pregnancy.</p>
                                </div>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Planning Ahead</span>
                                <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Pre-Conception <br /><span className="text-[#C21975]">Counseling</span></h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Family planning isn&apos;t just about preventing pregnancy; it&apos;s also about planning for a healthy one when you are ready. Dr. Khemani emphasizes the importance of a pre-conception checkup at least 3 months before you try to conceive.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        "Optimizing nutritional status",
                                        "Managing chronic conditions",
                                        "Screening for genetic disorders",
                                        "Stopping incompatible medications",
                                        "Vaccination review",
                                        "Lifestyle optimization"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                            <div className="w-2 h-2 rounded-full bg-[#C21975]" />
                                            <span className="text-gray-700 font-medium text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-[#C21975] font-semibold text-base transition-all hover:bg-[#fff0f5] border border-[#fce7f3]"
                                >
                                    Book Pre-Conception Checkup
                                    <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mid-Page CTA Banner */}
                <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                    <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Planning Your Family&apos;s Future?</h3>
                        <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Get expert, confidential counseling on the best contraceptive method for your individual needs.</p>
                        <button
                            onClick={() => setIsEnquiryModalOpen(true)}
                            className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                        >
                            Schedule a Consultation
                            <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight className="w-6 h-6" />
                            </span>
                        </button>
                    </div>
                </section>

            </section>

            {/* Why Choose Dr. Khemani - Enhanced Section */}
            <section className="py-24 bg-[#fffbfc] relative overflow-hidden">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Why Choose Us</span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Dr. Vinita Khemani for <br /><span className="text-[#C21975]">Family Planning?</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Detailed, confidential, and expert care that puts your reproductive autonomy first.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-pink-100 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-[#fff0f5] flex items-center justify-center text-[#C21975] mb-6">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Confidential & Non-Judgmental</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We understand that reproductive choices are personal. Dr. Khemani provides a safe, private space where you can discuss birth control, unplaned pregnancies, or sterilization without fear of judgment.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#C21975] p-8 rounded-[2.5rem] shadow-xl text-white transform md:-translate-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Expert IUD & Implant Insertion</h3>
                            <p className="text-pink-100 leading-relaxed">
                                Procedural skill matters. Dr. Khemani performs Copper-T, Mirena, and implant insertions with advanced techniques to minimize discomfort and ensure correct placement for maximum efficacy.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-pink-100 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-[#fff0f5] flex items-center justify-center text-[#C21975] mb-6">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Holistic Reproductive Care</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Family planning is integrated with your overall gynecological health. We check for underlying issues like PCOS or endometriosis that might influence which contraceptive method is safest for you.
                            </p>
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
                                    Clarify your doubts in confidence.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
                                >
                                    Book an Appointment
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


            <SharedCTA title="Plan Your Future" subtitle="Discuss suitable contraception methods in confidence with Dr. Vinita Khemani." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
            <Footer />
        </main>
    );
}
