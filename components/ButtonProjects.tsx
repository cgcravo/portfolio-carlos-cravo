import React from 'react'

type Props = {
  children: string;
  hidden: string;
}

function ButtonProjects({ children, hidden }: Props) {


  return (
    <button className='bg-[#f7ab0a] py-5 px-10 rounded-sm text-black font-bold text-2xl'><span className='sr-only'>{hidden}</span>{children}</button>
  )
}

export default ButtonProjects