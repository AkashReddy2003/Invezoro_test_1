import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Briefcase, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Community-Driven Learning & Social Impact',
    description: 'Join a vibrant student and alumni network with hackathons, expert meetups, and scholarships to make education accessible to all.'
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Learn & Earn',
    description: 'Outcome-Oriented Programs – Gain job-ready skills, work on real-world projects, and earn through freelance gigs and startup collaborations.'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Personalized Learning with AI & Mentorship',
    description: 'Experience AI-driven learning paths, interactive gamification, and expert mentorship for an engaging, customized learning journey.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Flexible Learning',
    description: 'Study anytime, anywhere, at your own pace with our flexible learning platform.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Job-Ready Outcomes & Placement Assistance',
    description: 'Get certifications, job readiness scores, mock interviews, and direct placement support to land your dream job.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Top-Tier Mentorship & Personalized Guidance',
    description: 'Learn from industry experts with 1:1 mentorship and small group sessions for tailored career support.'
  }
];
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" text-center lg:text-left">
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

        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex flex-col  p-10 bg-white rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex  h-12 w-12  text-black mb-6 absolute top-10 right-10">
                
                <h1 className='be-vietnam-pro-bold text-5xl'>{"0"+(index+1)}</h1>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left " style={{marginTop:60}}>{feature.title}</h3>
              <p className="text-gray-600 text-left" style={{marginBottom:60}}>{feature.description}</p>
              <button className='bg-white rounded-md shadow-lg hover:shadow-xl h-10 w-10 absolute bottom-10 right-10 flex items-center justify-center'>
                <ArrowOutwardIcon className='h-10 cursor-pointer text-amber-500'/>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;