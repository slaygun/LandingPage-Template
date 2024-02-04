import React from 'react';
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <nav className='py-4 mx-auto'>
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
                <a href="#" className="hover:--primary">Lorem</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Ipsum</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">About Us</a>
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