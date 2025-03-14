import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TechGaints from '../components/TechGaints'
const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
        >
          <span className="block text-indigo-600">Invest in Knowledge,</span>
          <span className="block">Secure Your Future</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
        >
          Transform your career with industry-leading courses designed by experts. 
          Join thousands of successful graduates who've taken their first step towards 
          a brighter future with Invezoro.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <a
            href="#courses"
            className="rounded-md bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 flex items-center gap-2"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
            Trusted by leading companies worldwide
          </p>
         
          <TechGaints/>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;