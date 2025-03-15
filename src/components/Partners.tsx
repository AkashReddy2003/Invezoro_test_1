import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const Partners = () => {
  return (
    <section className="py-24 bg-gray-50" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Top Companies Are Hiring Invezoro Graduates!
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            
            <p className="text-xl text-gray-600">
            30+ Companies Partnered with Us (And Counting!)

            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-black">1000+</h3>
            <p className="mt-2 text-gray-600">Successful Graduates in Leading Tech Companies
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-black">Up to ₹12L</h3>
            <p className="mt-2 text-gray-600">Annual Packages (for top performers)
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-black">80%+ 
            </h3>
            <p className="mt-2 text-gray-600">Success Rate in Job & Internship Placements</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;