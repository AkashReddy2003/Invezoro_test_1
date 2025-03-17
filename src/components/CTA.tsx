import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ment from "../assets/mentors.gif"
import { Context } from '../context/Context';
const CTA = () => {
  const navigate=useNavigate();
  const {isModalOpen,setIsModalOpen}=useContext(Context)
  return (
    <section className="py-24 flex justify-center items-center " id="cta">
      <div className="max-w-7xl mx-auto px-4 bg-indigo-800 shadow-lg rounded-lg sm:px-4 lg:px-8 lg:flex lg:flex-row ml-10 mr-10 lg:ml-0 lg:mr-0">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col ml-5 lg:ml-10"
        >
          <div className="text-white lg:w-6/12">
            <h1 className='be-vietnam-pro-bold text-3xl mt-10'>Happy to help you!</h1>
            <p className='be-vietnam-pro-regular text-xl mt-5'>Need more details? Our expert academic counsellors will be happy to patiently explain everything that you want to know.</p>
            <button onClick={()=>setIsModalOpen(!isModalOpen)} className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center gap-2 mb-10 mt-5"> Speak to mentor</button>
          </div>
          
          
        </motion.div>
        {window.screen.width>700?
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-12 flex flex-col items-center gap-8"
    >
      <img src={ment} />
    </motion.div>:""  
      
      }
        
      </div>
    </section>
  );
};

export default CTA;