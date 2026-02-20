"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Counter } from "@/components/Counter";
import { calculateSurgeries, calculateDeliveries } from "@/lib/utils";

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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Trusted by 10,000+</span> <br />
                <span className="text-[#C21975]">Families in Kolkata.</span>
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                Dr. Vinita Khemani has performed {calculateDeliveries().toLocaleString()}+ successful deliveries and {calculateSurgeries().toLocaleString()}+ laparoscopic surgeries across 6 hospitals in Kolkata. With a 4.5★ Google rating from 413+ verified reviews, her results-driven approach has earned the trust of families across West Bengal.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-gray-900 text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl mb-12"
              >
                Talk to Expert
                <span className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-6 h-6" />
                </span>
              </Link>
            </motion.div>

            {/* Google Reviews Trust Card */}
            <a
              href="https://www.google.com/search?sca_esv=ae4ce0f14d76081b&sxsrf=ANbL-n7HJTqSqoGj57DYB3g2RC9rmrXtVQ:1770706080347&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVBoAhIx1ILh5wIroY-RM31KvvztA3oHUXHZE-N9NSTOYai-vvIFKGNurtSdG5jYswH4undwmd7tNOnLgN38DBL_U231A7YKeV-n-VuMOShMILM0aywUQIKKMRYjtxmPzJEQZ_lToCaWUN4iqHD1uX1ByLFSeCW9qtvldBvUhH2RxGtaAg%3D%3D&q=Dr.+Vinita+Khemani+%28Lady+Gynecologists+and+Obstetricians+in+Kolkata%29+Reviews&sa=X&ved=2ahUKEwiQuq6Xqs6SAxXVRmwGHTZUAE4Q0bkNegQILRAH&biw=1536&bih=695&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 group hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C21975]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-[#C21975]/10" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-gray-900 leading-tight group-hover:text-[#C21975] transition-colors">Google Reviews</h3>
                      <p className="text-sm text-gray-500 mt-1">Obstetrician-Gynecologist</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star, i) => (
                          <span key={i} className="text-[#FBBC05] text-2xl">★</span>
                        ))}
                      </div>

                      <div className="flex items-baseline gap-2">
                        <h3 className="text-4xl font-bold text-gray-900">4.5</h3>
                        <span className="text-gray-400 text-sm">/ 5.0</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex justify-end mb-1">
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded">
                          Trusted
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm font-medium">
                        Based on <span className="text-gray-900 font-bold underline decoration-gray-200 underline-offset-2">413+ Reviews</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
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
              <p className="text-xl font-medium text-gray-500 mt-2">Patients Treated Across Kolkata</p>
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
                <h3 className="text-5xl font-bold text-gray-900 mb-2">
                  <Counter end={21} suffix="+" />
                </h3>
                <p className="text-[#702459] font-medium">Years in Obstetrics & Gynecology</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-[2rem] bg-[#fdf2f8]"
              >
                <h3 className="text-5xl font-bold text-gray-900 mb-2">
                  <Counter end={calculateDeliveries()} suffix="+" />
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
                <h3 className="text-5xl font-bold text-gray-900 mb-2">
                  <Counter end={calculateSurgeries()} suffix="+" />
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
                  <h3 className="text-5xl font-bold text-gray-900">
                    4.9
                  </h3>
                  {/* Golden Star specific size */}
                  <span className="text-4xl text-amber-400">★</span>
                </div>
                <p className="text-[#581c87] font-medium">Patient Satisfaction Rating</p>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
