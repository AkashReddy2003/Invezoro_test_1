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
            <Building2 className="w-6 h-6 text-indigo-600" />
            <p className="text-xl text-gray-600">
              Join our network of 500+ successful placements
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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=48&fit=crop&auto=format`}
                  alt={`Partner ${index + 1}`}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-indigo-600">500+</h3>
            <p className="mt-2 text-gray-600">Successful Placements</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-indigo-600">₹12L</h3>
            <p className="mt-2 text-gray-600">Average Package</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-indigo-600">92%</h3>
            <p className="mt-2 text-gray-600">Placement Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;