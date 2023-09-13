import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/utilities/experiences';

type Props = {
  experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    // adjust css shrink limit not zero, size cards, etc
    <article className='flex flex-col flex-initial rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] min-h-[700px] max-h-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer'>
        
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
        src={experience.image}
        alt={`${experience.company} logo`}
      />

      <div className='px-0 md:px-10 flex-grow flex flex-col justify-between'>
        <h4 className='text-4xl font-light uppercase text-center p-10'>{experience.title}</h4>
        <div className='h-[300px]'>
          <p className='font-bold text-2xl mt-10 ml-8'>{experience.company}</p>
          <div className='flex space-x-2' >
            {experience.tech?.map((tech, index)=>{
              return <img key={index}
              className='h-10 w-10 rounded-full'
              src={tech}
              alt="tech logo"
            />
              })}
          </div>
          <p className='uppercase text-xl ml-8 mb-2 text-gray-300'>
            {`${experience.dateStart} - ${experience.dateEnd}`}
          </p>
          <div className='overflow-y-auto max-h-36 overflow-x-hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ac0a]/80'>
          <ul className='list-disc space-y-4 ml-12 pr-5 text-lg' >
            {experience.points.map((point, index)=>{
              return <li key={index}>{point}</li>
            })}
          </ul>
          </div>
        </div>
      </div>
    </article>
    )
}

export default ExperienceCard;