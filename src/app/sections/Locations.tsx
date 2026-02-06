"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { clinics } from "@/lib/data";

export function Locations() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInWhenVisible>
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-100 text-medical-700 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4 inline mr-2" />
              Our Clinics
            </span>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visit Us At Our Clinics
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="text-lg text-gray-600">
              Three convenient locations across Kolkata for easy accessibility
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {clinics.map((clinic, index) => (
            <FadeInWhenVisible key={clinic.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-[#C21975] rounded-3xl p-8 border border-white/10 shadow-xl transition-all duration-300 h-full"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {clinic.name}
                    </h3>
                    <p className="text-sm text-white/90 mt-1">{clinic.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 mb-4 text-white/90">
                  <Phone className="w-5 h-5 text-white" />
                  <a href={`tel:${clinic.phone}`} className="hover:text-white transition-colors border-b border-white/30 hover:border-white pb-0.5">
                    {clinic.phone}
                  </a>
                </div>

                {/* Timings */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Clock className="w-5 h-5 text-white" />
                    <span>Timings</span>
                  </div>
                  <div className="pl-7 space-y-1">
                    {clinic.timings.map((timing, i) => (
                      <div key={i} className="text-sm text-white/90 flex justify-between">
                        <span className="font-medium text-white">{timing.days}:</span> {timing.time}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={clinic.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-full bg-white text-[#C21975] font-bold hover:bg-[#f5e6ef] transition-colors shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
