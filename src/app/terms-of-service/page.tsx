"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: `By accessing and using the website of Dr. Vinita Khemani (www.drvinitakhemani.com) or the facilities of Healing Touch Clinic, you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, please refrain from using this website or booking a consultation.`
    },
    {
        title: "2. Medical Services & Consultations",
        content: `• Dr. Vinita Khemani provides professional gynecology, obstetrics, and surgical services across her affiliated clinic locations in Kolkata, West Bengal.
• Appointment booking through this website is a request and is strictly subject to the doctor's availability and confirmation by the clinic manager.
• While Dr. Khemani strives to provide the highest standard of care, medical outcomes can vary. Past success rates or patient testimonials do not guarantee identical results for future patients.
• Medical advice provided during in-person consultations is personalized. You should never apply your personal medical advice to others.`
    },
    {
        title: "3. Educational Content & Medical Disclaimer",
        content: `• The content on this website, including blogs, articles, and treatment descriptions, is provided for general educational purposes only.
• This content does **NOT** constitute medical advice, diagnosis, or substitute professional treatment.
• Always consult Dr. Vinita Khemani or a qualified healthcare provider for your specific medical concerns. Do not delay seeking medical attention based on any information found on this platform.`
    },
    {
        title: "4. Appointments, Cancellations and Delays",
        content: `• Scheduled appointments are subject to confirmation.
• Due to the nature of childbirth and gynecological emergencies, Dr. Vinita Khemani may face sudden delays, schedule restructuring, or cancellations. We request your patience and understanding in such unavoidable circumstances.
• If you must cancel your appointment, please notify the clinic at least 24 hours in advance to allow us to accommodate other patients in need.`
    },
    {
        title: "5. Patient Testimonials & Images",
        content: `• Patient testimonials and reviews displayed on this website are authentic individual experiences shared with consent.
• Some imagery used across the site (excluding specific patient photos) may be AI-generated or stock photography intended strictly for illustrative and privacy-preservation purposes.`
    },
    {
        title: "6. Intellectual Property",
        content: `• All layout, design, text, data, and graphics on this website are the intellectual property of Healing Touch Clinic and Dr. Vinita Khemani.
• Unauthorized reproduction, distribution, or modification of any material from this website is strictly prohibited and protected under Indian Copyright Laws.`
    },
    {
        title: "7. User Conduct & Communication",
        content: `• By supplying your contact details (phone number, email), you consent to receive communication pertaining strictly to your healthcare, appointments, and diagnostic reports via WhatsApp, SMS, or Call.
• Abusive, harassing, or threatening behavior towards clinic staff or doctors will result in immediate termination of the doctor-patient relationship and potential legal action.`
    },
    {
        title: "8. Governing Law & Jurisdiction",
        content: `These Terms of Service are governed by and construed in accordance with the laws of India. Any legal disputes arising under these terms or resulting from clinical services shall be exclusively subject to the jurisdiction of the courts located in Kolkata, West Bengal.`
    },
    {
        title: "9. Modifications",
        content: `We reserve the right to modify these Terms of Service at any time to reflect dynamic operational policies and healthcare regulations. Continued use of the website acknowledges acceptance of these updated terms.
        
**Last updated:** February 2026`
    },
    {
        title: "10. Contact Us",
        content: `For questions, grievances, or clarifications regarding these Terms of Service, please contact:

• **Dr. Vinita Khemani** (Healing Touch Clinic)
• **Phone**: +91 99035 88155
• **Email**: drvinitakhemani@gmail.com
• **Address**: 59, Bangur Avenue, Block A, Kolkata - 700055`
    }
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
