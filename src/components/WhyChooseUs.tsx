import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Briefcase, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Learn from Industry Experts',
    description: 'Top mentors guide you with real-world knowledge and industry insights.'
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Career-Oriented Learning',
    description: 'Gain job-ready skills that employers actively seek in the market.'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Hands-On Projects & Certifications',
    description: 'Build a strong portfolio with real-world projects and earn recognized certifications.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Flexible Learning',
    description: 'Study anytime, anywhere, at your own pace with our flexible learning platform.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Placement Assistance',
    description: 'Get placed in leading companies with our dedicated placement support.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Why Choose Invezoro?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Your Growth Starts Here – Learn, Upskill, and Get Hired!
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;