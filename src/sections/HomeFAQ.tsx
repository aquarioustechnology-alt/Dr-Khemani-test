import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "Do I need a referral to book an appointment?",
        answer: "No, you do not need a referral. You can book an appointment directly through our website, by calling our clinic at +91-9903588155, or via WhatsApp. We welcome both new and returning patients."
    },
    {
        question: "What conditions does Dr. Khemani treat?",
        answer: "Dr. Khemani specializes in all areas of obstetrics and gynecology including pregnancy care, high-risk pregnancy, PCOS/PCOD, endometriosis, infertility, menstrual disorders, ovarian cysts, uterine fibroids, and laparoscopic surgeries."
    },
    {
        question: "Is laparoscopic surgery painful? What's the recovery time?",
        answer: "Laparoscopic (keyhole) surgery involves minimal incisions, resulting in less pain and faster recovery compared to open surgery. Most patients experience mild discomfort for 2-3 days and can return to normal activities within 1-2 weeks."
    },
    {
        question: "Do you offer online/video consultations?",
        answer: "Yes, we offer video consultations for follow-ups and initial discussions where physical examination is not immediately required. Please mention your preference for online consultation when booking."
    },
    {
        question: "What are the clinic hours and locations?",
        answer: "Dr. Khemani practices at 6 locations across Kolkata including Bhagirathi Neotia Hospital, Healing Touch Clinic, Charnock Hospital, Apollo Clinic, Spandan Hospital, and ILS Dum Dum. Timings vary by location - please visit our Contact page for details."
    }
];

export function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100 px-4 py-2 text-sm font-medium mb-4">
                        Quick Answers
                    </Badge>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-pink-500">Questions</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find quick answers to common questions about our services, appointments, and treatments.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-pink-200 transition-colors"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-heading font-semibold text-gray-900 pr-6">
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === index ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4" />
                                    ) : (
                                        <Plus className="w-4 h-4" />
                                    )}
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <Link to="/faq">
                        <Button variant="outline" className="rounded-full px-8 py-5 border-2 border-gray-200 hover:border-pink-400 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 group">
                            View All FAQs
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
