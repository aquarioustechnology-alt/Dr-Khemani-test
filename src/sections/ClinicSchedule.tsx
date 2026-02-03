import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Phone, Building2 } from 'lucide-react';

const clinics = [
  {
    name: 'Healing Touch Clinic',
    type: 'Personal Clinic',
    address: '59, Bangur Avenue, Block A, (Near Shyam Mandir), Kolkata - 700055',
    phone: '+91-9903588155',
    timings: [
      'Monday - Tuesday: 11am to 3pm',
      'Tuesday - Friday: 11am to 4pm',
      'Thursday: 12pm to 3pm',
      'Saturday: 11am to 5pm',
    ],
    isPrimary: true,
  },
  {
    name: 'Bhagirathi Neotia Hospital',
    type: 'New Town',
    address: 'New Town, Kolkata',
    phone: '+91-9903588155',
    timings: ['Monday - Tuesday: 11am to 3pm'],
    isPrimary: false,
  },
  {
    name: 'Charnock Hospital',
    type: 'Multi-Specialty',
    address: 'Kolkata',
    phone: '+91-9903588155',
    timings: ['Tuesday - Friday: 11am to 4pm'],
    isPrimary: false,
  },
  {
    name: 'Apollo Clinic',
    type: 'Chinar Park',
    address: 'Chinar Park, Kolkata',
    phone: '+91-9903588155',
    timings: ['Thursday: 12pm to 3pm'],
    isPrimary: false,
  },
  {
    name: 'Spandan Hospital',
    type: 'Multi-Specialty',
    address: 'Kolkata',
    phone: '+91-9903588155',
    timings: ['Saturday: 11am to 5pm'],
    isPrimary: false,
  },
  {
    name: 'ILS Dumdum',
    type: 'Multi-Specialty',
    address: 'Dumdum, Kolkata',
    phone: '+91-9903588155',
    timings: ['By Appointment'],
    isPrimary: false,
  },
];

export function ClinicSchedule() {
  return (
    <section id="clinics" className="py-20 lg:py-28 bg-white">
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
            Visit Us
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Clinic{' '}
            <span className="text-pink-500">Schedule</span>
          </h2>
          <p className="text-lg text-gray-600">
            Visit me at any of these locations for consultation and treatment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Primary Clinic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-xl text-white h-full">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5" />
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  Primary Clinic
                </span>
              </div>
              
              <h3 className="font-heading font-bold text-2xl mb-4">
                Healing Touch Clinic
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-white/90">
                    59, Bangur Avenue, Block A,<br />
                    (Near Shyam Mandir),<br />
                    Kolkata - 700055
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+919903588155" className="text-white/90 hover:text-white">
                    +91-9903588155
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-white/90">
                    <p>Mon-Tue: 11am - 3pm</p>
                    <p>Tue-Fri: 11am - 4pm</p>
                    <p>Thu: 12pm - 3pm</p>
                    <p>Sat: 11am - 5pm</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Other Clinics */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-4">
              {clinics.slice(1).map((clinic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-pink-500" />
                      <span className="text-xs font-medium text-pink-500 bg-pink-100 px-2 py-0.5 rounded-full">
                        {clinic.type}
                      </span>
                    </div>
                    
                    <h4 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                      {clinic.name}
                    </h4>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div className="text-gray-600">
                          {clinic.timings.map((timing, i) => (
                            <p key={i}>{timing}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
