"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import MailIcon from "../../../public/mail.png";
import Image from 'next/image';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cveqgwl', 'template_ziqf10l', form.current, {
        publicKey: '3D-TOwXCPuZCQLLOa',
      }) 
      e.target.reset()
  };

  return (
      <section className="text-white pt-10" id="contact">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4"> Contact </h2>
          <div className='pt-3'>
            <h5 className="text-xl font-bold text-white my-2"> Let's Connect! </h5>
            <p className="text-base lg:text-lg">
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I'll
              try my best to get back to you!
            </p>
            <div className="flex flex-row gap-2 pt-5 pb-10">
              <a target="_blank" href="https://github.com/weio9134?tab=overview&from=2024-02-01&to=2024-02-19">
                <Image 
                  src={GithubIcon} 
                  alt="github icon" 
                  height={50}
                />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/wei-ouyang-540a31211/">
                <Image 
                  src={LinkedinIcon} 
                  alt="linkedin icon" 
                />
              </a>
              <a target="_blank" href="mailto: weiouyang9134@gmail.com">
                <Image 
                  src={MailIcon} 
                  alt="mail icon" 
                  className='invert'
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-[400]">
          <form id="email-form" ref={form} onSubmit={sendEmail} className='flex items-start flex-col w-full text-base'>
            <label className='mt-1'>Name</label>
            <input type="text" name="user_name" className='bg-[#afd2e9] w-full h-35 pt-5 pb-5 pl-2 outline-none rounded-lg border-solid border-1 focus:border-2 text-black'/>

            <label className='mt-1'>Email</label>
            <input type="email" name="user_email" className='bg-[#afd2e9] p-2 outline-none rounded-lg border-solid border-1 focus:border-2 text-black'/>

            <label className='mt-1'>Message</label>
            <textarea name="message" className='bg-[#afd2e9] w-full min-h-[100] pt-5 pb-5 pl-2 outline-none border-r-5 rounded-lg border-solid border-1 focus:border-2 text-black'/>
            
            <input type="submit" value="Send" className='mt-2 cursor-pointer btn border-none text-white bg-[#8ba1af]'/>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
