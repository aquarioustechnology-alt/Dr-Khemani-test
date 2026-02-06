"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock } from "lucide-react";


export function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container-fluid mx-auto max-w-[1400px] px-6">

        {/* Header Section - Reference Style */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-4">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
              About Dr. Vinita Khemani
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold animate-text-gradient leading-tight">
              Compassionate Care, <br /> <span className="text-[#C21975] whitespace-nowrap">Expert Solutions.</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              With over two decades of experience in gynecology and obstetrics, I have dedicated
              my career to providing compassionate, personalized care to women at every stage of life.
              I believe every patient deserves individual attention and a treatment plan tailored to their unique needs.
            </p>
          </div>
        </div>

        {/* 3-Card Grid Layout - Reference Style */}
        <div className="grid lg:grid-cols-3 gap-8 h-auto lg:h-[500px]">

          {/* Card 1: Experience & Stats (Light Brand Bg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 bg-[#730940]/5 border border-[#730940]/10"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center mb-8 shadow-sm">
                <Clock className="w-8 h-8 text-[#C21975]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">21+ Years</h3>
              <p className="text-gray-700 text-lg font-medium">Of Clinical Excellence & Patient Care</p>
            </div>

            <div className="mt-8 pt-8 border-t border-[#d4a5c4]/30">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "https://randomuser.me/api/portraits/women/65.jpg",
                    "https://randomuser.me/api/portraits/men/32.jpg",
                    "https://randomuser.me/api/portraits/women/42.jpg"
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden bg-gray-200">
                      <Image src={src} alt="Patient" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <span className="font-semibold text-gray-900">10k+ Happy Patients</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Image Card (Center) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2.5rem] overflow-hidden relative group"
          >
            <Image
              src="/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg"
              alt="Dr Vinita Khemani"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg">
                <p className="text-white/90 text-sm font-semibold tracking-wider uppercase mb-1">Senior Consultant</p>
                <h3 className="text-white text-3xl font-bold">Dr. Vinita Khemani</h3>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Credentials (Deep Purple) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 bg-white border border-gray-200 shadow-lg"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mb-8">
                <Award className="w-8 h-8 text-[#C21975]" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C21975]" />
                  <span className="text-lg text-gray-600">MBBS (Calcutta University)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C21975]" />
                  <span className="text-lg text-gray-600">DGO - Obstetrics & Gynecology</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C21975]" />
                  <span className="text-lg text-gray-600">Fellowship in Laparoscopy</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C21975] font-semibold group-hover:gap-3 transition-all underline decoration-[#C21975]/30 underline-offset-4"
              >
                More About Me
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C21975] text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                Schedule Visit
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
