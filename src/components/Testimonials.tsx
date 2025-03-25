import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import i1 from "../assets/testimonials/1.jpg";
import i2 from "../assets/testimonials/2.jpg";
import i3 from "../assets/testimonials/3.jpg";
import i4 from "../assets/testimonials/4.jpg";

const testimonials = [
  {
      name: 'Harshith',
      role: 'web developer at Google',
      image: i4,
      quote: 'Invezoro transformed my career. The practical approach and industry-focused curriculum helped me excel as a web developer at Google.',
      company: 'Google'
  },
  {
      name: 'Yeshwanth',
      role: 'Marketing Analyst',
      image: i2,
      quote: 'The mentorship and hands-on projects were invaluable. I went from a complete beginner to a confident marketing analyst at Asian Paints.',
      company: 'Asian Paints'
  },
  {
      name: 'Sreenij Reddy Konda',
      role: 'Project Engineer',
      image: i1,
      quote: 'The career support team went above and beyond to help me secure my role as a project engineer at TCS.',
      company: 'TCS(Tata Consultancy Services)'
  },
  {
      name: 'Sri Ram Aasam',
      role: 'Associate Software Engineer at Accenture',
      image: i3,
      quote: 'Invezoro was a game-changer for me! The hands-on learning experience and industry-relevant content paved the way for me to become an associate software engineer at Accenture.',
      company: 'Accenture'
  }

];

const Testimonials = () => {
  return (
    <section  className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" text-center lg:text-left"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Learners, Their Success!
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our graduates who transformed their careers with Invezoro
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </blockquote>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Now working at {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;