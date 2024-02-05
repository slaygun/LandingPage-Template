import React from 'react';
import Navbar from './sections/navbar';
import HeroSection from './sections/HeroSection';
import Features from './sections/Features';
import CTA from './sections/CTA';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <CTA/>
    </div>
  )
} 

export default LandingPage