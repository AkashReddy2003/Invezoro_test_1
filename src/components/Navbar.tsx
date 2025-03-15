import React, { useContext, useState } from 'react';
import { Menu, X,BookOpen, Code, Palette, BarChart as ChartBar, Brain, Rocket } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import logo from "../assets/logo.png"
import { courses } from '../pages/CoursesPage';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate=useNavigate();
  const {open,setOpen,user,logout}=useContext(Context);
  const navigation = [
    
    { name: 'Programs', href: '#programs' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '/about' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:justify-space-between sm:justify-space-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} style={{width: 150,}}/>
            </Link>
          </div>
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
          <div className="relative group">
                <button className="text-gray-700 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  
                  <span>Courses</span>
                </button>
                
                <div style={{width:800}} className="absolute left-0  mt-2 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                  <div className="grid grid-cols-2 gap-1">
                    {courses.map((course) =>{
                      return(
                        <a onClick={()=>navigate("/courses",{state:{course:course}})} className="px-4 py-3 hover:bg-gray-50 flex items-start space-x-3 cursor-pointer">
                      <Code className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">{course.title}</p>
                        <p className="text-sm text-gray-500">{course.description.Foundation}</p>
                      </div>
                    </a>
                      )
                    })}
                   
                  </div>
                </div>
              </div>
            {navigation.map((item) => (
              <a
              onClick={()=>item.name=="Programs"||item.name=="Testimonials"?navigate("/"):""}
                key={item.name}
                href={item.href}
                
                className={`${
                  isActive(item.href)
                    ? 'text-amber-500'
                    : 'text-gray-700 hover:text-amber-500'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </a>
            ))}
            {!user.email?
          <button onClick={()=>setOpen(true)} className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors duration-200 absolute right-10">
          Login / Register
        </button>:
        <button onClick={()=>logout()} className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors duration-200 absolute right-10">
        Logout
      </button>  
          
          }
            
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center absolute right-10 top-3 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Courses</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {courses.map((course) =>{
                      return(
                        <a onClick={()=>{navigate("/courses",{state:{course:course}});setIsOpen(false)}} className="px-4 py-3 hover:bg-gray-50 flex items-start space-x-3 cursor-pointer">
                      <Code className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">{course.title}</p>
                        
                      </div>
                    </a>
                      )
                    })}
        </AccordionDetails>
      </Accordion>
            {navigation.map((item) => (
              <a
                onClick={()=>item.name=="Programs"||item.name=="Testimonials"?navigate("/"):""}
                key={item.name}
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                
              >
                {item.name}
                
              </a>
            ))}
            <div className="px-3 py-2">
              {!user.email?
             <button onClick={()=>setOpen(true)} className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-500 transition-colors duration-200">
           Get Started
             </button>:
              <button onClick={()=>logout()} className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-500 transition-colors duration-200">
             Logout
              </button>  
            }
             
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;