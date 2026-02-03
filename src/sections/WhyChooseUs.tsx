import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Shield,
  Award,
  Wallet,
  Clock,
  Heart,
  Phone,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Extensive Experience',
    description:
      "Rest assured. You're in safe hands that have helped thousands of people.",
    color: 'bg-pink-100',
    iconColor: 'text-pink-500',
  },
  {
    icon: Award,
    title: 'Vast Expertise',
    description:
      'Irrespective of your needs, Dr. Vinita has got you covered.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    icon: Wallet,
    title: 'Affordable Consultation',
    description:
      'Dr. Vinita caters to patients across groups regardless of their income.',
    color: 'bg-green-100',
    iconColor: 'text-green-500',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description:
      'Book your appointment at a time and clinic that fits your convenience.',
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Heart,
    title: 'Holistic Care',
    description:
      "Get a wholesome, personalized experience aimed at improving your life.",
    color: 'bg-purple-100',
    iconColor: 'text-purple-500',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description:
      'Always available for emergencies and urgent consultations.',
    color: 'bg-cyan-100',
    iconColor: 'text-cyan-500',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
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
            Why Choose Us
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Dr. Vinita{' '}
            <span className="text-pink-500">Khemani?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Delivering world-class gynecological and laparoscopic treatments
            with a personal touch
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div
                  className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5`}
                >
                  <feature.icon
                    className={`w-7 h-7 ${feature.iconColor}`}
                  />
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
