"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Navbar = () => {
  // toggle dropdown menu
  const [open, setOpen] = useState(false);

  // toggle click away from dropdown menu
  const dropdown = useRef(null);
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!open) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target))
        setOpen(false);
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [open]);

  // toggle hiding navbar
  gsap.registerPlugin(ScrollTrigger);
  const navbarRef = useRef(null)
  useEffect(() => {
    const showNav = gsap.fromTo(
    navbarRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.4
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => { self.direction === -1 ? showNav.play() : showNav.reverse() }
      });
    }, [])

  const LinkStyle = "block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white hover:underline"
  const Menu = () => (
    <>
      <li>
        <Link href={"#about"} className={LinkStyle}>
          About
        </Link>
      </li>
      <li>
        <Link href={"#projects"} className={LinkStyle}>
          Projects
        </Link>
      </li>
      <li>
        <Link href={"#contact"} className={LinkStyle}>
          Contact
        </Link>
      </li>
    </>
  )

  return (
    <nav ref={navbarRef} className='fixed pt-3 pb-2 left-10 right-10 z-10 bg-opacity-95 active rounded-badge'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2 lg:pl-10'>
        <Link href="/" className='text-xl md:text-3xl text-white font-semibold'> 
          <Image 
            src='/tp_logo.png'
            width={100}
            height={100}
            alt="logo"
          />
          {/* Home  */}
        </Link>

        <div className='mobile-menu block md:hidden dropdown dropdown-bottom dropdown-end'>
          <div tabIndex={0} className="m-1" ref={dropdown}>
            { !open ? 
              (
                <button onClick={() => setOpen(true)} className='btn text-slate-200 flex items-center border rounded border-slate-200 hover:text-white hover:border-white'> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              ) : (
                <button onClick={() => setOpen(false)} className='btn text-slate-200 flex items-center border rounded border-slate-200 hover:text-white hover:border-white'> 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              )}

            { open ? ( 
                <ul tabIndex={0} className="flex dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                  <Menu />
                </ul>
              ) : null }
          </div>
        </div>
        
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            <Menu />
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar