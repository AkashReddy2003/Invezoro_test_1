import React from 'react'
import { courses } from '../pages/CoursesPage'

export default function CouseList() {
  return (
     <section id="courselist" className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Featured Courses</h2>
                <p className="mt-4 text-gray-600">Explore our most popular learning paths</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
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
                       

                      
                      </div>
                      <p className="text-md font-light mb-5">{course.description.Foundation}</p>

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
  )
}
