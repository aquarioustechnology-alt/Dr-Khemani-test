import { motion } from 'framer-motion';
import { Stethoscope, Calendar, Phone, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const actions = [
  {
    icon: Stethoscope,
    title: 'Our Specialty Treatments',
    description: 'Comprehensive gynecological and laparoscopic solutions',
    link: '#treatments',
    linkText: 'Explore Treatments',
    color: 'bg-pink-100',
    iconColor: 'text-pink-500',
  },
  {
    icon: Calendar,
    title: 'Book An Appointment',
    description: 'Schedule your visit at your convenience',
    link: '#contact',
    linkText: 'Book Now',
    color: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    icon: Phone,
    title: 'Have an Emergency?',
    description: '+91-9903588155',
    link: 'tel:+919903588155',
    linkText: 'Call Now',
    color: 'bg-green-100',
    iconColor: 'text-green-500',
  },
];

export function QuickActions() {
  return (
    <section className="relative z-10 mt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-xl ${action.color} flex items-center justify-center mb-4`}
                  >
                    <action.icon className={`w-7 h-7 ${action.iconColor}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-500 mb-4 flex-grow">
                    {action.description}
                  </p>
                  <a
                    href={action.link}
                    onClick={(e) => {
                      if (action.link.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(action.link);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition-colors group"
                  >
                    {action.linkText}
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
