import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
function HomePage() {
  return (
    <>
      <Hero />
     <TechGaints/>
      <WhyChooseUs />
      <Courses />
      <Testimonials />
      
      <Partners />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;