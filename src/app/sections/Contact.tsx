"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar, Phone, MessageCircle, Clock,
  CheckCircle2, Loader2
} from "lucide-react";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { MagneticButton } from "@/components/MagneticButton";
import { doctorInfo, clinics, services } from "@/lib/data";
import { getWhatsAppLink, getCallLink } from "@/lib/utils";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    clinic: "",
    service: "",
    date: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        phone: "",
        email: "",
        clinic: "",
        service: "",
        date: "",
        city: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-medical-50/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-medical-100/20 to-transparent" />

      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInWhenVisible>
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-100 text-medical-700 text-sm font-medium mb-4">
              <Calendar className="w-4 h-4 inline mr-2" />
              Book Appointment
            </span>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Schedule Your Consultation
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="text-lg text-gray-600">
              Book your appointment online or contact us directly. We&apos;ll confirm your booking within 2 hours.
            </p>
          </FadeInWhenVisible>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <FadeInWhenVisible direction="left">
            <div className="space-y-8">
              {/* Quick Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={getCallLink()}
                  className="group p-6 rounded-3xl bg-white border border-gray-100 hover:border-medical-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-medical-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-medical-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-medical-600 font-medium">{doctorInfo.phone}</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Sat, 10am-8pm</p>
                </a>

                <a
                  href={getWhatsAppLink()}
                  className="group p-6 rounded-3xl bg-white border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-green-600 font-medium">Chat Now</p>
                  <p className="text-sm text-gray-500 mt-1">Quick response</p>
                </a>
              </div>

              {/* Working Hours */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-medical-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-medical-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Working Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Healing Touch</span>
                    <span className="text-gray-900">Mon-Sat, 11am-8pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Apollo Clinic</span>
                    <span className="text-gray-900">Mon-Sat, 10am-8pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Charnock Hospital</span>
                    <span className="text-gray-900">By Appointment</span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="p-4 rounded-2xl bg-medical-50 border border-medical-100">
                <p className="text-sm text-medical-800">
                  <strong>Note:</strong> For emergencies, please visit the nearest hospital emergency room.
                  For urgent consultations, call us directly.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Booking Form */}
          <FadeInWhenVisible direction="right">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-medical-900/10 border border-gray-100">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-2">
                    Appointment Request Sent!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll contact you within 2 hours to confirm your booking.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-400 focus:ring-2 focus:ring-medical-100 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-400 focus:ring-2 focus:ring-medical-100 outline-none transition-all"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-400 focus:ring-2 focus:ring-medical-100 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City / Town *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formState.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-400 focus:ring-2 focus:ring-medical-100 outline-none transition-all"
                        placeholder="e.g. Kolkata"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Clinic *
                      </label>
                      <select
                        name="clinic"
                        value={formState.clinic}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-400 focus:ring-2 focus:ring-medical-100 outline-none transition-all bg-white"
                      >
                        <option value="">Select Clinic</option>
                        {clinics.map(clinic => (
                          <option key={clinic.id} value={clinic.id}>{clinic.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-400 focus:ring-2 focus:ring-medical-100 outline-none transition-all bg-white"
                      >
                        <option value="">Select Service</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>{service.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formState.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-400 focus:ring-2 focus:ring-medical-100 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <input
                        type="text"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-400 focus:ring-2 focus:ring-medical-100 outline-none transition-all"
                        placeholder="Type short message..."
                      />
                    </div>
                  </div>

                  <div className="bg-[#f5e6ef]/50 p-4 rounded-xl border border-[#d4a5c4]/30">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <span className="font-bold text-[#C21975]">Note:</span> (Don&apos;t forget to mention the patient&apos;s age, sex, nature of problem, duration of problem, medical history, etc.)
                    </p>
                  </div>

                  <MagneticButton
                    className="w-full py-4 bg-medical-600 text-white rounded-xl font-semibold text-lg hover:bg-medical-700 transition-colors shadow-lg shadow-medical-600/20 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        Request Appointment
                      </>
                    )}
                  </MagneticButton>

                  <p className="text-center text-sm text-gray-500">
                    By submitting, you agree to our privacy policy. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
