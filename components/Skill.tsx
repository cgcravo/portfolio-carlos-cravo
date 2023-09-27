import React from 'react'
import { motion } from 'framer-motion'
import { log } from 'console';
import { useEffect, useState } from 'react';


type Props = {
  directionLeft?: boolean;
  name: string;
  src: string;
}

function Skill({ directionLeft, name, src }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: 100*(directionLeft ? -1 : 1),
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }} 
        transition={{
          duration: 1,
        }}
        src={src}
        alt={`${name} logo`}
        className='rounded-full border border-gray-500 object-cover object-center w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 filter group-hover:grayscale transition duration-500 ease-in-out bg-transparent'
      />
      <div className='absolute h-full w-full m-auto opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-sm text-center md:text-lg xl:text-xl font-bold text-black opacity-100 overflow-hidden'>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default Skill