import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-indigo-600" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileIn View={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Your Learning Journey Today!
          </h2>
          <p className="mt-4 text-xl text-indigo-100">
            Join thousands of successful graduates who transformed their careers with Invezoro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300 flex items-center justify-center gap-2">
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-400 transition-colors duration-300">
              Talk to Our Team
            </button>
          </div>
          
          <p className="text-indigo-100">
            Have questions? Call us at +1 (555) 123-4567
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;