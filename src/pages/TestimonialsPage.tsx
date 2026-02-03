import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, MessageSquare } from 'lucide-react';

const testimonials = [
    {
        name: "Deepa Akansha Tripathy",
        role: "Patient",
        rating: 5,
        content: "Dr. Vinita Khemani is truly the best gynecologist I have ever consulted. She made my entire pregnancy journey stress-free with her expert care and constant support. Highly recommend her to all expecting mothers!",
        image: "/images/patient-1.jpg"
    },
    {
        name: "Jayosree Saha",
        role: "Patient",
        rating: 5,
        content: "I was struggling with PCOS for years before I met Dr. Khemani. Her treatment approach was holistic and she explained everything in detail. Within months, I saw significant improvement. Forever grateful!",
        image: "/images/patient-2.jpg"
    },
    {
        name: "Sharmila Sinha",
        role: "Patient",
        rating: 5,
        content: "After my laparoscopic surgery with Dr. Khemani, recovery was so quick. She's extremely skilled and the best part is she genuinely cares about her patients. A wonderful doctor and human being.",
        image: "/images/patient-3.jpg"
    },
    {
        name: "Shanta Ghatak",
        role: "Patient",
        rating: 5,
        content: "Dr. Khemani handled my high-risk pregnancy with such expertise and compassion. She was available for every concern, any time. My baby and I are healthy today because of her.",
        image: "/images/patient-4.jpg"
    },
    {
        name: "Khushboo Khemka",
        role: "Patient",
        rating: 5,
        content: "I had to undergo a hysterectomy and was very nervous. Dr. Khemani explained the entire procedure, addressed all my fears, and the surgery was a complete success. Excellent doctor!",
        image: "/images/patient-5.jpg"
    },
    {
        name: "Soma Saha",
        role: "Patient",
        rating: 5,
        content: "As someone who avoided gynecologists for years, I can say Dr. Khemani made me feel so comfortable. Her clinic environment is welcoming and the staff is very professional.",
        image: "/images/patient-6.jpg"
    },
    {
        name: "Simon Baranwal",
        role: "Visitor",
        rating: 5,
        content: "Accompanied my wife for her consultations. Dr. Khemani's approach to explaining medical conditions in simple terms and involving family members in the care process is commendable.",
        image: "/images/visitor-1.jpg"
    },
    {
        name: "Priya Sharma",
        role: "Patient",
        rating: 5,
        content: "After years of infertility struggles, Dr. Khemani's treatment finally helped us conceive. She was supportive throughout and never made us feel hopeless. We have our miracle baby now!",
        image: "/images/patient-7.jpg"
    }
];

const stats = [
    { value: "5000+", label: "Happy Patients" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "1000+", label: "Successful Surgeries" },
    { value: "98%", label: "Patient Satisfaction" }
];

export function TestimonialsPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
                            Patient Testimonials
                        </Badge>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Patient{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">Stories</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Hear what our patients have to say about their healthcare journey with Dr. Vinita Khemani.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <p className="font-heading font-bold text-4xl text-pink-500 mb-1">{stat.value}</p>
                                <p className="text-gray-500">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Quote */}
            <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Quote className="w-16 h-16 text-white/30 mx-auto mb-6 rotate-180" />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl text-white font-heading leading-relaxed mb-6"
                    >
                        "Experience the difference that a seasoned and caring professional can make in your healthcare journey. Your health is in good hands."
                    </motion.p>
                    <p className="text-white/80">— Dr. Vinita Khemani</p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Let's Hear In <span className="text-pink-500">Their Own Words</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Real stories from real patients about their experiences with Dr. Khemani's care.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink-100 transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6 italic">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                                        <span className="text-pink-600 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Share Your Story CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 lg:p-16 text-center"
                    >
                        <MessageSquare className="w-16 h-16 text-pink-400 mx-auto mb-6" />
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">
                            Share Your Story
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Have you been treated by Dr. Khemani? Your experience could help other patients make informed decisions about their healthcare.
                        </p>
                        <a
                            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="bg-pink-500 text-white rounded-full px-10 py-6 text-lg font-semibold hover:bg-pink-600 hover:shadow-xl transition-all duration-300 group">
                                Write a Review
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
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
                            Ready to Experience the Same Care?
                        </h2>
                        <p className="text-white/90 mb-8">
                            Join thousands of satisfied patients. Book your consultation today.
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
