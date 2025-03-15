import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, Clock, Award,Lightbulb, Target, Trophy, CheckCircle,Diamond,Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TrackCard from './TrackCard';

const programDetails = {
  foundation: {
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    title: "Foundation Level",
    description: "Build a strong foundation in educational technology",
    features: [
      "Basic digital literacy skills",
      "Introduction to educational software",
      "Classroom technology integration basics",
      "Fundamental online teaching methods"
    ],
    duration: "3 months",
    price: "$499"
  },
  proficient: {
    icon: <Target className="h-8 w-8 text-purple-500" />,
    title: "Proficient Level",
    description: "Advance your educational technology expertise",
    features: [
      "Advanced digital tool implementation",
      "Data-driven instruction techniques",
      "Blended learning strategies",
      "Interactive content creation"
    ],
    duration: "6 months",
    price: "$899"
  },
  mastery: {
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    title: "Mastery Level",
    description: "Become an educational technology leader",
    features: [
      "Educational technology leadership",
      "Curriculum design and development",
      "Advanced analytics and assessment",
      "Technology integration coaching"
    ],
    duration: "12 months",
    price: "$1,499"
  }
};
const courses = [
  {
    title: 'Foundation Track',
    description: 'Master the fundamentals and build a strong base for your tech career',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    skills: ['Programming Basics', 'Web Development', 'Data Structures'],
    duration: '3 months',
    level: 'Beginner'
  },
  {
    title: 'Proficiency Track',
    description: 'Advance your skills with industry-relevant technologies and frameworks',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    skills: ['Advanced Programming', 'System Design', 'Cloud Computing'],
    duration: '4 months',
    level: 'Intermediate'
  },
  {
    title: 'Master Track',
    description: 'Become an expert and lead technical teams with advanced knowledge',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    skills: ['Architecture', 'Team Leadership', 'Enterprise Solutions'],
    duration: '6 months',
    level: 'Advanced'
  }
];


const tracks = [
  {
    title: "Foundation Track",
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    price: "Rs. 4,999/-",
    subtitle: "Build Your Base",
    level: "Beginner",
    features: [
      "Live & Recorded Sessions",
      "1 Real-World Project (Resume-worthy)",
      "Industry-Recognized Certifications",
      "Dedicated Doubt-Clearing Sessions"
    ],
    additionalBenefits: [
      "Career Guidance Webinar: Early insights into tech careers.",
      "Skill Report: Personalized feedback on your progress."
    ],
    icon: Diamond,
    backgroundImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Proficient Track",
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    price: "Rs. 6,999/-",
    subtitle: "Level Up Your Skills",
    level: "Intermediate",
    features: [
      "Live & Recorded Sessions",
      "2 Real-World Projects (Resume-worthy)",
      "Industry-Recognized Certifications",
      "Dedicated Doubt-Clearing Sessions",
      "1:1 Mentorship from Industry Experts",
      "Placement Assistance & Job Readiness Score",
      "Two Years of Alumni Support"
    ],
    additionalBenefits: [
      "Hackathon Access: Participate in real-world coding competitions.",
      "Resume & LinkedIn Review: Build a strong professional profile."
    ],
    icon: Sparkles,
    backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Master Track",
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    price: "Rs. 10,999/-",
    subtitle: "Become a Job-Ready Expert",
    level: "Advanced",
    features: [
      "Live & Recorded Sessions",
      "3 Real-World Projects (Resume-worthy)",
      "Industry-Recognized Certifications",
      "Dedicated Doubt-Clearing Sessions",
      "1:1 Mentorship from Industry Experts",
      "Placement Assistance & Job Readiness Score",
      "Mock Interviews to sharpen your skills",
      "Exclusive Session with Co-Founders",
      "Two Years of Alumni Support"
    ],
    additionalBenefits: [
      "Internship Referrals: Get connected to top companies.",
      "Soft Skills & Communication Training: Learn workplace communication strategies.",
      "Capstone Project: Advanced problem-solving with real-world impact."
    ],
    icon: CheckCircle,
    backgroundImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000"
  }
];

const Courses_copy = () => {
  const navigate=useNavigate();

  const [selectedLevel, setSelectedLevel] = useState('foundation');
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50" >
      
      <div id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" text-center lg:text-left"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Expert-Led Courses
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect learning path for your career goals
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, index) => (
            <TrackCard 
              key={index} 
              {...track} 
              isSelected={selectedTrack === index}
              onClick={() => setSelectedTrack(index)}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Courses_copy;