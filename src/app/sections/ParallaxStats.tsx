"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Counter } from "@/components/Counter";

export function ParallaxStats() {
  return (
    <section className="py-24 bg-[#fffefe] text-gray-900 relative overflow-hidden">
      <div className="container-fluid mx-auto max-w-[1400px] px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Text & Graph */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Trust Built Over</span> <br />
                <span className="text-[#C21975]">Decades.</span>
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                With a legacy of excellence in woman care, we blend advanced medical expertise with a human touch. Our commitment goes beyond treatment—we build lasting relationships with every family we serve.
              </p>

              <Link
                href="/book-appointment"
                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-gray-900 text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl mb-12"
              >
                Talk to Expert
                <span className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-6 h-6" />
                </span>
              </Link>
            </motion.div>

            {/* Simulated 'Growth' Graph */}
            <div className="relative h-48 w-full max-w-md">
              <div className="absolute inset-0 flex items-end">
                {/* Gradient Area */}
                <svg viewBox="0 0 500 150" className="w-full h-full text-[#C21975]/5 fill-current">
                  <path d="M0,150 L0,100 C150,100 200,50 350,80 C400,90 450,20 500,0 L500,150 Z" />
                </svg>
                {/* Line */}
                <svg viewBox="0 0 500 150" className="absolute inset-0 w-full h-full overflow-visible">
                  <motion.path
                    d="M0,100 C150,100 200,50 350,80 C400,90 450,20 500,0"
                    fill="none"
                    stroke="#C21975"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Consistent Care Quality
              </div>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="flex flex-col gap-12">

            {/* Primary Big Stat */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-b border-gray-100 pb-12"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-[#C21975] text-8xl lg:text-9xl font-bold tracking-tighter">
                  <Counter end={10} suffix="k+" duration={2.5} />
                </span>
              </div>
              <p className="text-xl font-medium text-gray-500 mt-2">Happy Families Served</p>
            </motion.div>

            {/* Secondary Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-[2rem] bg-[#fff0f7]"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  <Counter end={21} suffix="+" />
                </h3>
                <p className="text-[#702459] font-medium">Years of Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-[2rem] bg-[#fdf2f8]"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  <Counter end={2348} suffix="+" />
                </h3>
                <p className="text-[#702459] font-medium">Successful Deliveries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 rounded-[2rem] bg-[#fff5f5]"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  <Counter end={583} suffix="+" />
                </h3>
                <p className="text-[#7f1d1d] font-medium">Surgeries Performed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-[2rem] bg-[#fdf4ff]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-4xl font-bold text-gray-900">
                    4.9
                  </h3>
                  {/* Golden Star specific size */}
                  <span className="text-3xl text-amber-400">★</span>
                </div>
                <p className="text-[#581c87] font-medium">Patient Satisfaction</p>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
