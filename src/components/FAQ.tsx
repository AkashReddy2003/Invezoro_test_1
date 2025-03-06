import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What kind of courses do you offer?',
    answer: 'We offer a wide range of tech courses including web development, data science, AI/ML, and cloud computing. Our courses are structured in three tracks: Foundation, Proficiency, and Master tracks.'
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'Course duration varies from 3-6 months depending on the track and specialization you choose. You can learn at your own pace with lifetime access to course materials.'
  },
  {
    question: 'Do you provide job placement support?',
    answer: 'Yes, we provide comprehensive job placement support including resume building, interview preparation, and direct connections with hiring partners.'
  },
  {
    question: 'Are the certifications industry-recognized?',
    answer: 'Yes, our certifications are recognized by leading tech companies and validated by industry experts.'
  },
  {
    question: 'What is the learning format?',
    answer: 'Our courses combine live online classes, recorded sessions, hands-on projects, and 1:1 mentorship for a comprehensive learning experience.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Got Questions? We've Got Answers!
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to commonly asked questions about our courses and platform
          </p>
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-6 bg-white rounded-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;