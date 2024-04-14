import React from 'react'

function Hero() {
  return (
    <section className='px-20 min-h-[80vh]'>
      <p className='text-lg text-persian_green font-semibold pb-4'>Hi! My name is,</p>
      <h1 className='text-7xl font-bold pb-2 text-snow sm:flex sm:space-x-4'>
        <div className='flex'>
          <p className='hover:text-tiffany_blue'>S</p>
          <p className='hover:text-tiffany_blue'>a</p>
          <p className='hover:text-tiffany_blue'>m</p>
          <p className='hover:text-tiffany_blue'>u</p>
          <p className='hover:text-tiffany_blue'>e</p>
          <p className='hover:text-tiffany_blue'>l</p>
        </div>
        <div className='flex'>
          <p className='hover:text-tiffany_blue'>D</p>
          <p className='hover:text-tiffany_blue'>e</p>
          <p className='hover:text-tiffany_blue'>S</p>
          <p className='hover:text-tiffany_blue'>a</p>
          <p className='hover:text-tiffany_blue'>n</p>
          <p className='hover:text-tiffany_blue'>t</p>
          <p className='hover:text-tiffany_blue'>i</p>
          <p className='hover:text-tiffany_blue'>s</p>
        </div>
        {/* Samuel DeSantis */}
      </h1>
      <p className='text-xl font-semibold pb-1 text-balance text-snow'>Full-Stack Developer // Engineer</p>
      <p className='text-lg font-semibold text-balance text-snow'>I build web applications to provide solutions to your problems.</p>
    </section>
  )
}

export default Hero