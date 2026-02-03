import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Users, Stethoscope } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

export function AboutDoctor() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200/30 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200/30 rounded-full" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/gallery-637470084.jpg"
                  alt="Dr. Vinita Khemani with patient"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5">
                <p className="font-heading font-bold text-4xl text-pink-500">
                  16+
                </p>
                <p className="text-gray-500">Years of</p>
                <p className="text-gray-500">Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge className="bg-pink-100 text-pink-500 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
              About Doctor
            </Badge>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Dr. Vinita{' '}
              <span className="text-pink-500">Khemani</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Combining Medical Expertise with Compassionate Care to Support You
              Through Every Stage of Life
            </p>

            <div className="space-y-4 text-gray-500 mb-8">
              <p>
                Dedicated to providing personalized and comprehensive care, Dr.
                Vinita Khemani understands the unique needs of her patients. Her
                commitment to excellence has earned her the title of the best
                gynecologist in Kolkata.
              </p>
              <p>
                Whether you're seeking routine check-ups, family planning advice,
                or specialized care, Dr. Khemani is here to empower you with
                knowledge and guide you on your journey to optimal health.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8">
              <StatCard
                icon={Award}
                end={16}
                suffix="+"
                label="Years of Experience"
                color="bg-pink-100"
                iconColor="text-pink-500"
                isInView={isStatsInView}
              />
              <StatCard
                icon={Users}
                end={5000}
                suffix="+"
                label="Happy Patients"
                color="bg-blue-100"
                iconColor="text-blue-500"
                isInView={isStatsInView}
              />
              <StatCard
                icon={Stethoscope}
                end={1000}
                suffix="+"
                label="Successful Surgeries"
                color="bg-green-100"
                iconColor="text-green-500"
                isInView={isStatsInView}
              />
            </div>

            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full px-8 py-6 text-base font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group"
            >
              Know More About Doctor
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  end: number;
  suffix: string;
  label: string;
  color: string;
  iconColor: string;
  isInView: boolean;
}

function StatCard({ icon: Icon, end, suffix, label, color, iconColor, isInView }: StatCardProps) {
  const { count, start } = useCountUp({ end, duration: 2000 });

  useEffect(() => {
    if (isInView) {
      start();
    }
  }, [isInView, start]);

  return (
    <div className="text-center p-4 rounded-2xl bg-gray-50">
      <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mx-auto mb-3`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <p className="font-heading font-bold text-2xl text-gray-900">
        {count}{suffix}
      </p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
