import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 md:items-center'>
      <motion.div
      initial={{
        x:-500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-row items-center'>
        <SocialIcon url="https://github.com/cgcravo" 
        fgColor="gray"
        bgColor='transparent'/>
        <SocialIcon url="https://www.linkedin.com/in/carlos-cravo/" 
        fgColor="gray"
        bgColor='transparent'/>
        <SocialIcon url="https://www.instagram.com/carlosgcravo/" 
        fgColor="gray"
        bgColor='transparent'/>
        <SocialIcon url="https://www.facebook.com/carlosguilherme.cravoschuabb/" 
        fgColor="gray"
        bgColor='transparent'/>
      </motion.div>

      {/* fix the bug to transform into a link */}
      <motion.div 
      initial={{
        x: 1000,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
      }}
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
        className='cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='transparent' 
        />
        <p className='uppercase hidden md:inline-flex text-sml text-gray-400'>
        get in touch
        </p>
      </motion.div>
    </header>
  )
}

export default Header