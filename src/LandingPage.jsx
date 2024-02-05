import React from 'react';
import Navbar from './sections/navbar';
import HeroSection from './sections/HeroSection';
import Features from './sections/Features';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
    </div>
  )
} 

export default LandingPage