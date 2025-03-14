import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const Courses = () => {
  const navigate=useNavigate();
  return (
    <section className="py-24 bg-gray-50" >
      <div id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Expert-Led Courses
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect learning path for your career goals
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-gray-600">{course.description}</p>
                
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {course.level}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">Key Skills:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {course.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button onClick={()=>navigate("/courses")} className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;