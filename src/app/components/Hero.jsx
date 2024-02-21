"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section> 
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-12'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
              <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#9195F6] to-[#B7C9F2]'> Hello, I'm </span>
                <br />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Wei Ouyang!',
                    1000, // wait 1s before replacing words
                    'a web developer!',
                    1000,
                    'ready to be on your team!',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                />
              </h1>
              <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                Welcome to my (WIP) website!
              </p>
            </div>
            </div>
            <div className='sm:flex flex-row place-self-center items-center justify-center'>
              <Link href={'#contact'}>
                <button className='btn px-6 py-3 mt-3 rounded-full w-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-black'> Recruit Me </button>
              </Link>
              <a download href={"./wo_resume.pdf"}>
                <button  className='btn px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-3 '> Download CV </button>
              </a>
            </div>
          </div>
        
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
              {/* <Image
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                src='/blorrb.png'
                alt='blorrb_temp_pfp'
                width={300}
                height={300}
              /> */}
            </div>
          </div>
        </motion.div>
    </section>
  )
}

export default Hero