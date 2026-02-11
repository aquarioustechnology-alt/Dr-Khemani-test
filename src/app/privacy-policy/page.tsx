"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";

const sections = [
    {
        title: "Information We Collect",
        content: `When you use our website or book an appointment, we may collect the following information:
        
• **Personal Information**: Name, email address, phone number, age, and gender when you fill out our contact or appointment booking forms.
• **Medical Information**: Health-related queries or descriptions you share through our forms for consultation purposes.
• **Technical Data**: Browser type, IP address, device information, and website usage data collected through cookies and analytics tools.
• **Communication Data**: Records of correspondence if you contact us via email, phone, or WhatsApp.`
    },
    {
        title: "How We Use Your Information",
        content: `We use collected information for the following purposes:
        
• To schedule and manage appointments with Dr. Vinita Khemani.
• To respond to your health inquiries and provide preliminary guidance.
• To send appointment reminders and follow-up communications.
• To improve our website experience and services.
• To comply with legal obligations and medical regulations.
• To communicate important health information and updates (only with your consent).`
    },
    {
        title: "Data Protection & Security",
        content: `We take the security of your personal and medical information seriously:
        
• All form submissions are transmitted securely.
• Medical information shared through our website is treated with the same confidentiality as in-clinic consultations.
• We do not sell, trade, or share your personal information with third parties for marketing purposes.
• Access to your information is restricted to authorized personnel only.
• We implement industry-standard security measures to prevent unauthorized access or disclosure.`
    },
    {
        title: "Cookies & Analytics",
        content: `Our website uses cookies and analytics tools to improve your browsing experience:
        
• **Essential Cookies**: Required for basic website functionality.
• **Analytics Cookies**: Help us understand how visitors interact with our website (e.g., Google Analytics).
• **Marketing Cookies**: Used to deliver relevant information about our services.
        
You can manage cookie preferences through your browser settings. Disabling cookies may affect some website features.`
    },
    {
        title: "Third-Party Services",
        content: `We may use third-party services for specific purposes:
        
• **Google Analytics**: For website traffic analysis and user behavior insights.
• **Google Maps**: For displaying clinic locations.
• **WhatsApp**: For direct messaging and appointment booking.
        
These services have their own privacy policies, and we recommend reviewing them separately.`
    },
    {
        title: "Your Rights",
        content: `You have the following rights regarding your personal information:
        
• **Access**: Request a copy of the personal data we hold about you.
• **Correction**: Request correction of inaccurate or incomplete data.
• **Deletion**: Request deletion of your personal data (subject to legal obligations).
• **Withdrawal**: Withdraw consent for marketing communications at any time.
• **Complaint**: Lodge a complaint with the relevant data protection authority.
        
To exercise any of these rights, contact us at the details provided below.`
    },
    {
        title: "Medical Disclaimer",
        content: `The information provided on this website is for general educational purposes only and should not be considered as medical advice. It is not intended to replace a professional consultation with Dr. Vinita Khemani or any qualified healthcare provider. Always seek the advice of your physician regarding any medical condition or treatment. Never disregard professional medical advice based on information found on this website.`
    },
    {
        title: "Changes to This Policy",
        content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any significant changes will be communicated through our website. We encourage you to review this page periodically.
        
**Last updated:** February 2026`
    },
    {
        title: "Contact Information",
        content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:
        
• **Dr. Vinita Khemani**
• **Phone**: +91 99035 88155
• **Email**: drvinitakhemani@gmail.com
• **Address**: Kolkata, West Bengal, India`
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="relative">
            <Navigation />

            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden py-16 px-6 md:px-12 lg:px-16 text-center" style={{ background: 'linear-gradient(135deg, #fadce9 0%, #fff 100%)' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">How we collect, use, and protect your personal information.</p>
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
