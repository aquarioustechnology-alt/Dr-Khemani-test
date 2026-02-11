"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";

const sections = [
    {
        title: "Acceptance of Terms",
        content: `By accessing and using the website of Dr. Vinita Khemani (www.drvinitakhemani.com), you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, you should not use this website.`
    },
    {
        title: "Medical Services",
        content: `• Dr. Vinita Khemani provides gynecology and obstetrics services at her affiliated clinic locations in Kolkata, West Bengal, India.
• Appointment booking through this website is a request and is subject to availability and confirmation.
• All medical services are provided in accordance with Indian medical standards and regulations.
• Medical advice given during consultations is personalized and should not be generalized or shared as medical guidance for others.`
    },
    {
        title: "Website Content & Medical Disclaimer",
        content: `• The content on this website, including articles, blog posts, and service descriptions, is for general informational purposes only.
• This content does NOT constitute medical advice, diagnosis, or treatment recommendations.
• Always consult a qualified healthcare provider for medical concerns. Do not delay or avoid seeking medical attention based on information found on this website.
• While we strive to keep information accurate and up-to-date, we make no guarantees about the completeness, accuracy, or reliability of the content.`
    },
    {
        title: "Appointment Booking",
        content: `• Appointments booked through this website are subject to confirmation by our clinic staff.
• We reserve the right to reschedule or cancel appointments due to emergencies or other unforeseen circumstances.
• Patients are expected to arrive on time for their appointments. Late arrivals may result in rescheduling.
• Cancellations should be made at least 24 hours in advance whenever possible.`
    },
    {
        title: "Patient Testimonials",
        content: `• Patient testimonials and success stories shared on this website are individual experiences and do not guarantee similar outcomes for all patients.
• Medical results vary depending on individual health conditions, compliance with treatment plans, and other factors.
• All testimonials are shared with patient consent and may be edited for clarity and brevity.`
    },
    {
        title: "Intellectual Property",
        content: `• All content on this website, including text, images, graphics, logos, and design elements, is the intellectual property of Dr. Vinita Khemani or its respective owners.
• You may not reproduce, distribute, modify, or use any content from this website without prior written consent.
• The Dr. Vinita Khemani logo, brand name, and all associated visual identity elements are proprietary.`
    },
    {
        title: "Communication",
        content: `• By providing your contact information through our forms, you consent to receiving appointment-related communications via phone, SMS, email, or WhatsApp.
• We will not send unsolicited marketing communications without your explicit consent.
• You may opt out of non-essential communications at any time by contacting our clinic.`
    },
    {
        title: "Limitation of Liability",
        content: `• Dr. Vinita Khemani and the website administrators shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.
• We do not guarantee uninterrupted or error-free operation of the website.
• External links on this website are provided for convenience. We are not responsible for the content or privacy practices of third-party websites.`
    },
    {
        title: "Governing Law",
        content: `These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.`
    },
    {
        title: "Modifications",
        content: `We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the website after any changes constitutes acceptance of the updated terms.

**Last updated:** February 2026`
    },
    {
        title: "Contact",
        content: `For questions regarding these Terms of Service, please contact:

• **Dr. Vinita Khemani**
• **Phone**: +91 99035 88155
• **Email**: drvinitakhemani@gmail.com`
    },
];

export default function TermsOfServicePage() {
    return (
        <main className="relative">
            <Navigation />

            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden py-16 px-6 md:px-12 lg:px-16 text-center" style={{ background: 'linear-gradient(135deg, #fadce9 0%, #fff 100%)' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Please read these terms carefully before using our website and services.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="mx-auto max-w-3xl px-6">
                    {sections.map((section, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-[#f5e6ef]">{section.title}</h2>
                            <div className="text-gray-600 leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
