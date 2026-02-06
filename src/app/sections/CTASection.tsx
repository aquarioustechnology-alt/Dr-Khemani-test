"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 50%, #6b2349 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(184,90,138,0.3)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(201,123,163,0.2)' }} />

      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book a consultation today and take the first step towards better health.
              Our team is here to support you every step of the way.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all"
                style={{ color: '#C21975' }}
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919903588155"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right - Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Visit Our Clinics</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Healing Touch Clinic, Bangur Avenue<br />
                    Apollo Clinic, New Town<br />
                    Charnock Hospital, Tegharia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Working Hours</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Mon-Sat: 11:00 AM - 5:00 PM<br />
                    Thursday: 12:00 PM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: '#f5e6ef' }}>
                  <Phone className="w-6 h-6" style={{ color: '#C21975' }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Emergency Contact</h3>
                  <a href="tel:+919903588155" className="font-bold text-xl hover:underline" style={{ color: '#C21975' }}>
                    +91 99035 88155
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
