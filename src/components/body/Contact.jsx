import React from 'react'
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id='contact' className='p-20'>
      <div className='flex space-x-4'>
       <h1 className='font-semibold text-4xl text-snow'>Contact Me</h1>
       <a href="https://www.linkedin.com/in/samuel-i-desantis/" target='_blank' rel='noopener noreferrer'><FaLinkedin className=' text-persian_green hover:text-tiffany_blue size-12'/></a>
      </div>
      <p className='text-persian_green text-sm py-4'>Have any questions? Feel free to shoot me a message!</p>
      <p className='text-sm text-persian_green'>See my resume for other contact methods.</p>        
      {/* <form action="" className='flex flex-col'>
        <label htmlFor="" className='text-snow font-semibold pb-1'>Name</label>
        <input type="text" className='rounded-md bg-snow mb-4 p-1'/>
        <label htmlFor="" className='text-snow font-semibold pb-1'>Email</label>
        <input type="email" className='rounded-md bg-snow mb-4 p-1'/>
        <label htmlFor="" className='text-snow font-semibold pb-1'>Message</label>
        <textarea type="text" className='rounded-md bg-snow mb-4 p-1'/>
        <input type="submit" value='Send' className='justify-end max-w-16 font-semibold rounded-lg bg-tiffany_blue'/>
      </form> */}
    </section>
  )
}

export default Contact