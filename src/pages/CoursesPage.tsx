import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Clock, Trophy, CheckCircle2, GraduationCap, Building2, ArrowRight } from 'lucide-react';

const tracks = [
  {
    name: 'Foundation',
    description: 'Perfect for beginners starting their tech journey',
    duration: '3 months',
    price: '$999',
    features: [
      'Fundamentals of programming',
      'Basic web development',
      'Introduction to databases',
      'Version control basics',
    ],
  },
  {
    name: 'Proficient',
    description: 'For those with basic knowledge seeking to advance',
    duration: '4 months',
    price: '$1499',
    features: [
      'Advanced programming concepts',
      'Full-stack development',
      'Cloud computing basics',
      'System design fundamentals',
    ],
  },
  {
    name: 'Master',
    description: 'Advanced learning for experienced professionals',
    duration: '6 months',
    price: '$1999',
    features: [
      'Enterprise architecture',
      'Advanced system design',
      'DevOps and deployment',
      'Team leadership skills',
    ],
  },
];

const courses = [
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    description: 'Master both frontend and backend development with modern technologies',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
    companies: ['Google', 'Microsoft', 'Amazon', 'Meta'],
    avgSalary: '$95,000',
    jobGrowth: '22%',
    whyChoose: [
      'High demand across industries',
      'Versatile skill set',
      'Remote work opportunities',
      'Competitive salary',
    ],
    modules: [
      {
        title: 'Frontend Fundamentals',
        topics: ['HTML/CSS', 'JavaScript', 'React Basics', 'State Management'],
      },
      {
        title: 'Backend Development',
        topics: ['Node.js', 'Express', 'REST APIs', 'Database Design'],
      },
      {
        title: 'Advanced Concepts',
        topics: ['System Design', 'Security', 'Performance', 'Deployment'],
      },
    ],
    mentors: [
      {
        name: 'Sarah Chen',
        role: 'Senior Software Engineer at Google',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        experience: '10+ years',
        expertise: ['Frontend Architecture', 'Performance Optimization'],
      },
      {
        name: 'Michael Rodriguez',
        role: 'Tech Lead at Amazon',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        experience: '8+ years',
        expertise: ['System Design', 'Cloud Architecture'],
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Transform data into actionable insights using advanced analytics and ML',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization', 'Statistics'],
    companies: ['Netflix', 'Tesla', 'IBM', 'Apple'],
    avgSalary: '$105,000',
    jobGrowth: '28%',
    whyChoose: [
      'Growing field with high demand',
      'Work with cutting-edge technology',
      'Solve complex problems',
      'Impact business decisions',
    ],
    modules: [
      {
        title: 'Data Analysis Fundamentals',
        topics: ['Python Programming', 'Statistics', 'Data Cleaning', 'SQL'],
      },
      {
        title: 'Machine Learning',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Deployment'],
      },
      {
        title: 'Advanced Analytics',
        topics: ['Big Data', 'Natural Language Processing', 'Computer Vision', 'Time Series Analysis'],
      },
    ],
    mentors: [
      {
        name: 'Emily Zhang',
        role: 'Data Scientist at Netflix',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        experience: '7+ years',
        expertise: ['Machine Learning', 'NLP'],
      },
      {
        name: 'David Kumar',
        role: 'AI Research Lead at IBM',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        experience: '12+ years',
        expertise: ['Deep Learning', 'Computer Vision'],
      },
    ],
  },
];

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Course Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Courses</h1>
          <p className="mt-4 text-xl text-gray-600">
            Transform your career with industry-leading courses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Track Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Learning Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track) => (
              <motion.div
                key={track.name}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                  selectedTrack.name === track.name
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-900 hover:shadow-lg'
                }`}
                onClick={() => setSelectedTrack(track)}
              >
                <h3 className="text-xl font-semibold">{track.name} Track</h3>
                <p className={`mt-2 ${
                  selectedTrack.name === track.name ? 'text-indigo-100' : 'text-gray-600'
                }`}>
                  {track.description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {track.duration}
                  </div>
                  <div className="font-semibold">{track.price}</div>
                </div>
                <ul className="mt-4 space-y-2">
                  {track.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Course Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Courses</h2>
            {courses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                  selectedCourse.id === course.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-900 hover:shadow-lg'
                }`}
                onClick={() => setSelectedCourse(course)}
              >
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className={`mt-2 ${
                  selectedCourse.id === course.id ? 'text-indigo-100' : 'text-gray-600'
                }`}>
                  {course.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Course Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-64 object-cover rounded-xl mb-8"
              />

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedCourse.title}
              </h2>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Skills You'll Learn</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Market Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 text-indigo-600 mb-2">
                    <Briefcase className="w-5 h-5" />
                    <h4 className="font-semibold">Average Salary</h4>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{selectedCourse.avgSalary}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 text-indigo-600 mb-2">
                    <Trophy className="w-5 h-5" />
                    <h4 className="font-semibold">Job Growth</h4>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{selectedCourse.jobGrowth}</p>
                </div>
              </div>

              {/* Companies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Top Hiring Companies</h3>
                <div className="flex flex-wrap gap-4">
                  {selectedCourse.companies.map((company) => (
                    <div key={company} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                      <Building2 className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">{company}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose This Course?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCourse.whyChoose.map((reason, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modules */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Course Modules</h3>
                <div className="space-y-4">
                  {selectedCourse.modules.map((module, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold mb-3">{module.title}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-indigo-600" />
                            <span className="text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentors */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Learn from Industry Experts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedCourse.mentors.map((mentor, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{mentor.name}</h4>
                          <p className="text-sm text-gray-600">{mentor.role}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-indigo-600" />
                          <span className="text-sm">{mentor.experience} experience</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;