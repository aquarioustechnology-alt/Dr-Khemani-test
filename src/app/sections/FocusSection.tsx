"use client";


import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { EnquiryModal } from "@/components/EnquiryModal";

export function FocusSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="py-12 bg-white">
            <div className="container-fluid mx-auto px-4 md:px-6 lg:px-8 max-w-[1600px]">

                {/* Header Section */}
                <div className="grid lg:grid-cols-2 gap-8 mb-10 items-end">
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                            Specialized Care
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Hope & Healing for <br />
                            <span className="text-[#C21975]">Infertility & PCOS</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Specializing in PCOS management and Infertility solutions, Dr. Vinita Khemani adopts a systematic, root-cause approach. We provide expert medical care to restore hormonal balance and help you achieve your dream of starting a family.
                        </p>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="rounded-[3rem] overflow-hidden bg-[#fff5f5] border border-[#fce7f3]">
                    <div className="grid lg:grid-cols-2">

                        {/* Left Content Side */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">

                            {/* Services Grid */}
                            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                {/* PCOS Block */}
                                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100/50">
                                    <div className="w-12 h-12 rounded-xl bg-[#C21975] flex items-center justify-center mb-4">
                                        <Image
                                            src="/images/pcos-treatment-ico.svg"
                                            width={24}
                                            height={24}
                                            alt="PCOS"
                                            className="w-6 h-6 invert brightness-0"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">PCOS Management</h3>
                                    <p className="text-gray-600 text-sm mb-4 font-medium">
                                        Restore Hormonal Balance
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-500">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#C21975]" /> Hormonal Therapy
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#C21975]" /> Diet & Lifestyle
                                        </li>
                                    </ul>
                                </div>

                                {/* Infertility Block */}
                                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100/50">
                                    <div className="w-12 h-12 rounded-xl bg-[#f5e6ef] flex items-center justify-center mb-4">
                                        <Image
                                            src="/images/fertility-treatment-ico.svg"
                                            width={24}
                                            height={24}
                                            alt="Fertility"
                                            className="w-6 h-6"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Infertility Solutions</h3>
                                    <p className="text-gray-600 text-sm mb-4 font-medium">
                                        Advanced Fertility Care
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-500">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#C21975]" /> Advanced Diagnostics
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#C21975]" /> Success-Driven Care
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#C21975] text-white font-semibold text-base hover:bg-[#a01560] transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Book Consultation
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <Link
                                    href="/treatments/fertility"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#C21975] border border-[#d4a5c4] font-semibold text-base hover:bg-[#f5e6ef] transition-colors"
                                >
                                    View Treatments
                                </Link>
                            </div>

                        </div>

                        {/* Right Image Side */}
                        <div className="relative min-h-[400px] lg:min-h-full">
                            <Image
                                src="/images/doctor_clinic_portrait_1770790565861.png"
                                alt="Dr. Vinita Khemani - Fertility & PCOS Specialist"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                            {/* Optional: Gradient Overlay if needed for text readability? No, image is purely decorative here on the right */}
                        </div>

                    </div>
                </div>

            </div>
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
