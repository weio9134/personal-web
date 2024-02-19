import React from 'react'
import Link from 'next/link'

const Menu = () => {
  const LinkStyle = "block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white hover:underline"
  return (
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
}

export default Menu