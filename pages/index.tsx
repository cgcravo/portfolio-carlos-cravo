import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ac0a]/80 scrollbar-rounded-full z-0'>
      <Head>
        <title>Carlos Cravo Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <Header />

    <section id="hero" className='snap-start'>
      <Hero />
    </section>

    <section id="about" className='snap-start'>
      <About />
    </section>
    
    <section id="skills" className='snap-start'>
      <Skills />
    </section>

    <section id="projects" className='snap-center'>
      <Projects />
    </section>

    <section id="experience" className='snap-center'>
      <WorkExperience />
    </section>

    <section id="contact" className='snap-start'>
      <Contact />
    </section>

    
    <footer className='sticky bottom-10 w-full'>
      <div className='flex items-center justify-start ml-5 cursor-default'>
      <Link href="#hero">
        <img
          className='h-10 w-10 rounded-full filter hover:bg-[#f7ac0a]/50 cursor-pointer bg-grayscale transition-all ease-in-out duration-300'
          src="/assets/noun-back-to-top-5418720.png" alt="button that takes to the top of the page"/>
      </Link>
      </div>
    </footer>
    
    </div>
  )
}
