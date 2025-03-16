import React, { useEffect } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { courses } from '../pages/CoursesPage';
import { Icon } from '@mui/material';



const CourseCard = ({course}) => {
  useEffect(()=>{
    console.log(course)
  })
  let cours=courses.find(c => c.title == course.course);
  console.log(cours)
  return (
    
    <>
    {cours?
    <div className={`relative rounded-2xl p-8  bg-white  shadow-2xl rounded-xl m-10`}>
    <img 
              src={cours?.image} 
              alt={cours?.title}
              className="w-full  object-cover"
            />
    {/* Header */}
    <div className="flex items-center mb-5 mt-10">
      
    
      <div className={`p-3 rounded-xl bg-white/5
      `}>
        
        <Icon className={`w-8 h-8 transition-colors duration-500 text-black group-hover:text-black
        `} />
      </div>
      <div className="ml-0">
        <h3 className="text-2xl font-bold text-black">{cours?.title}</h3>
        <p className="text-black">{cours?.description.Foundation}</p>
        
      </div>
      
    </div>
    
    
    {/* Level Badge */}
    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-500 mb-8`}>
     
    </span>

    

    
    
  </div>
    :""}
    
    </>
  );
};

export default CourseCard;