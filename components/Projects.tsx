import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5] 
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
      Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project)=>{
          // the h-screen on my browser is hiding the component scroll bar behind the viewport scroll bar
          return (<div className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44'>
            <img 
            src="/assets/Screenshot 2023-07-18 115249.jpg" 
            alt="Find My Bloco project screenshot"
            className='max-h-[60%]'/>
            <div><h4>Find My Bloco</h4></div>
            </div>)
        })}
      </div>
      <div className='w-full absolute top-[30%] left-0 bg-[#f7ac0a]/10 h-[500px] -skew-y-12'></div>
    </div>
  )
}

export default Projects