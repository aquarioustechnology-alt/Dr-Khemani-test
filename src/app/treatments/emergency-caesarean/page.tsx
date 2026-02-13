"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AlertTriangle, ArrowUpRight, Activity, Shield, ChevronDown } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const reasons = [
    { title: "Fetal Distress", desc: "Sudden drop in baby's heart rate indicating lack of oxygen.", icon: Activity },
    { title: "Prolapsed Cord", desc: "Umbilical cord slips out before the baby, cutting off blood supply.", icon: AlertTriangle },
    { title: "Placental Abruption", desc: "Placenta separates from the uterus wall prematurely, causing severe bleeding.", icon: Shield },
    { title: "Obstructed Labor", desc: "Baby is too large or in a difficult position (like transverse lie) to pass through safely.", icon: AlertTriangle },
    { title: "Uterine Rupture", desc: "A tear in the uterus, a rare but life-threatening emergency.", icon: AlertTriangle },
    { title: "Severe Preeclampsia", desc: "Dangerously high BP threatening seizures (Eclampsia).", icon: Activity }
];

const faqs = [
    { q: "How fast can an emergency C-section be done?", a: "In critical situations, our team can deliver the baby within minutes (often under 30 minutes from decision to delivery) to ensure the safety of both mother and child." },
    { q: "Will I be awake during the surgery?", a: "Usually, yes. Spinal anesthesia numbs the lower body so you are awake but feel no pain. In extreme emergencies where there isn't time for a spinal block, general anesthesia to put you to sleep might be used." },
    { q: "Does an emergency C-section mean I can't have a normal delivery later?", a: "Not necessarily. Many women can have a Vaginal Birth After Cesarean (VBAC) for their next pregnancy, depending on the reason for the first C-section and the type of uterine incision used." },
    { q: "Is the recovery different from a planned C-section?", a: "Physically, the recovery is similar, but emotional recovery might take longer due to the stressful nature of the event. We provide extra support to help you process the experience." },
];

export default function EmergencyCSectionPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[70vh] flex items-center bg-[#fff8eb]">
                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-orange-200 bg-white/60 backdrop-blur-sm">
                                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                                        <span className="text-sm font-semibold tracking-wide text-orange-600 uppercase">Critical Care</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Emergency <br /> C-Section.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        While we always aim for a normal delivery, the safety of mother and baby is paramount. Dr. Vinita Khemani is equipped to handle critical obstetric emergencies with rapid response and surgical precision.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-orange-500 to-orange-700"
                                    >
                                        Emergency Contact
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[400px] md:h-[500px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/High-Risk Pregnancy.webp" alt="Emergency Delivery Care" fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Needed */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-200 text-orange-600 bg-orange-50">Indications</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">When is it <span className="text-orange-600">Necessary?</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reasons.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-4 p-6 rounded-[2rem] border border-orange-100 bg-orange-50/50 hover:bg-orange-50 transition-all hover:shadow-lg"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white text-orange-600 flex items-center justify-center shadow-sm shrink-0">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section with Updated Style */}
            <section className="py-24 bg-gradient-to-b from-white to-[#fff8eb]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32 text-left">
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-200 text-orange-600 bg-orange-50">
                                    FAQ
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] mb-6 pb-1">
                                    Key <br />
                                    <span className="text-orange-600">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Understanding emergency procedures can reduce anxiety.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-colors group"
                                >
                                    Speak to us
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
                                        ? "bg-white border-orange-500/30 shadow-lg shadow-orange-500/5 ring-1 ring-orange-500/20"
                                        : "bg-white/80 border-white/50 shadow-sm hover:border-orange-100 hover:bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                    >
                                        <span className={`text-lg md:text-xl font-semibold transition-colors ${openFaq === i ? "text-orange-600" : "text-gray-900"}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ml-4 ${openFaq === i
                                            ? "bg-orange-600 border-orange-600 text-white rotate-180"
                                            : "bg-transparent border-gray-200 text-gray-400 group-hover:border-orange-600 group-hover:text-orange-600"
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

            <SharedCTA title="Your Safety, Our Priority" subtitle="24/7 Rapid Response for Obstetric Emergencies." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <Footer />
        </main>
    );
}
