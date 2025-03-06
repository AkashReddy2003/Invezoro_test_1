import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Choose a Course',
    description: 'Select the right track for your career goals from our expert-curated courses.'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Learn from Experts',
    description: 'Engage in interactive, project-based learning with industry professionals.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Get Certified',
    description: 'Earn industry-recognized credentials that validate your expertise.'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Secure Your Dream Job',
    description: 'Get comprehensive placement support and interview preparation.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Learning Journey with Invezoro
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Follow these simple steps to transform your career
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex flex-col items-center"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white relative z-10">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-center text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;