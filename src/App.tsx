import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CoursesPage from './pages/CoursesPage';
import About from './pages/About';
import Become from './components/Become';
import TechGaints from './components/TechGaints';
import MyCoursePage from './pages/MyCoursePage';
import ProfilePage from './pages/ProfilePage';
import CouseList from './components/CouseList';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import cert from './assets/InvvezorCertificate.png';

function HomePage() {
  useEffect(()=>{
    window.scrollTo(0,0);
    document.title="Invezoro | Bridging Knowledge and Innovation";
  })



  return (
    <>
      <Hero />
     <TechGaints/>
      <WhyChooseUs />
      <Courses />
      <Testimonials />
      
      <Partners />
      <CouseList/>
      <HowItWorks />
      <Become/>
      <FAQ />
      <CTA />
    </>
  );
}

function App() {
  const Cert = () => {
  

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-left">Certificate</h1>
          <img src={cert} alt="Certificate" className="w-full h-auto mb-4" />
          <p className="text-gray-700 text-left">Name: P. Mani</p>
          <p className="text-gray-700 text-left">Role: Java Devoloper</p>
          <p className="text-gray-700 text-left">Start Date: 01/05/2025 </p>
          <p className="text-gray-700 text-left">End Date: 31/05/2025</p>
          <p className="text-gray-700 text-left">Issued Date: 02/06/2025</p>
        </div>
      </div>
    );
  };
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/mycourses" element={<MyCoursePage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path='/blogs' element={<BlogList/>} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/certificate_702025100987" element={<Cert/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;