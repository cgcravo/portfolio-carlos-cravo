import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { typewrite } from '@/utilities/typewrite';
import { heroButtons } from '@/utilities/heroButtons';
import Image from 'next/image';
import HeroPic from "../public/assets/me_moustache_whitebg_250x250.webp"

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
      {/* testing without hero pic */}
      {/* <Image
      priority
      className="relative rounded-full h-20 w-20 md:h-28 md:w-28 mx-auto object-cover"
      src={HeroPic} alt="profile picture"/> */}
      <div className='z-20'>
        <h1 className='flex justify-center items-center text-2xl md:text-5xl lg:text-6xl font-semibold px-10 min-h-[4rem] md:min-h-[6rem] lg:min-h-[8rem]'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='hsl(40.76deg 93.68% 50.39%)' />
        </h1>
        <h2 className='text-sm md:text-base lg:text-lg uppercase text-gray-500 pb-2 tracking-[15px]'>Full Stack Web Developer</h2>
        <div className='flex flex-col mt-5 md:mt-0 md:flex-row md:justify-center'>
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