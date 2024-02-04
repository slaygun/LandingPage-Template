import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        py-4 mx-auto sticky top-0
        ${isScrolled ? 'backdrop-blur-xl shadow-black/70 shadow-md': 'bg-transparent'}
      `}>
        
      <div className='flex justify-evenly'>

        <div className='flex items-center'>
          <img src="/assets/lyfelynk.svg" alt="LyfeLynk Logo" className="w-8 h-8 mr-2" /> 
          <a href="/" className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">
            LyfeLynk
          </a>
        </div>

        <div className='flex items-center'>
          <ul className="hidden md:flex items-center space-x-8">
              <li>
                <a href="#" className="hover:text-blue-500">Lorem</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Ipsum</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Contact</a>
              </li>
              {/* Add more links as needed */}
            </ul>          
        </div>
        
        <div className='flex items-center space-x-4'>
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>

      </div>
    </nav>
  )
} 

export default Navbar