import React from 'react'
import Link from 'next/link'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='sticky bottom-10 w-full'>
      <div className='flex items-center justify-start ml-5 cursor-default'>
      <Link href="#hero">
        <img
          className='h-5 w-5 bg-gray-400/50 md:h-7 md:w-7 rounded-full filter hover:bg-[#f7ac0a]/50 cursor-pointer bg-grayscale transition-all ease-in-out duration-300'
          src="/assets/noun-back-to-top-5418720.png" alt="button that takes to the top of the page"/>
      </Link>
      </div>
    </footer>
  )
}

export default Footer