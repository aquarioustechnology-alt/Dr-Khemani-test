"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Users, MapPin, Baby, Stethoscope } from "lucide-react";

const memberships = [
    { title: "Life Member – FOGSI", subtitle: "Federation of Obstetric & Gynaecological Societies of India", icon: Users },
    { title: "Life Member – BOGS", subtitle: "Bengal Obstetric & Gynaecological Society", icon: MapPin },
    { title: "Member – ISAR", subtitle: "Indian Society for Assisted Reproduction", icon: Baby },
    { title: "Senior Consultant", subtitle: "Obstetrician & Gynecologist", icon: Stethoscope },
];

export function Credentials() {
    return (
        <section className="py-24 bg-[#F5F5F5]">
            <div className="container-fluid mx-auto max-w-[1400px] px-6">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Content Cards */}
                    <motion.div>
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                            Credentials & Recognitions
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10">
                            Committed to <br />
                            <span className="text-[#C21975]">Medical Excellence</span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {memberships.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#fdebf4] flex items-center justify-center text-[#C21975] mb-4">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1 leading-snug">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.subtitle}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 rounded-2xl bg-[#730940] text-white relative overflow-hidden">
                            <div className="relative z-10 flex gap-4 items-start">
                                <ShieldCheck className="w-8 h-8 shrink-0 text-[#ffa3cd]" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Verified Expert</h4>
                                    <p className="text-pink-100 text-sm leading-relaxed">
                                        Dr. Vinita Khemani stays at the forefront of medical advancements through continuous learning and active participation in global medical communities.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/2023-04-23.webp"
                                alt="Dr. Vinita Khemani at a Medical Conference"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#730940]/60 to-transparent mix-blend-multiply" />

                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <blockquote className="text-white font-medium text-lg italic border-l-4 border-[#ffa3cd] pl-4">
                                    &quot;Medicine is a lifelong journey of learning. Every certification represents a new way to help my patients.&quot;
                                </blockquote>
                                <p className="text-pink-200 mt-4 text-sm font-semibold uppercase tracking-wider">
                                    — Dr. Vinita Khemani
                                </p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -top-8 -right-8 w-full h-full rounded-[2.5rem] border-2 border-[#d4a5c4]/30 hidden lg:block" />
                        <div className="absolute -z-20 top-12 -left-12 w-24 h-24 bg-[#C21975] rounded-full blur-[60px] opacity-20" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
