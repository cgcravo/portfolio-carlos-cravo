import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/utilities/projects';
import Link from 'next/link';

type Props = {}

function Projects({}: Props) {
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
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
      Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ac0a]/80 z-20'>
        {projects.map((project, index)=>{
          return (<div key={index} className='w-screen min-w-[300px] h-screen flex-shrink-0 snap-center flex flex-col space-y-5 md:space-y-10 justify-center items-center px-10 pt-20 md:p-44'>
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
            src={project.src} 
            alt={`${project.title} project logo/homepage`}
            className='max-h-[25%] md:max-h-[50%] rounded-lg'/>
            <div className='space-y-5 md:space-y-10 px-0 md:px-10 max-w-2xl flex flex-col items-center'>
              {project.complete? <Link href={project.href}><h4 className='text-2xl md:text-4xl font-semibold text-center underline decoration-[#f7ac0a]/50'>{project.title}</h4></Link> : <div><h4 className='text-2xl md:text-4xl font-semibold text-center'>{project.title}</h4><p className='md:py-5 px-10 text-gray-500 text-xs md:text-2xl font-bold text-center'>Working on it...</p></div>}
              
              <div className='flex items-center justify-center space-x-2 flex-wrap'>
                {project.skills.map((skill, index)=>{
                  return <img key={index} src={skill} className='h-8 w-8 rounded-full object-cover object-center'/>
                })}
              </div>

                <p className='text-base md:text-lg text-center max-h-[150px] md:text-justify overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ac0a]/80'>{project.summary}</p>
                {/* {project.complete ? <button className='bg-[#f7ab0a] py-5 px-5 rounded-lg text-black font-bold text-2xl max-w-[300px] leading-none'><span className='sr-only'>{`${project.title} project page`}</span>Check this out!</button> : <p className='py-5 px-10 text-gray-500 text-2xl font-bold text-center'>Working on it...</p> } */}
            </div>
            </div>)
        })}
      </div>
      <div className='w-full absolute top-[30%] left-0 bg-[#f7ac0a]/10 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects