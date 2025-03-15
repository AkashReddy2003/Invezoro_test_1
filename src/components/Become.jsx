import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import ins from "../assets/Instructor.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Become = () => {
  return (
    <section className="py-10 bg-amber-500" id="partners" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-9/12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:w-6/12 be-vietnam-pro-bold">
            Join Us & Spread Experiences
          </h2>
         
          
            <p className="text-xl text-white mt-5 lg:w-6/12 be-vietnam-pro-regular">
            Join our community and become a part of a vibrant network where experiences are shared, celebrated, and amplified.

            </p>
            <button className="p-5 bg-white rounded-lg shadow-sm mt-5 ">
            <h3 className="text-lg font-bold text-amber-500 text-left be-vietnam-pro-semibold">Become an Instructor <ArrowForwardIcon/></h3>
           
            
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          
        </motion.div>
{window.screen.width>700?<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16  gap-8 justify-end sm:invisible md:invisible lg:visible xl:visible xs:invisible"
          
        >
          <img src={ins}  className=''/>
        </motion.div>:""}
        
      </div>
    </section>
  );
};

export default Become;