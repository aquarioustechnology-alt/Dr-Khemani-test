"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { faqs } from "@/lib/data";

const categories = ["All", "Appointments", "Consultation", "Payments", "Services"];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-medical-50/30 relative overflow-hidden">
      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeInWhenVisible>
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-100 text-medical-700 text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4 inline mr-2" />
              FAQ
            </span>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a103c] mb-4">
              Frequently Asked Questions
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and appointments
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Category Filter */}
        <FadeInWhenVisible delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                    ? "bg-medical-600 text-white shadow-lg shadow-medical-600/20"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <FadeInWhenVisible key={index} delay={0.1 * index}>
                <motion.div
                  layout
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-medical-50 flex items-center justify-center"
                    >
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-medical-600" />
                      ) : (
                        <Plus className="w-4 h-4 text-medical-600" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <FadeInWhenVisible delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-medical-600 text-white rounded-full font-semibold hover:bg-medical-700 transition-colors shadow-lg shadow-medical-600/20"
            >
              Contact Us
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
