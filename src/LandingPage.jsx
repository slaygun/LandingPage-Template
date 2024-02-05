import React from 'react';
import Navbar from './sections/navbar';
import HeroSection from './sections/HeroSection';
import Features from './sections/Features';
import CTA from './sections/CTA';
import FAQSection from './sections/Faq';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <CTA/>
      <FAQSection/>
      <Testimonials/>
      <Footer/>
    </div>
  )
} 

export default LandingPage