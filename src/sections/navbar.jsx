import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        py-4 mx-auto sticky top-0
        ${isScrolled ? 'backdrop-blur-xl shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="flex container justify-between px-4">
        <div className="flex items-center">
          <img src="/assets/lyfelynk.svg" alt="LyfeLynk Logo" className="w-8 h-8 mr-2" />
          <a href="/" className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">
            LyfeLynk
          </a>
        </div>

        {/* Menu icon for smaller devices */}
        <Button
          onClick={handleMenuToggle}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          className="md:hidden focus:outline-none"
        >
          <AlignJustify className='h-4 w-4'/> {/* Use the Menu icon from Lucide */}
        </Button>

        {/* Navigation links for larger screens */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold">Lorem</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold">Ipsum</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold">Contact</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold">About</a>
          </li>
          {/* ... other links */}
        </ul>

        {/* Sign in and Get Started buttons for larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>

        {/* Navigation menu for smaller devices */}
        <div
          className={`
          absolute left-0 top-full w-full bg-background shadow-md overflow-hidden md:hidden py-4
          text-center outline outline-primary
            ${isMenuOpen ? 'block' : 'hidden'}
          `}
        >
          {/* ... navigation links here */}
          <ul className='space-y-4 font-semibold'>
            <li>
            </li>
            <li>
              <a href="#" className="block hover:text-primary">Ipsum</a>
            </li>
            <li>
              <a href="#" className="block hover:text-primary">Blog</a>
            </li>
            <li>
              <a href="#" className="block hover:text-primary">Contact</a>
            </li>
            <li>
              <a href="#" className="block hover:text-primary">About</a>
            </li>
          </ul>
            {/* ... other links */}
          <div className="items-center py-4 space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>      
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
