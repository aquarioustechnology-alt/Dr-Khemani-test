"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function MissionV2() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#fff5f5] to-white">
            <div className="container-fluid mx-auto max-w-[1400px] px-6">

                {/* Centered Heading */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                        Our Mission
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-gray-900 leading-[1.2] pb-2">
                        Empowering women through <br />
                        <span className="text-[#C21975] italic pr-1">compassionate healthcare.</span>
                    </h2>
                    <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                        We strive to create a safe, supportive environment where every woman feels heard, understood, and cared for at every stage of her life.
                    </p>
                </div>

                {/* 50/50 Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Patient-Centric Philosophy</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Dr. Vinita Khemani believes that medicine is as much about empathy as it is about science. Her &quot;Normal Delivery First&quot; approach has helped thousands of mothers experience childbirth naturally and safely.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Evidence-based treatments tailored to you",
                                "24/7 Support for high-risk pregnancies",
                                "Minimally invasive surgical techniques",
                                "Holistic care connecting body and mind"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#C21975] shrink-0" />
                                    <span className="text-lg text-gray-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/mother_newborn_1770790584420.png"
                            alt="Dr. Vinita Khemani with newborn"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
