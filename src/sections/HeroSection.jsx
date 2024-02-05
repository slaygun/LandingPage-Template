import React from 'react';
import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
    
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div  className='circlePosition w-[590px] h-[400px]
        bg-[#26b9fd42] rounded-[100%] absolute -z-10 top-[50%]
          -translate-x-[-100%] translate-y-[-50%] blur-[100px]'>
      </div>
      <div className="container px-4 md:px-6 ">
        <div className="grid gap-4  md:grid-cols-2 md:gap-16 flex items-center">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
              Elevating Healthcare with Trust
            </h1>
            <p className="py-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400
            ">
              Empower individuals and healthcare professionals with a secure and
              ethical approach to health data. By placing user privacy at the
              forefront, we can unlock the true potential of healthcare data for
              personalized and impactful medical solutions.
            </p>

            <div className="flex items-left gap-6">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>

          </div>
          
          <img
            alt="heroimage"
            className="mx-auto"
            height="500"
            width="1200"
            src="assets/heroimage.png"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;