"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AlertTriangle, ArrowUpRight, Activity, Shield, ChevronDown, HeartPulse, AlertOctagon, Droplets, Ban, Zap, Gauge, Clock, Baby, Siren, Stethoscope, Heart, Users, BedDouble, Milk } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const reasons = [
    { title: "Fetal Distress", desc: "A critical condition where the baby's heart rate drops significantly or becomes irregular, indicating oxygen deprivation. Immediate delivery is vital to prevent long-term neurological damage.", icon: HeartPulse },
    { title: "Prolapsed Cord", desc: "Occurs when the umbilical cord descends into the birth canal ahead of the baby, getting compressed. This medical emergency cuts off the baby's oxygen supply instantly.", icon: AlertOctagon },
    { title: "Placental Abruption", desc: "The placenta detaches from the uterine wall before delivery, causing heavy internal bleeding and depriving the baby of oxygen. Requires immediate surgery.", icon: Droplets },
    { title: "Obstructed Labor", desc: "When the baby cannot exit the pelvis due to size (macrosomia) or abnormal position (transverse/breech), forcing a surgical birth to prevent uterine injury.", icon: Ban },
    { title: "Uterine Rupture", desc: "A catastrophic breach of the uterine wall, often along a previous C-section scar. This rare event causes severe bleeding and requires instant life-saving surgery.", icon: Zap },
    { title: "Severe Preeclampsia", desc: "Dangerously high blood pressure with organ damage. If it escalates to Eclampsia (seizures), immediate delivery is necessary to protect the mother's life.", icon: Gauge }
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
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e] hover:shadow-pink-500/25"
                                    >
                                        Emergency Contact
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </span>
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
                        <div className="order-2 lg:order-2">
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
                        <div className="order-1 lg:order-1 relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image src="/images/Pregnancy Care.png" alt="Mother and newborn post-delivery care" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D0C1E]/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <blockquote className="text-xl italic font-medium mb-4">&quot;Even in an emergency, the moment you hold your baby should be magical. We make sure safety never overshadows that joy.&quot;</blockquote>
                                <p className="font-bold">— Dr. Vinita Khemani</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* C-Sections in India - Long-form Content */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Understanding C-Sections</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Emergency C-Section: <br /><span className="text-[#C21975]">When Every Minute Counts</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                India has witnessed a significant rise in caesarean deliveries, with NFHS-5 data showing C-section rates of 47% in private hospitals — well above the WHO-recommended 10-15%. While elective C-sections are a separate discussion, emergency caesarean sections are life-saving procedures that become necessary when there is an immediate threat to the mother or baby during labor.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                An emergency C-section is performed when complications arise suddenly during labor — fetal distress (baby&apos;s heart rate dropping), cord prolapse, placental abruption, failed labor progression, or maternal hemorrhage. In these situations, the decision-to-delivery interval (DDI) is critical — ideally under 30 minutes.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani operates at hospitals equipped with 24/7 operation theatre readiness, blood bank access, and NICU facilities. Her extensive experience means she can make rapid, accurate assessments during labor emergencies, ensuring the safest possible outcome. Importantly, she also counsels families honestly about when a C-section is truly necessary vs. when patience and proper labor management can achieve a normal delivery.
                            </p>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Discuss Your Delivery Plan
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative sticky top-32">
                            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image src="/images/emergency-csection.jpg" alt="Emergency caesarean readiness" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block z-20">
                                <p className="text-sm font-bold text-gray-900 mb-1">24/7 Ready</p>
                                <p className="text-xs text-gray-600">Decision-to-delivery in under 30 minutes at equipped hospital facilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Planning Your Delivery?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Discuss your birth plan with Dr. Khemani. Be prepared for every scenario while aiming for the healthiest delivery possible.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Book Delivery Consultation
                        <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </button>
                </div>
            </section>

            {/* Why Choose Us — Bento Grid */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Emergency Protocol</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Prepared for every{" "}<br />
                                <span className="italic text-[#C21975]">critical moment</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg max-w-md leading-relaxed lg:text-right">
                            When an emergency arises, it&apos;s not just skill that saves lives — it&apos;s preparation, systems, and a team that moves as one.
                        </p>
                    </div>
                    {/* Row 1: 3 columns */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6"><Siren className="w-7 h-7" /></div>
                                <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-4">Code Blue: Under 30 Minutes</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">Our Code Blue protocol ensures decision-to-delivery in under 30 minutes. The OT is pre-sterilized, the anesthesia team is on standby, and blood products are cross-matched — before the emergency even occurs.</p>
                        </div>
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6"><Users className="w-7 h-7" /></div>
                                <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-4">Coordinated Team Response</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">An emergency C-section involves the obstetrician, anesthesiologist, neonatologist, nurses, and blood bank — all pre-briefed and ready. Dr. Khemani leads this coordinated effort with calm precision.</p>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden min-h-[380px] shadow-lg">
                            <Image src="/images/emergency_ot_ready_1771254301635.png" alt="Emergency caesarean section operating theatre readiness" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <p className="font-bold text-lg mb-1">24/7 OT Readiness</p>
                                <p className="text-sm opacity-90">Fully equipped operation theatre with continuous fetal monitoring and instant surgical access.</p>
                            </div>
                        </div>
                    </div>
                    {/* Row 2: 3 columns */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6"><Baby className="w-7 h-7" /></div>
                                <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-4">Gentle C-Section Technique</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">Even in emergencies, we practice the &quot;Gentle Caesarean&quot; approach — delayed cord clamping when safe, immediate skin-to-skin contact, and allowing the mother to see and hear her baby&apos;s first cry.</p>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden min-h-[380px] shadow-lg">
                            <Image src="/images/best-lady-gynecologist-kolkata.webp" alt="NICU team ready for newborn care after emergency delivery" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <p className="font-bold text-lg mb-1">NICU On Standby</p>
                                <p className="text-sm opacity-90">Neonatology team and incubator ready within seconds for premature or distressed newborns.</p>
                            </div>
                        </div>
                        <div className="bg-[#f5f0f2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6"><Heart className="w-7 h-7" /></div>
                                <h3 className="font-display text-2xl md:text-[26px] font-bold text-gray-900 leading-snug mb-4">Aesthetic Closure &amp; Minimal Scarring</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">Despite the urgency, Dr. Khemani uses layered subcuticular closure with absorbable sutures — the same cosmetic technique used in elective surgeries — ensuring minimal visible scarring and faster wound healing.</p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <button onClick={() => setIsEnquiryModalOpen(true)} className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]">
                            Consult Dr. Khemani
                            <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45"><ArrowUpRight className="w-6 h-6" /></span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Recovery & Aftercare */}
            <section className="py-24 bg-[#F9F9F9]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Post-Delivery Care</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Recovery After an <span className="text-[#C21975]">Emergency C-Section</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">An emergency delivery can feel overwhelming. Our comprehensive post-operative care ensures you heal physically and emotionally.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="relative sticky top-32">
                            <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image src="/images/pregnancy_ultrasound_1771254283977.png" alt="Post-operative monitoring and recovery after emergency C-section" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#C21975] shrink-0"><Stethoscope className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Pain Management</h4>
                                    <p className="text-gray-600 leading-relaxed">A structured pain relief plan using a combination of oral analgesics and regional anesthesia techniques. Most patients report manageable discomfort by Day 2 and significantly reduced pain by Day 5.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#C21975] shrink-0"><Activity className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Early Mobilization</h4>
                                    <p className="text-gray-600 leading-relaxed">Gentle walking is encouraged within 12-24 hours after surgery. This reduces the risk of blood clots, improves circulation, and speeds up bowel recovery — getting you back on your feet safely.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#C21975] shrink-0"><Milk className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Breastfeeding Support</h4>
                                    <p className="text-gray-600 leading-relaxed">Our lactation consultants assist with positioning and latching techniques that are comfortable after abdominal surgery. Breastfeeding is initiated within the first hour when the baby is stable.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#C21975] shrink-0"><HeartPulse className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Emotional Debriefing</h4>
                                    <p className="text-gray-600 leading-relaxed">An unplanned C-section can feel like a loss of control. We provide post-delivery counseling sessions to help you process the experience, address any feelings of guilt or anxiety, and bond with your baby.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#C21975] shrink-0"><Shield className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Wound Care &amp; Follow-Up</h4>
                                    <p className="text-gray-600 leading-relaxed">Detailed wound care instructions are provided at discharge. A follow-up visit at 1 week (for wound check) and 6 weeks (for full recovery assessment) ensures complete healing and uterine recovery.</p>
                                </div>
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
