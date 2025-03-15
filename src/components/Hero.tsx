import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TechGaints from '../components/TechGaints'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import hero from "../assets/hero.png"
import tdots from "../assets/tdots.png"
const Hero = () => {
  return (
    <div className="relative   max-w-full" style={{backgroundColor:"#FFF2E1", borderBottomLeftRadius:window.screen.width>700?200:0,borderBottomRightRadius: window.screen.width>700?200:0,height:"87vh"}} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 pt-20 pb-16 text-center lg:pt-32">
        <div className='flex flex-row   relative w-full'>
          <div className='lg:w-6/12 relative'>
          <img src={tdots}/>
          <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-5xl flex flex-col  justify-center"
        >
          <span className="p-1 px-0 be-vietnam-pro-semibold" style={{color:"#FFA637 ",width:"auto",}}><ElectricBoltIcon style={{backgroundColor:"#FFF2E1",color:"black",padding:10,fontSize:34,height:62,width:62,borderRadius:10}}/>  Invest <span className='text-black'>in Knowledge</span></span>
          <span className=" be-vietnam-pro-medium" style={{fontSize:38}}>Secure Your Future</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
        >
          Transform your career with expert-designed courses and join thousands of successful Invezoro graduates.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex justify-center items:center  gap-x-6"
          
        >
          <a
            href="/courses"
            style={{backgroundColor:"#FFA637 "}}
            className="be-vietnam-pro-medium rounded-md  px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 flex items-center gap-2"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/courses"
            style={{backgroundColor:"white "}}
            className="be-vietnam-pro-medium rounded-md  px-8 py-4 text-lg font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 flex items-center gap-2"
          >
            View Pricing
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
          </div>
          {window.screen.width>700?<div className='lg:w-6/12 absolute ' style={{right:-100,bottom:-140}}>
            <img src={hero} style={{height:"80vh"}}/>
          </div>:""}
          
       


        </div>
        
        
      </div>
    </div>
  );
};

export default Hero;