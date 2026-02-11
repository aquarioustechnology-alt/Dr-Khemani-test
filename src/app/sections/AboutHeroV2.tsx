"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Baby, Star, Scissors } from "lucide-react";

export function AboutHeroV2() {
    return (
        <section className="bg-white px-4 pt-32 pb-8 lg:pt-40 lg:pb-0">
            <div className="mx-auto max-w-[1400px]">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
                    {/* Left Column: Text Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-[#d4a5c4] bg-[#f5e6ef]/50">
                                <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                                <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">
                                    About Dr. Vinita Khemani
                                </span>
                            </div>

                            <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold text-gray-900 mb-8 tracking-tight">
                                compassionate care <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#8a2f5e] italic">
                                    for every woman.
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-8">
                                With over 21 years of experience, Dr. Vinita Khemani combines medical excellence with a heart-centered approach to transform women&apos;s healthcare in Kolkata.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Hero Image & Floating Stats */}
                    <div className="relative mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-full h-[450px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/doctor_clinic_portrait_1770790565861.png"
                                alt="Dr. Vinita Khemani - Best Gynecologist in Kolkata"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -bottom-16 left-6 right-6 lg:-left-12 lg:right-auto bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-8 border border-gray-100 z-20"
                        >
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                {[
                                    { value: "21+", label: "Years Exp.", icon: Star },
                                    { value: "10k+", label: "Patients", icon: Users },
                                    { value: "2k+", label: "Deliveries", icon: Baby },
                                    { value: "583+", label: "Surgeries", icon: Scissors },
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#fff5f9] flex items-center justify-center text-[#C21975] shrink-0">
                                            <stat.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-gray-900 leading-none mb-0.5">{stat.value}</p>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
