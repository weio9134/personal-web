"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Bars3Icon, XmarkIcon } from '@heroicons/react/24/solid'
import Menu from './Menu'
import Image from 'next/image'


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      setOpen(false);
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <nav className='fixed top-0 py-5 left-5 right-5 z-10 bg-[#121212] bg-opacity-85'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href="/" className='text-xl md:text-3xl text-white font-semibold pl-5'> 
          <Image 
            src='/tp_logo.png'
            width={85}
            height={85}
            alt="home logo"
          />
          {/* Home  */}
        </Link>

        <div className='mobile-menu block md:hidden dropdown dropdown-bottom dropdown-end'>
          <div tabIndex={0} className="m-1" ref={ref}>
            { !open ? 
              (
                <button onClick={() => setOpen(true)} className='btn text-slate-200 flex items-center border rounded border-slate-200 hover:text-white hover:border-white'> 
                  <Bars3Icon className='h-5 w-5'/> 
                </button>
              ) : (
                <button onClick={() => setOpen(false)} className='btn text-slate-200 flex items-center border rounded border-slate-200 hover:text-white hover:border-white'> 
                  {/* <XmarkIcon className="h-5 w-5"/>  */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              )
            }
            { open ? (
                <ul tabIndex={0} className="flex dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                 <Menu />
                </ul>
              ) : null
            }
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