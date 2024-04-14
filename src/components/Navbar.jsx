import React from 'react'
import Resume from '../assets/Resume - Software Engineer - 12-7.pdf'

function Navbar() {
  return (
    <nav className='flex justify-between text-snow text-xl p-8'>
      <a href='/' className='font-bold hover:text-tiffany_blue text-4xl'>SD</a>
      <ul className='flex space-x-6 pt-2'>
        <li className='hover:text-tiffany_blue font-semibold'>
          <a href="#contact" className='flex scroll-smooth space-x-2'>Contact</a>
        </li>
        <li className='font-semibold'>
          <a 
            href={Resume}
            className='border-2 p-2 rounded-lg border-snow hover:text-tiffany_blue hover:border-tiffany_blue '
            target='_blank'
            rel='noopener noreferrer'
          >Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar