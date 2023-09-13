import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { typewrite } from '@/utilities/typewrite';
import { heroButtons } from '@/utilities/heroButtons';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
      words: [...typewrite],
      loop: true,
      delaySpeed: 2000,
    })
  return (
    // overflow:hidden so the circles wont be squeezed if don't fit in the screen
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img 
      className="relative rounded-full h-32 w-32 mx-auto object-cover"
      src="assets/WhatsApp Image 2023-09-07 at 10.36.08 AM.jpeg" alt="profile picture"/>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Full Stack Web Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='hsl(40.76deg 93.68% 50.39%)' />
        </h1>
        <div className='pt-5'>
          {heroButtons.map((button)=>{
            return (<Link key={button.id} href={button.id}>
            <button className='heroButton'>{button.name}</button>
            </Link>)
          })}
        </div>
        </div>
      
    </div>
  )
}

export default Hero