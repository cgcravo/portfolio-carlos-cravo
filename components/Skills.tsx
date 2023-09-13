import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { skills } from '@/utilities/skills'

type Props = {}

function Skills({}: Props) {
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
      className='min-h-screen flex relative flex-col text-center md:text-justify xl:flex-row max-w-[2000] justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Some stuff I use for coding
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        {skills.slice(0,skills.length / 2).map((skill)=>{
          return <Skill key={skill.name} name={skill.name} src={skill.src}/>
        })}
        {skills.slice(skills.length / 2, skills.length).map((skill)=>{
          return <Skill key={skill.name} directionLeft name={skill.name} src={skill.src}/>
        })}

      </div>
    </motion.div>
  )
}

export default Skills