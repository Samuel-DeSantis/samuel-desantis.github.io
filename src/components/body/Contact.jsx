import React from 'react'

function Contact() {
  return (
    <div id='contact' className='p-20'>
      <div className='sm:flex sm:space-x-4'>
       <h1 className='font-semibold text-4xl text-snow sm:mb-4'>Contact Me</h1>
       <p className='text-persian_green text-sm pt-5 pb-4'>Have any questions? Feel free to shoot me a message!</p>
      </div>
      <form action="" className='flex flex-col'>
        <label htmlFor="" className='text-snow font-semibold pb-1'>Name</label>
        <input type="text" className='rounded-md bg-snow mb-4 p-1'/>
        <label htmlFor="" className='text-snow font-semibold pb-1'>Email</label>
        <input type="email" className='rounded-md bg-snow mb-4 p-1'/>
        <label htmlFor="" className='text-snow font-semibold pb-1'>Message</label>
        <textarea type="text" className='rounded-md bg-snow mb-4 p-1'/>
        <input type="submit" value='Send' className='justify-end'/>
      </form>
    </div>
  )
}

export default Contact