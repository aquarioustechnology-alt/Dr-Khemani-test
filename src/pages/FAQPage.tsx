import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plus, Minus, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
    {
        name: "General",
        faqs: [
            {
                question: "Do I need a referral to book an appointment with Dr. Khemani?",
                answer: "No, you do not need a referral. You can book an appointment directly through our website, by calling our clinic at +91-9903588155, or via WhatsApp. We welcome both new and returning patients."
            },
            {
                question: "What should I bring to my first visit?",
                answer: "Please bring your ID, any previous medical records relevant to your condition, a list of current medications, and your health insurance card if applicable. If you've had any recent tests (blood work, ultrasounds, etc.), please bring those reports as well."
            },
            {
                question: "What are the clinic hours and locations?",
                answer: "Dr. Khemani practices at 6 locations across Kolkata. Timings vary by location, but generally range from 11 AM to 5 PM, Monday through Saturday. Please visit our Contact page for specific timings at each clinic."
            },
            {
                question: "How long is a typical consultation?",
                answer: "Initial consultations typically last 20-30 minutes to allow thorough discussion of your concerns and medical history. Follow-up appointments are usually 10-15 minutes depending on your treatment plan."
            },
            {
                question: "Is parking available at the clinics?",
                answer: "Yes, most of our affiliated hospitals and clinics have parking facilities available. Some may charge a nominal fee. We recommend arriving 10-15 minutes early to account for parking and registration."
            }
        ]
    },
    {
        name: "Appointments & Consultations",
        faqs: [
            {
                question: "Do you offer online/video consultations?",
                answer: "Yes, we offer video consultations for follow-ups and initial discussions where physical examination is not immediately required. Please mention your preference for online consultation when booking, and we'll arrange a secure video call."
            },
            {
                question: "How do I reschedule or cancel my appointment?",
                answer: "You can reschedule or cancel by calling us at +91-9903588155 or messaging on WhatsApp. We request at least 24 hours notice for cancellations so we can offer the slot to another patient in need."
            },
            {
                question: "Can I request a specific hospital location for my appointment?",
                answer: "Absolutely! When booking, please specify your preferred clinic location from our 6 locations across Kolkata. We'll do our best to accommodate your preference based on Dr. Khemani's schedule."
            },
            {
                question: "Do you accept emergency walk-ins?",
                answer: "Yes, we understand medical emergencies can't always be scheduled. For urgent gynecological concerns, please call +91-9903588155 and we'll guide you on the fastest way to receive care."
            }
        ]
    },
    {
        name: "Treatments & Procedures",
        faqs: [
            {
                question: "What conditions does Dr. Khemani treat?",
                answer: "Dr. Khemani specializes in all areas of obstetrics and gynecology including pregnancy care, high-risk pregnancy, PCOS/PCOD, endometriosis, infertility, menstrual disorders, ovarian cysts, uterine fibroids, and laparoscopic surgeries."
            },
            {
                question: "Is laparoscopic surgery painful? What's the recovery time?",
                answer: "Laparoscopic (keyhole) surgery involves minimal incisions, resulting in less pain and faster recovery compared to open surgery. Most patients experience mild discomfort for 2-3 days and can return to normal activities within 1-2 weeks, depending on the procedure."
            },
            {
                question: "Do you provide fertility treatments?",
                answer: "Yes, Dr. Khemani offers fertility evaluation, ovulation induction, and management of conditions affecting fertility. For advanced treatments like IVF, she works with specialized fertility centers and provides coordinated care."
            },
            {
                question: "What pregnancy services are offered?",
                answer: "We provide complete pregnancy care including prenatal check-ups, ultrasound monitoring, high-risk pregnancy management, normal delivery, cesarean sections, and postpartum care. We're equipped to handle both routine and complicated pregnancies."
            }
        ]
    },
    {
        name: "Insurance & Payments",
        faqs: [
            {
                question: "Do you accept health insurance?",
                answer: "Consultation fees are typically paid directly, but surgical procedures at our affiliated hospitals may be covered by your health insurance. We recommend checking with your insurance provider and the hospital billing department for coverage details."
            },
            {
                question: "What payment methods are accepted?",
                answer: "We accept cash, credit/debit cards, UPI payments (Google Pay, PhonePe, Paytm), and net banking at all our clinic locations."
            },
            {
                question: "Can I get an estimate for surgical procedures?",
                answer: "Yes, after your consultation and once a treatment plan is decided, we provide detailed cost estimates for any surgical procedures. This includes hospital charges, surgeon fees, anesthesia, and other associated costs."
            }
        ]
    }
];

export function FAQPage() {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
        "General-0": true // Open first item by default
    });

    const toggleItem = (categoryIndex: number, faqIndex: number) => {
        const key = `${faqCategories[categoryIndex].name}-${faqIndex}`;
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const isOpen = (categoryIndex: number, faqIndex: number) => {
        const key = `${faqCategories[categoryIndex].name}-${faqIndex}`;
        return openItems[key] || false;
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100 px-4 py-2 text-sm font-medium mb-6">
                            Help Center
                        </Badge>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Frequently Asked{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Questions</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Find answers to common questions about our services, appointments, and treatments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {faqCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                                    <HelpCircle className="w-5 h-5 text-pink-500" />
                                </div>
                                <h2 className="font-heading text-2xl font-bold text-gray-900">{category.name}</h2>
                            </div>

                            <div className="space-y-4">
                                {category.faqs.map((faq, faqIndex) => (
                                    <motion.div
                                        key={faqIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: faqIndex * 0.05 }}
                                        className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-pink-200 transition-colors"
                                    >
                                        <button
                                            onClick={() => toggleItem(categoryIndex, faqIndex)}
                                            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-heading font-semibold text-lg text-gray-900 pr-8">
                                                {faq.question}
                                            </span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen(categoryIndex, faqIndex) ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {isOpen(categoryIndex, faqIndex) ? (
                                                    <Minus className="w-4 h-4" />
                                                ) : (
                                                    <Plus className="w-4 h-4" />
                                                )}
                                            </div>
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen(categoryIndex, faqIndex) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 lg:p-16"
                    >
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <MessageSquare className="w-12 h-12 text-pink-400 mb-6" />
                                <h2 className="font-heading text-3xl font-bold text-white mb-4">
                                    Still Have Questions?
                                </h2>
                                <p className="text-gray-300 mb-8">
                                    Can't find the answer you're looking for? Our team is here to help. Reach out to us directly.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/contact">
                                        <Button className="bg-pink-500 text-white rounded-full px-8 py-5 font-semibold hover:bg-pink-600 transition-all">
                                            Contact Us
                                        </Button>
                                    </Link>
                                    <a href="tel:+919903588155">
                                        <Button variant="outline" className="rounded-full px-8 py-5 border-2 border-white/30 text-white hover:bg-white/10">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Call Now
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden md:flex justify-center">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                                    <HelpCircle className="w-24 h-24 text-pink-400/50" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Book Appointment CTA */}
            <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">
                            Ready to Schedule Your Visit?
                        </h2>
                        <p className="text-white/90 mb-8">
                            Book your appointment with Dr. Vinita Khemani today.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-white text-pink-600 rounded-full px-10 py-6 text-lg font-semibold hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                                Book Your Appointment
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
