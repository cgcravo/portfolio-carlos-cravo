import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutPic from "../public/assets/about_pic.webp"

type Props = {};

const MotionImage = motion(Image);

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
      className="flex relative flex-col h-screen text-center md:text-justify md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <MotionImage
        initial={{
          x: -200,
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
        src={AboutPic}
        alt="Carlos photo at a restaurant in Brazil"
        className="relative mt-[4rem] md:mt-0 flex-shrink-0 w-32 h-32 rounded-full object-cover object-center md:rounded-lg md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[500px]"
      />
      
      <div className="relative mb-3 px-0 md:px-10 max-h-[45%] md:max-h-[65%] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ac0a]/80 ">
        <h4 className="sticky top-0 mb-3 bg-[rgb(36,36,36)] font font-semibold text-center text-base md:text-2xl">
            Here is a{" "}
            <span className="underline decoration-[#f7ac0a]/30">little</span> about
            myself
        </h4>
        <p className="aboutParagraph">
          Hey there, I&#39;m Carlos. An extrovert Brazilian who loves music, animals
          and building unusual stuff with code!
        </p>
        <p className="aboutParagraph">
          I&#39;ve been coding since University. Programming logic with Python was
          the first subject I <em>genuinely</em> liked. Who would imagine it could be fun doing math on a computer? I
          used to work with engineering developing new projects for the electronic industry. It
          was awesome to use my analytical skills and solve problems! I used to
          like it a lot, but I couldn&#39;t get rid of the feeling that something
          was missing... Everything was so strict and rigid but despite this my solutions
          were somehow always original. Was it what I <em>really</em> wanted?
          Was it really me? I needed <em>something more</em>. I craved to also
          exercise my creativity as well as my logic! I remembered then how much
          fun I had coding, where finding unique solutions for problems was
          encouraged, not discouraged. That was it, I needed to be a developer!
        </p>
        <p className="aboutParagraph">
          Since then, I&#39;ve been constantly honing my skills. I recently
          graduated from Concordia&#39;s Full-Stack Web Development Bootcamp program
          and I&#39;m always looking for something new to learn. At the moment, I&#39;m
          diving deep on CSS while improving my understanding of React,
          TypeScript, Tailwind and Styled-Components.
        </p>
        <p className="aboutParagraph">
          I&#39;m currently seeking a stimulating environment where I can develop my
          skills. If you&#39;d like to know a little bit more about me, don&#39;t
          hesitate to send me a message, I&#39;m super nice to talk to! <span>&#128513;</span>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
