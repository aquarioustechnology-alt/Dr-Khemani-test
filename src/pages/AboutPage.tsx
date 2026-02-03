import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    Award,
    GraduationCap,
    Heart,
    Users,
    Stethoscope,
    Building2,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';

const qualifications = [
    "MBBS - Calcutta Medical College",
    "MS (Obstetrics & Gynecology)",
    "Fellowship in Laparoscopic Surgery",
    "Advanced Training in High-Risk Pregnancy",
];

const affiliations = [
    { name: "Bhagirathi Neotia Hospital", location: "New Town" },
    { name: "Healing Touch Clinic", location: "Bangur Avenue" },
    { name: "Charnock Hospital", location: "Kolkata" },
    { name: "Apollo Clinic", location: "Chinar Park" },
    { name: "Spandan Hospital", location: "Kolkata" },
    { name: "ILS Hospital", location: "Dum Dum" },
];

const philosophyPoints = [
    "Patient-first approach with personalized treatment plans",
    "Clear communication and education about your health",
    "Compassionate care that respects your comfort and dignity",
    "Evidence-based medicine combined with holistic wellness",
    "Accessible healthcare for women across all income groups",
];

export function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-200/40 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-200/40 rounded-full blur-2xl" />
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                    <img
                                        src="/images/about-doctor.jpg"
                                        alt="Dr. Vinita Khemani - Best Gynecologist in Kolkata"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                {/* Experience Badge */}
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                    <p className="font-heading font-bold text-4xl text-pink-500">16+</p>
                                    <p className="text-gray-600 text-sm">Years of</p>
                                    <p className="text-gray-600 text-sm">Excellence</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="order-1 lg:order-2"
                        >
                            <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
                                About Dr. Khemani
                            </Badge>

                            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Meet Dr. Vinita{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">Khemani</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Combining Medical Expertise with Compassionate Care to Support You Through Every Stage of Life
                            </p>

                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Dedicated to providing personalized and comprehensive care, Dr. Vinita Khemani understands the unique needs of her patients. Her commitment to excellence has earned her recognition as one of the best gynecologists in Kolkata. Whether you're seeking routine check-ups, family planning advice, or specialized care, Dr. Khemani is here to empower you with knowledge and guide you on your journey to optimal health.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <Button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full px-8 py-6 text-base font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group">
                                        Book Appointment
                                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link to="/treatments">
                                    <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300">
                                        View Treatments
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Award, value: "16+", label: "Years Experience", color: "pink" },
                            { icon: Users, value: "5000+", label: "Happy Patients", color: "blue" },
                            { icon: Stethoscope, value: "1000+", label: "Successful Surgeries", color: "green" },
                            { icon: Building2, value: "6", label: "Hospital Affiliations", color: "purple" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-${stat.color}-100 flex items-center justify-center mx-auto mb-4`}>
                                    <stat.icon className={`w-7 h-7 text-${stat.color}-500`} />
                                </div>
                                <p className="font-heading font-bold text-3xl text-gray-900 mb-1">{stat.value}</p>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100 px-4 py-2 text-sm font-medium mb-6">
                                Philosophy of Care
                            </Badge>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Compassionate Care, <span className="text-pink-500">Trusted Results</span>
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Dr. Khemani believes that every woman deserves access to quality healthcare delivered with empathy and respect. Her approach combines the latest medical advancements with a deep understanding of her patients' emotional and physical needs.
                            </p>
                            <div className="space-y-4">
                                {philosophyPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-pink-500" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-gray-900">Qualifications</h3>
                            </div>
                            <div className="space-y-4 mb-8">
                                {qualifications.map((qual, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                        <div className="w-2 h-2 rounded-full bg-pink-500" />
                                        <span className="text-gray-700">{qual}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-gray-900">Hospital Affiliations</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {affiliations.map((hospital, index) => (
                                    <div key={index} className="p-3 bg-gray-50 rounded-xl">
                                        <p className="font-medium text-gray-900 text-sm">{hospital.name}</p>
                                        <p className="text-xs text-gray-500">{hospital.location}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heart className="w-16 h-16 text-white/80 mx-auto mb-6" />
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                            Ready to Take the First Step?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Experience the difference that compassionate, expert care can make in your health journey. Schedule your consultation today.
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
