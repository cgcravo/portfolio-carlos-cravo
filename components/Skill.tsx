import React from 'react'
import { motion } from 'framer-motion'

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
          x: directionLeft ? -200 : 200,
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
        className='rounded-full border border-gray-500 object-cover object-center w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-500 ease-in-out bg-transparent'
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