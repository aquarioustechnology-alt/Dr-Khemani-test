import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Baby, Heart, Scissors, Pill, Activity } from 'lucide-react';

const treatmentCategories = [
    {
        id: 'obstetrics',
        title: 'Obstetrics',
        subtitle: 'Complete Pregnancy Care',
        description: 'Comprehensive care from conception to delivery, including high-risk pregnancy management and emergency cesarean sections.',
        icon: Baby,
        color: 'pink',
        treatments: [
            'Pregnancy Management',
            'High-Risk Pregnancy Care',
            'Emergency Caesarean Section',
            'Normal Delivery',
            'Prenatal Counseling',
            'Postpartum Care'
        ]
    },
    {
        id: 'gynecology',
        title: 'Gynecology',
        subtitle: 'Women\'s Health Solutions',
        description: 'Expert diagnosis and treatment for all gynecological conditions, from routine check-ups to complex disorders.',
        icon: Heart,
        color: 'rose',
        treatments: [
            'PCOS Treatment & Management',
            'Endometriosis',
            'Menstrual Disorders',
            'Uterine Fibroids',
            'Ovarian Cysts',
            'Hormonal Imbalance'
        ]
    },
    {
        id: 'laparoscopy',
        title: 'Laparoscopic Surgery',
        subtitle: 'Minimally Invasive Procedures',
        description: 'Advanced laparoscopic techniques for faster recovery, minimal scarring, and reduced hospital stay.',
        icon: Scissors,
        color: 'blue',
        treatments: [
            'Advanced Laparoscopic Procedures',
            'Hysterectomy',
            'Ovarian Cystectomy',
            'Myomectomy',
            'Tubal Ligation',
            'Diagnostic Laparoscopy'
        ]
    },
    {
        id: 'fertility',
        title: 'Fertility',
        subtitle: 'Family Planning & Fertility Care',
        description: 'Compassionate fertility counseling and treatments to help you on your journey to parenthood.',
        icon: Activity,
        color: 'green',
        treatments: [
            'Fertility Management',
            'Infertility Workup',
            'Ovulation Induction',
            'Family Planning',
            'Pre-conception Counseling',
            'Recurrent Pregnancy Loss'
        ]
    }
];

const specialtyTreatments = [
    {
        name: 'Emergency Caesarean Section',
        description: 'Expert emergency C-section procedures ensuring mother and baby safety.',
        link: '/treatments/emergency-caesarean'
    },
    {
        name: 'Hysteroscopy',
        description: 'Minimally invasive procedure to examine and treat uterine conditions.',
        link: '/treatments/hysteroscopy'
    },
    {
        name: 'Advanced Laparoscopic Procedures',
        description: 'State-of-the-art keyhole surgery for gynecological conditions.',
        link: '/treatments/laparoscopy'
    },
    {
        name: 'Hysterectomy',
        description: 'Surgical removal of the uterus with expert precision and care.',
        link: '/treatments/hysterectomy'
    },
    {
        name: 'Ovarian Cystectomy',
        description: 'Safe removal of ovarian cysts while preserving fertility.',
        link: '/treatments/ovarian-cystectomy'
    },
    {
        name: 'PCOS Treatment',
        description: 'Comprehensive management of Polycystic Ovary Syndrome.',
        link: '/treatments/pcos'
    }
];

export function TreatmentsPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-pink-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
                            Our Services
                        </Badge>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Treatments &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Specialized treatments designed to support every stage of a woman's health.
                            From routine care to advanced surgical procedures, Dr. Khemani offers comprehensive solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Treatment Categories Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {treatmentCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300"
                            >
                                <div className="flex items-start gap-5 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-${category.color}-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className={`w-8 h-8 text-${category.color}-500`} />
                                    </div>
                                    <div>
                                        <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">{category.title}</h2>
                                        <p className="text-pink-500 font-medium text-sm">{category.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {category.treatments.map((treatment, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                                            <span className="text-gray-600">{treatment}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link to={`/treatments/${category.id}`}>
                                    <Button variant="outline" className="w-full rounded-full py-5 border-2 border-gray-200 hover:border-pink-400 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 group">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialty Treatments Grid */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100 px-4 py-2 text-sm font-medium mb-6">
                            Specialty Procedures
                        </Badge>
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Advanced <span className="text-pink-500">Surgical Procedures</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Dr. Khemani specializes in advanced surgical techniques with a focus on patient safety and optimal outcomes.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specialtyTreatments.map((treatment, index) => (
                            <motion.div
                                key={treatment.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
                                    <Stethoscope className="w-6 h-6 text-pink-500" />
                                </div>
                                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{treatment.name}</h3>
                                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{treatment.description}</p>
                                <Link to={treatment.link} className="text-pink-500 font-medium text-sm hover:text-pink-600 inline-flex items-center gap-1 group">
                                    Read More
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-10 lg:p-16 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                                Why Choose Dr. Vinita Khemani?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Delivering world-class gynecological and laparoscopic treatments with a personal touch.
                                Rest assured – you're in safe hands.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-8 mb-10">
                                <div>
                                    <p className="font-heading text-4xl font-bold mb-2">16+</p>
                                    <p className="text-white/80">Years Experience</p>
                                </div>
                                <div>
                                    <p className="font-heading text-4xl font-bold mb-2">5000+</p>
                                    <p className="text-white/80">Happy Patients</p>
                                </div>
                                <div>
                                    <p className="font-heading text-4xl font-bold mb-2">6</p>
                                    <p className="text-white/80">Hospital Locations</p>
                                </div>
                            </div>
                            <Link to="/contact">
                                <Button className="bg-white text-pink-600 rounded-full px-10 py-6 text-lg font-semibold hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                                    Book Your Consultation
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
