import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    // adjust css
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }} 
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity:1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="/assets/aim solder.jpeg"
        alt="AIM logo"
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>JOB TITLE</h4>
        <p className='font-bold text-2xl mt-1'>COMPANY</p>
        <div className='flex space-x-2 my-2' >
          <img 
            className='h-10 w-10 rounded-full'
            src="assets/matlab-logo.jpeg"
            alt="Matlab logo"
          />
          <img 
            className='h-10 w-10 rounded-full'
            src="assets/matlab-logo.jpeg"
            alt="Matlab logo"
          />
          <img 
            className='h-10 w-10 rounded-full'
            src="assets/matlab-logo.jpeg"
            alt="Matlab logo"
          />
          {/* tech used */}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          started...
          {/* dates */}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg h-[150[px] md:h-[250px] overflow-auto'>
          <li>Sumary points Sumary points Sumary points Sumary points</li>
          <li>Sumary points Sumary points Sumary points Sumary points</li>
          <li>Sumary points Sumary points Sumary points Sumary points</li>
          <li>Sumary points Sumary points Sumary points Sumary points</li>
          <li>Sumary points Sumary points Sumary points Sumary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard;