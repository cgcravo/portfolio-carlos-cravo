import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
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
    className='flex relative  flex-col h-screen text-center md:text-justify md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
      initial={{
        x: -500,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      src="/assets/WhatsApp Image 2023-09-07 at 9.59.23 AM.jpeg"
      alt="Carlos photo at a restaurant in Brazil"
      className='mt-[8rem] md:mt-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-center md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' />
      <div
      className='space-y-3 px-0 md:px-10 max-h-[45%] md:max-h-[70%] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ac0a]/80 '>
        <h4
        className='font font-semibold text-center'>
          Here is a <span className='underline decoration-[#f7ac0a25]'>little</span> about myself
        </h4>
        <p className='aboutParagraph'>
          Hey there, I'm Carlos. An extrovert Brazilian who loves music, animals and building
          unusual stuff with code!
        </p>
        <p className='aboutParagraph'>
          I've been coding since Univeristy. Programming logic with Python was the first subject I <em>genuinely</em>
          liked. Who would imagine it could be fun doing math on a computer? I used to work with engineering and Some years later, while working with engineering, developing new projects for the electronic industry. It was awesome to use my analytical skills and solve problems! 
          I used to like it a lot, but I couldn't get rid of the feeling that something was missing... Everything was so strict
          and rigid and my solutions were somehow always original. Was it what I <em>really</em>{" "}
          wanted? Was it really me? I needed{" "}
          <em>something more</em>. I craved to also exercise my
          creativity as well as my logic! I remembered then how much fun I had
          coding, where finding unique solutions for problems was encouraged, not
          discouraged. That was it, I needed to be a developer!(emoticon nerd)
        </p>
        <p className='aboutParagraph'>
          Since then, I've been constantly honing my skills. I recently
          graduated from Concordia Full-Stack Web Development Bootcamp program and
          I'm always looking for something new to learn. At the moment, I'm diving deep on CSS while improving my understanding of React, TypeScript, Tailwind and Styled-Components.
        </p>
        <p className='aboutParagraph'>  
          I'm currently seeking a stimulating environment where I can
          develop my skills. If you'd like to know a little bit more about me, don't exitate to send me a message, I'm super nice to talk to! :D
        </p>

      </div>
    
    </motion.div>
  )
}

export default About