import React from 'react';
import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
    
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div class="circlePosition w-full h-full bg-[#36a0d142] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
        <div class="circle w-[17rem] h-[17rem] bg-[#26b9fd42] rounded-[100%]" />
      </div>
      <div className="container px-4 md:px-6 ">
        <div className="grid gap-4  md:grid-cols-2 md:gap-16 flex items-center">
          <div>
            <h1 className="text-6xl font-extrabold mb-4">
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
            src="assets/heropic.png"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;