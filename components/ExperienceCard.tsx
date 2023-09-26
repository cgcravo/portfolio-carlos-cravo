import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/utilities/experiences';

type Props = {
  experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    // adjust css shrink limit not zero, size cards, etc
    <article className='flex flex-col flex-initial rounded-lg items-center md:space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] min-h-[70hv] max-h-[80hv] md:max-h-[85hv] snap-center bg-[#292929] p-5 md:p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer'>
        
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
        className='w-20 h-20 md:w-32 md:h-32 rounded-full xl:w-44 xl:h-44 object-cover object-center'
        src={experience.image}
        alt={`${experience.company} logo`}
      />

      <div className='xl:px-10 flex flex-col justify-between'>
        <h4 className='text-xl md:text-4xl min-h-[4em] md:min-h-[4.5em] xl:min-h-[3.5em] font-light uppercase text-center pt-5 md:pt-10'>{experience.title}</h4>
        <div className='min-h-[300px] md:min-h-[400px]'>
          <p className='font-bold text-sm md:text-2xl text-center md:text-left md:ml-8'>{experience.company}</p>
          <div className='flex space-x-2' >
            {/* in case I want to attach techs in the future */}
            {/* {experience.tech?.map((tech, index)=>{
              return <img key={index}
              className='h-10 w-10 rounded-full'
              src={tech}
              alt="tech logo"
            />
              })} */}
          </div>
          <p className='uppercase text-sm md:text-xl text-center md:text-left md:ml-8 mb-5 text-gray-300'>
            {`${experience.dateStart} - ${experience.dateEnd}`}
          </p>
          <div className='overflow-y-auto max-h-44 md:max-h-56 overflow-x-hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ac0a]/80'>
          <ul className='list-disc space-y-2 md:space-y-4 ml-4 md:ml-12 pr-5 text-xs md:text-base xl:text-lg' >
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