import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  {
    name: 'Contact',
    href: '#contact'
  }
]

function Navbar() {
  return (
    <nav className='flex justify-between text-2xl p-8'>
      <a href='/' className='font-bold text-4xl'>SD</a>
      <ul className='flex space-x-4'>
        <li className='hover:underline font-semibold'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar