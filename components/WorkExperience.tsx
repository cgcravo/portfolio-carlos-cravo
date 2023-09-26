import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { experiences } from '@/utilities/experiences'


type Props = {}

function WorkExperience({}: Props) {
  return (
    // adjust css
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
      className='h-screen flex relative overflow-hidden text-left flex-row max-w-full px-5 md:px-10  justify-evenly mx-auto items-end '>
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full md:max-h-[85vh] flex space-x-5 md:space-x-10 overflow-x-scroll px-5 md:px-10 py-5 md:py-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ac0a]/80'>
        {experiences.map((experience, index)=>{
          return <ExperienceCard key={index} experience={experience}/>
        })}
      </div>
    </motion.div>
  )
}

export default WorkExperience