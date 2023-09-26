import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { socials } from '@/utilities/socials';
import Link from 'next/link';
import { HiOutlineMail } from "react-icons/hi"
import { IconContext } from 'react-icons';

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
        {socials.map((social)=>{
          return <SocialIcon key={social} url={social} 
          fgColor="gray"
          bgColor='transparent'
          />
        })}
      </motion.div>

      <Link href={"#contact"}>
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
          <IconContext.Provider
            value={{ color: 'gray', size: '30px' }}
          >
            <div className='h-[50px] w-[50px] flex justify-center items-center'>
              <HiOutlineMail />
            </div>
          </IconContext.Provider>
          <p className='uppercase hidden md:inline-flex text-sml text-gray-400 ml-2' >
          get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header