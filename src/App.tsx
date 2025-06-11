import React, { useContext, useEffect, useState } from 'react';
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
import Cert from './components/Cert';
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
          <Route path="/cert/:id" element={<Cert/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

function ref(database: any) {
  throw new Error('Function not implemented.');
}
