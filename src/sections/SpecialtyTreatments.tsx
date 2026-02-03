import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const treatments = [
  {
    title: 'PCOS Treatment and Management',
    description:
      'Comprehensive management of Polycystic Ovary Syndrome with personalized treatment plans.',
  },
  {
    title: 'Endometriosis',
    description:
      'Expert diagnosis and treatment for endometriosis with advanced laparoscopic techniques.',
  },
  {
    title: 'Advanced Laparoscopic Procedures',
    description:
      'Minimally invasive surgical procedures for faster recovery and better outcomes.',
  },
  {
    title: 'Hysterectomy',
    description:
      'Safe and effective hysterectomy procedures with pre and post-operative care.',
  },
  {
    title: 'Hysteroscopy',
    description:
      'Diagnostic and therapeutic hysteroscopy for uterine conditions.',
  },
  {
    title: 'Ovarian Cystectomy',
    description:
      'Expert surgical removal of ovarian cysts while preserving fertility.',
  },
  {
    title: 'Pregnancy Management',
    description:
      'Complete antenatal care from conception to delivery for a healthy pregnancy.',
  },
  {
    title: 'Fertility Management',
    description:
      'Comprehensive fertility evaluation and treatment options for couples.',
  },
  {
    title: 'Family Planning',
    description:
      'Personalized family planning advice and contraception options.',
  },
];

export function SpecialtyTreatments() {
  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-pink-100 text-pink-500 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
            Our Services
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Specialty{' '}
            <span className="text-pink-500">Treatments</span>
          </h2>
          <p className="text-lg text-gray-600">
            Specialized treatments designed to support every stage of a woman's
            health
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Card className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full group border-l-4 border-l-pink-400">
                <div className="flex flex-col h-full">
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4 flex-grow">
                    {treatment.description}
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
