import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Target,
  Rocket,
  CheckCircle,
  ChevronRight,
  Building2,
  Users2,
  Calendar,
  BookOpen,
  GraduationCap,
  Globe2,
  Brain,
  BarChart3,
  Award,
  Laptop,
  Clock,
  MessageCircle,
  Briefcase,
  Heart,
  School,
  Lightbulb,
  Building,
  BookOpenCheck,
  Linkedin, 

  Facebook, Instagram, Twitter, Mail, Phone,
  Send,  TrendingUp,
   HandshakeIcon, Newspaper,
  GraduationCapIcon, Trophy
} from 'lucide-react';
import { Context } from '../context/Context';
import { courses } from './CoursesPage';
import susreel from "../assets/leaders/susreel.jpg"
import nrus from "../assets/leaders/nrusimha.jpg"
import akash from "../assets/leaders/akash.jpg"
const stats = [
  { icon: Users, label: 'Students Impacted', value: '10,000+' },
  { icon: Award, label: 'Certifications Awarded', value: '5,000+' },
  { icon: MessageCircle, label: 'Mock Interviews', value: '15,000+' },
  { icon: Building2, label: 'Partner Universities', value: '50+' },
  { icon: Globe2, label: 'Freelance Gigs', value: '2,000+' },
];

const leaders = [
  {
    name: 'Susreel Reddy Somavarapu',
    role: 'CEO & Founder',
    image: susreel,
    quote: "Education is not just about acquiring knowledge; it’s about unlocking real value. At Invezoro, we are redefining learning by ensuring that every student gets more than just a certificate they get skills that truly matter. We are here to bridge the gap between education and employability, helping students gain real-world expertise that translates into career success. Invezoro is not just an EdTech platform; it’s a revolution in value-driven learning.",
  },
  {
    name: 'Nrusimha Naidu Cheekiri',
    role: 'COO & Founder',
    image: nrus,
    quote: 'Invezoro was born out of a deep understanding of what today’s learners need—education that directly impacts their future. We’ve designed our platform to eliminate the fluff and focus only on practical, high-impact learning. Every course is structured to give students industry-relevant experience, ensuring they don’t just learn but thrive in the real world. Our goal is simple: to make education an investment that always yields tangible returns.',
  },
  {
    name: 'Akash Reddy Akepati',
    role: 'CTO & CPO',
    image: akash,
    quote: 'The future of education is experiential, and technology is the driving force behind it. At Invezoro, we leverage cutting-edge tools, AI-driven learning, and immersive experiences to deliver courses that truly prepare students for industry demands. Our tech-first approach ensures that learning is not just effective but also engaging and personalized. We are committed to building an ecosystem where students gain skills that are recognized, respected, and rewarded in the job market.',
  },
];

const testimonials = [
  {
    name: 'David Thompson',
    company: 'International School of Excellence',
    quote: 'Invezoro has revolutionized how we deliver online education to our students!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Lisa Chang',
    company: 'EdTech Academy',
    quote: 'The learning analytics and personalized pathways have significantly improved student engagement.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'James Wilson',
    company: 'Global Learning Institute',
    quote: 'Their adaptive learning platform has helped our students achieve remarkable progress.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  },
];

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Access a wide range of subjects aligned with international standards.',
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: "AI-powered system that adjusts to each student's learning pace and style.",
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Detailed analytics and insights into learning performance.',
  },
  {
    icon: Globe2,
    title: 'Global Community',
    description: 'Connect with learners and educators worldwide.',
  },
];



const programs = [
  {
    title: 'For Undergraduates',
    description: 'Tech & Non-Tech programs designed for job readiness and skill development',
    icon: BookOpen,
    outcomes: ['Job readiness', 'Certifications', 'Freelance gigs']
  },
  {
    title: 'For School Students',
    description: '10th-12th grade programs focused on early career guidance and skill building',
    icon: GraduationCap,
    outcomes: ['Skill development', 'Career guidance', 'Foundation building']
  },
  {
    title: 'For Graduates & Professionals',
    description: 'Advanced programs for career advancement and specialization',
    icon: Briefcase,
    outcomes: ['Master in-demand skills', 'Career advancement', 'Industry expertise']
  }
];

const CompanyStats = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
    <Icon className="w-8 h-8 text-indigo-800" />
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const usps = [
  {
    title: 'Top-Tier Mentorship',
    description: 'Learn from industry professionals from top universities and companies with 1:1 mentorship.',
    icon: Users
  },
  {
    title: 'Outcome-Oriented Programs',
    description: 'Focus on job readiness, freelance opportunities, and real-world projects.',
    icon: Target
  },
  {
    title: 'Social Impact',
    description: 'Free and subsidized programs for underprivileged students to ensure education for all.',
    icon: Heart
  }
];

const partnerTypes = [
  {
    title: 'For Universities/Colleges',
    description: 'Partner with us to integrate skill development programs into your curriculum.',
    icon: School,
    benefits: [
      'Customized curriculum integration',
      'Industry-aligned programs',
      'Student placement support'
    ]
  },
  {
    title: 'For Mentors',
    description: 'Join our network of industry experts and guide the next generation.',
    icon: Lightbulb,
    benefits: [
      'Flexible mentoring schedule',
      'Impact student careers',
      'Professional development'
    ]
  },
  {
    title: 'For Companies',
    description: 'Collaborate with us to provide real-world projects and freelance opportunities.',
    icon: Building,
    benefits: [
      'Access talent pool',
      'Custom training programs',
      'CSR initiatives'
    ]
  }
];

const impactMetrics = [
  { label: 'Job Placement Rate', value: '92%' },
  { label: 'Student Satisfaction', value: '96%' },
  { label: 'Freelance Gigs Completed', value: '5000+' }
];

const blogCategories = [
  {
    title: 'Career Guidance',
    icon: BookOpenCheck,
    articles: [
      'How to Ace Your Mock Interviews',
      'Building a Strong Professional Portfolio',
      'Networking Tips for Students'
    ]
  },
  {
    title: 'Industry Trends',
    icon: TrendingUp,
    articles: [
      'In-demand Skills for 2024',
      'Future of Work Trends',
      'Emerging Tech Careers'
    ]
  },
  {
    title: 'Success Stories',
    icon: Trophy,
    articles: [
      'From Intern to Tech Lead',
      'Breaking into Freelancing',
      'Career Transition Success'
    ]
  }
];

function About() {
  const navigate = useNavigate();
  const {isModalOpen,setIsModalOpen}=useContext(Context)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative  pt-10 text-black" style={{backgroundColor:"#FFF2E1"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold  text-center mb-6">
            Empowering Careers Through Innovation, Mentorship, and Opportunity
          </h1>
          <p className="text-xl  text-center max-w-3xl mx-auto mb-12">
            INVEZORO combines top-tier mentorship, outcome-driven programs, and innovative learning methods to create a holistic ecosystem that empowers students to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a onClick={()=>navigate("/")} href="#courselist" className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition-colors">
              Explore Programs
            </a>
            <button onClick={()=>setIsModalOpen(!isModalOpen)} className="bg-transparent border-2 border-white  px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition-colors">
              Join as a Student
            </button>
            <button onClick={()=>setIsModalOpen(!isModalOpen)} className="bg-transparent border-2 border-white  px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition-colors">
              Partner with Us
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2023, INVEZORO was born out of a vision to bridge the gap between education and employability. We focus on underserved communities and regional language support to make quality education accessible to all.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to empower students with top-tier mentorship, outcome-driven programs, and innovative learning methods that prepare them for the workforce.
            </p>
           
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-indigo-800  mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Programs Designed for Your Success</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <program.icon className="w-12 h-12 text-indigo-800  mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <ul className="space-y-2">
                {program.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-indigo-800  mr-2" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a onClick={()=>navigate("/")} href="#programs" className="bg-indigo-800  text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
            Explore All Programs
          </a>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Platform Features</h2>
          <p className="mt-4 text-gray-600">Empowering education through technology</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-indigo-800  mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <p className="mt-4 text-gray-600">Explore our most popular learning paths</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.slice(0,3).map((course) => (
              <div onClick={()=>navigate("/courses",{state:{course:course}})}  key={course.title} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                  
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.companies.Proficient.map((topic) => (
                      <span key={topic} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-8 h-8 text-indigo-800 " />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To revolutionize education by making high-quality learning accessible, engaging, and effective for learners worldwide.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Rocket className="w-8 h-8 text-indigo-800 " />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To empower educators and students with innovative learning solutions that adapt to individual needs and foster lifelong learning.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Makes INVEZORO Different?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <usp.icon className="w-12 h-12 text-indigo-800  mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{usp.title}</h3>
                <p className="text-gray-600">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Transforming Lives, One Student at a Time</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
              alt="Student success story" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 italic mb-4">
              "INVEZORO helped me secure my dream job at a top tech company. The mentorship and mock interviews were invaluable."
            </p>
            <div className="font-semibold text-gray-900">Sarah Johnson</div>
            <div className="text-sm text-gray-500">Software Engineer</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
              alt="Student success story" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 italic mb-4">
              "The freelance marketplace helped me earn while learning. I've completed over 50 projects!"
            </p>
            <div className="font-semibold text-gray-900">Michael Chen</div>
            <div className="text-sm text-gray-500">Freelance Developer</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
              alt="Student success story" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 italic mb-4">
              "The regional language support made learning accessible. I'm now working at a multinational company!"
            </p>
            <div className="font-semibold text-gray-900">Priya Patel</div>
            <div className="text-sm text-gray-500">Data Analyst</div>
          </div>
        </div>
      </div>

      {/* For Educators & Partners Section */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Join Us in Transforming Education</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <type.icon className="w-12 h-12 text-indigo-800 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3 mb-6">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ChevronRight className="w-4 h-4 text-indigo-800 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <button onClick={()=>setIsModalOpen(!isModalOpen)} className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              Partner with Us
            </button>
            <button onClick={()=>setIsModalOpen(!isModalOpen)} className="border-2 border-indigo-800 text-indigo-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3 divide-x divide-gray-200">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="p-8 text-center">
                <div className="text-4xl font-bold text-indigo-800 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog/Resources Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insights, Tips, and Updates</h2>
            <p className="text-xl text-gray-600">Stay ahead with the latest industry insights and success stories</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <category.icon className="w-12 h-12 text-indigo-800 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-4">
                  {category.articles.map((article, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-indigo-800 mt-1 mr-2 flex-shrink-0" />
                      <a href="#" className="text-gray-600 hover:text-indigo-800 transition-colors">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a onClick={()=>navigate("/")} href="#courselist" className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              View All Resources
            </a>
          </div>
        </div>
      </div>

      {/* Partner Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Partners Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                alt="University Partner" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-bold text-gray-900">Dr. James Wilson</div>
                <div className="text-gray-500">Dean, Tech University</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "INVEZORO's curriculum integration has significantly enhanced our students' practical skills and employability."
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                alt="Corporate Partner" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-bold text-gray-900">Sarah Chen</div>
                <div className="text-gray-500">HR Director, TechCorp</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The talent pool from INVEZORO has consistently exceeded our expectations. Their graduates are job-ready from day one."
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                alt="Mentor" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-bold text-gray-900">Lisa Thompson</div>
                <div className="text-gray-500">Senior Developer & Mentor</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Being a mentor at INVEZORO has been incredibly rewarding. The platform makes it easy to connect with and guide aspiring developers."
            </p>
          </div>
        </div>
      </div>

      {/* Learning Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="mt-4 text-gray-600">Your journey to success with Invezoro</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Choose Your Path',
                description: 'Select from our diverse range of courses',
              },
              {
                icon: Laptop,
                title: 'Learn at Your Pace',
                description: 'Access content anytime, anywhere',
              },
              {
                icon: Brain,
                title: 'Practice & Apply',
                description: 'Reinforce learning with interactive exercises',
              },
              {
                icon: Award,
                title: 'Earn Certificates',
                description: 'Get recognized for your achievements',
              },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <step.icon className="w-12 h-12 text-indigo-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Leadership Team</h2>
            <p className="mt-4 text-gray-600">Passionate educators and innovators driving the future of learning</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{leader.name}</h3>
                  <p className="text-indigo-800">{leader.role}</p>
                  <p className="mt-4 text-gray-600 text-sm">{leader.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
    
      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <p className="mt-4 text-gray-600">What educators say about our platform</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Transform Your Educational Journey</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a onClick={()=>navigate("/")} href="#courselist" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-800 bg-white hover:bg-gray-50 transition-colors">
              Start Learning
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <button onClick={()=>setIsModalOpen(!isModalOpen)} className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 transition-colors">
              For Educators
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;