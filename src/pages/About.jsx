import React from 'react';
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
} from 'lucide-react';

const leaders = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    quote: "At Invezoro, we don't just deliver education—we transform learning experiences. Our mission is to make quality education accessible and engaging for everyone.",
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    quote: 'Technology should enhance learning, not complicate it. We create intuitive educational solutions that empower both educators and students.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chief Education Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    quote: 'Our curriculum is designed to inspire curiosity and foster a love for learning that lasts a lifetime.',
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

const courses = [
  {
    title: 'Mathematics',
    level: 'K-12',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400',
    topics: ['Algebra', 'Geometry', 'Calculus'],
  },
  {
    title: 'Science',
    level: 'K-12',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400',
    topics: ['Physics', 'Chemistry', 'Biology'],
  },
  {
    title: 'Computer Science',
    level: 'High School',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400',
    topics: ['Programming', 'Web Development', 'AI Basics'],
  },
];

const CompanyStats = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
    <Icon className="w-8 h-8 text-blue-600" />
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
            alt="Education"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to Invezoro
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Transforming Education Through Innovation
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="px-8 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-blue-800 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12" style={{marginTop: 80,}}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <CompanyStats icon={Calendar} label="Founded in" value="2020" />
          <CompanyStats icon={Building2} label="Global Presence" value="25+ Countries" />
          <CompanyStats icon={Users2} label="Students Impacted" value="1M+" />
          <CompanyStats icon={Award} label="Success Rate" value="95%" />
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
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
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
            {courses.map((course) => (
              <div key={course.title} className="bg-white rounded-xl shadow-sm overflow-hidden group">
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
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
              <Target className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To revolutionize education by making high-quality learning accessible, engaging, and effective for learners worldwide.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Rocket className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To empower educators and students with innovative learning solutions that adapt to individual needs and foster lifelong learning.
            </p>
          </div>
        </div>
      </section>

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
                <step.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{leader.name}</h3>
                  <p className="text-blue-600">{leader.role}</p>
                  <p className="mt-4 text-gray-600 text-sm">{leader.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose Invezoro?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Personalized Learning Paths',
            'Advanced Learning Analytics',
            'Global Education Standards',
            'Interactive Learning Tools',
          ].map((item) => (
            <div key={item} className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

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
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Transform Your Educational Journey</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors">
              Start Learning
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 transition-colors">
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