import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5] 
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }} 
      transition={{
        duration: 2.5,
      }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
      Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ac0a]/80 z-20'>
        {projects.map((project, index)=>{
          // the h-screen on my browser is hiding the component scroll bar behind the viewport scroll bar
          return (<div key={index} className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44'>
            <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }} 
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            src="/assets/Screenshot 2023-07-18 115249.jpg" 
            alt="Find My Bloco project screenshot"
            className='max-h-[60%]'/>
            <div className='space-y-10 px-0 md:px-10 max-w-2xl'>
              <h4 className='text-4xl font-semibold text-center underline decoration-[#f7ac0a]/50'>Find My Bloco</h4>
              <p className='text-lg text-center md:text-justify'>Project Summary Project Summary Project Summary Project Summary Project Summary Project Summary Project Summary Project SummaryProject Summary</p>
            </div>

            </div>)
        })}
      </div>
      <div className='w-full absolute top-[30%] left-0 bg-[#f7ac0a]/10 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects