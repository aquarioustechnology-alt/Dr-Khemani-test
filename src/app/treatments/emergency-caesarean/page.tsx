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
    { q: "How fast can an emergency C-section be done?", a: "In critical situations, our team acts with 'Code Blue' urgency, capable of delivering the baby within minutes (often under 30 minutes) to prevent oxygen deprivation and ensure safety." },
    { q: "Will I be awake during the surgery?", a: "Unless there is an immediate life-threat requiring general anesthesia, we strictly use spinal or epidural anesthesia. This allows you to be awake, hear your baby's first cry, and hold them immediately, without feeling pain." },
    { q: "Does an emergency C-section mean I can't have a normal delivery later?", a: "Not at all. With Dr. Khemani’s 'tissue-respecting' surgical techniques, uterine integrity is maintained, making VBAC (Vaginal Birth After Cesarean) a strong possibility for future pregnancies." },
    { q: "How is the recovery different from a planned C-section?", a: "Physical recovery is similar, but we understand the emotional toll of an emergency. Our post-op care includes emotional support, lactation consulting, and debriefing sessions to help you process the experience positively." },
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
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[85vh] flex items-center bg-[#fff0f5]">
                        {/* Abstract Shapes */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <AlertTriangle className="w-4 h-4 text-[#C21975]" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Critical Care Unit</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Emergency <br /> C-Section.</span>
                                    </h1>
                                    <div className="h-1 w-24 bg-[#C21975] mb-8 rounded-full" />
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        When seconds count, expertise matters. We provide rapid-response surgical care for obstetric emergencies, ensuring the highest safety standards for both mother and child without compromising on compassion.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e] hover:shadow-pink-500/25"
                                    >
                                        Emergency Contact
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[500px] lg:h-[600px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
                                        <Image src="/images/High-Risk Pregnancy.webp" alt="Emergency Delivery Care Team" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 text-white max-w-xs">
                                            <p className="font-bold text-xl mb-1">24/7 Readiness</p>
                                            <p className="text-sm opacity-90">Fully equipped OT & NICU team on standby.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Critical Situations Grid */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Why It Happens</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Understanding <span className="text-[#C21975]">The Need</span></h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            While natural birth is our goal, certain situations demand immediate intervention. We make these decisions transparently and with your full informed consent.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-50 to-transparent rounded-bl-[100%] rounded-tr-[2rem] opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="w-14 h-14 rounded-2xl bg-[#C21975] text-white flex items-center justify-center shadow-lg mb-6 relative z-10">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h4 className="font-display text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Section: What to Expect */}
            <section className="py-24 bg-[#F9F9F9] overflow-hidden">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">The Procedure</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Precision meets <span className="text-[#C21975]">Compassion</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#C21975] text-[#C21975] flex items-center justify-center font-bold text-lg shrink-0">1</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Preparation</h3>
                                        <p className="text-gray-600">Our team mobilizes instantly. Anesthesia is administered ensuring you are pain-free but conscious to welcome your baby.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#C21975] text-[#C21975] flex items-center justify-center font-bold text-lg shrink-0">2</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Gentle Delivery</h3>
                                        <p className="text-gray-600">Despite the urgency, we practice &quot;Gentle C-Section&quot; techniques—skin-to-skin contact is initiated immediately if the baby is stable.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#C21975] text-[#C21975] flex items-center justify-center font-bold text-lg shrink-0">3</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Closure</h3>
                                        <p className="text-gray-600">We use aesthetic suturing techniques to ensure minimal scarring and faster healing, reducing post-op discomfort.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image src="/images/mother_newborn_1770790584420.png" alt="Mother and newborn post-delivery" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D0C1E]/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <blockquote className="text-xl italic font-medium mb-4">&quot;Even in an emergency, the moment you hold your baby should be magical. We make sure safety never overshadows that joy.&quot;</blockquote>
                                <p className="font-bold">— Dr. Vinita Khemani</p>
                            </div>
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
                                    Key <br />
                                    <span className="text-[#C21975]">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Understanding emergency procedures can reduce anxiety.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
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

            <SharedCTA title="Your Safety, Our Priority" subtitle="24/7 Rapid Response for Obstetric Emergencies." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <Footer />
        </main>
    );
}
