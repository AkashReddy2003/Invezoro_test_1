import React, { useContext, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import logo from "../assets/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate=useNavigate();
  const {open,setOpen,user,logout}=useContext(Context);
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '#programs' },
    { name: 'Courses', href: '/courses' },
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
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} style={{width: 150,}}/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
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
          <button onClick={()=>setOpen(true)} className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors duration-200">
          Get Started
        </button>:
        <button onClick={()=>logout()} className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors duration-200">
        Logout
      </button>  
          
          }
            
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
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