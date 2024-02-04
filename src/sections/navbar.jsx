import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { AlignJustify } from 'lucide-react';
import { Menu } from 'lucide-react'; // Import the Menu icon

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
      <div className="flex container justify-between">
        <div className="flex items-center">
          <img src="/assets/lyfelynk.svg" alt="LyfeLynk Logo" className="w-8 h-8 mr-2" />
          <a href="/" className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">
            LyfeLynk
          </a>
        </div>

        {/* Menu icon for smaller devices */}
        <button
          onClick={handleMenuToggle}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          className="block md:hidden focus:outline-none"
        >
          <AlignJustify /> {/* Use the Menu icon from Lucide */}
        </button>

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
        <ul
          className={`
          absolute top-full w-full bg-background shadow-md overflow-hidden
            ${isMenuOpen ? 'block' : 'hidden'}
          `}
        >
          {/* ... navigation links here */}
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold py-2">Lorem</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold py-2">Ipsum</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold py-2">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold py-2">Contact</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 font-semibold py-2">About</a>
          </li>
          {/* ... other links */}
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;