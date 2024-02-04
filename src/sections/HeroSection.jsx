import React from 'react';
import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Elevating Healthcare with Trust
            </h1>
            <p className="py-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
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
            className="mx-auto  overflow-hidden rounded-t-xl"
            height="300"
            src="assets/heroimage.png"
            width="800"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;