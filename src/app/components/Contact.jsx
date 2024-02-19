"use client";
import React from 'react'
import Link from 'next/link';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from 'next/image';

const Contact = () => {
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
            <div className="flex flex-row gap-2 pt-5">
              <Link target="_blank" href="https://github.com/weio9134?tab=overview&from=2024-02-01&to=2024-02-19">
                <Image src={GithubIcon} alt="github icon" />
              </Link>
              <Link  target="_blank"href="https://www.linkedin.com/in/wei-ouyang-540a31211/">
                <Image src={LinkedinIcon} alt="linkedin icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="">
        </div>

      </div>
    </section>
  )
}

export default Contact
