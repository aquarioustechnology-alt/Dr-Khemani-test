"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FocusSection() {
    return (
        <section className="relative w-full min-h-[80vh] py-24 lg:py-32 overflow-hidden flex flex-col justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/PCOS-bg.png"
                    alt="Fertility and PCOS Treatment"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7a1c4f]/40 via-[#7a1c4f]/0 to-transparent z-10" />
            </div>

            <div className="container-fluid mx-auto px-6 relative z-20 flex-grow flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-12 h-full flex-grow">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl self-center"
                    >
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20 text-white bg-white/10 backdrop-blur-sm">
                            Specialized Care
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Hope & Healing for <br />
                            <span className="text-[#ff85c2]">Infertility & PCOS</span>
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                            Every journey to motherhood is unique. We provide comprehensive, compassionate care tailored to manage PCOS and help you achieve your dream of starting a family.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C21975] text-white font-semibold text-lg hover:bg-[#a01560] transition-colors shadow-lg hover:shadow-xl"
                            >
                                Book Your Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/treatments/fertility"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 font-semibold text-lg hover:bg-white/20 transition-colors"
                            >
                                View Treatments
                            </Link>
                        </div>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:gap-8 self-end pb-12">
                        {/* PCOS Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#C21975] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src="/images/pcos-treatment-ico.svg"
                                    width={32}
                                    height={32}
                                    alt="PCOS"
                                    className="w-8 h-8 invert brightness-0"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">PCOS Management</h3>
                            <p className="text-white/80 mb-6 leading-relaxed line-clamp-1">
                                Restore Hormonal Balance
                            </p>
                            <ul className="space-y-2 mb-6 text-white/90 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-white" /> Hormonal Therapy
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-white" /> Diet & Lifestyle
                                </li>
                            </ul>
                        </motion.div>

                        {/* Infertility Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-[2rem] bg-[#f5e6ef] border border-[#d4a5c4] shadow-xl group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src="/images/fertility-treatment-ico.svg"
                                    width={32}
                                    height={32}
                                    alt="Fertility"
                                    className="w-8 h-8"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Infertility Solutions</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-1">
                                Advanced Fertility Care
                            </p>
                            <ul className="space-y-2 mb-6 text-gray-700 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#C21975]" /> Advanced Diagnostics
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#C21975]" /> Success-Driven Care
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
