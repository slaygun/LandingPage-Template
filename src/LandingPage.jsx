import React from 'react';
import Navbar from './sections/navbar';
import HeroSection from './sections/HeroSection';
import Features from './sections/Features';
import CTA from './sections/CTA';
import FAQSection from './sections/Faq';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <CTA/>
      <FAQSection/>
    </div>
  )
} 

export default LandingPage