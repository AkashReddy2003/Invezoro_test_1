import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { motion } from 'framer-motion';
import { courses } from '../data/cources';
import CourseCard from '../components/CourseCard';
export default function MyCoursePage() {
    const {user}=useContext(Context);
    const [selectedCourse, setSelectedCourse] = useState({});
    useEffect(()=>{
        console.log(user)
    })
  return (
    <div>
      <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Courses</h2>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {user.email?user.courses.map((course) => (
              <CourseCard course={course} />
            )):""}
          </div>
          </div>
    </div>
  )
}
