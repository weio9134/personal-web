import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    // <ul className='flex flex-col py-4 items-center'>
    <>
      <li>
        <Link href={"#about"} className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white hover:underline'>
          About
        </Link>
      </li>
      <li>
        <Link href={"#projects"} className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white hover:underline'>
          Projects
        </Link>
      </li>
      <li>
        <Link href={"#contact"} className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white hover:underline'>
          Contact
        </Link>
      </li>
    </>
    // </ul>
  )
}

export default Menu