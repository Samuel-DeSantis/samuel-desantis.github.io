import React from 'react'
import profilePhoto from './smaller_image.jpeg'

function Body() {
  return (
    <main className='px-8 pt-36'>
      <section className='min-h-[80vh]'>
        <h1 className='text-7xl font-bold pb-2 text-night'>Samuel DeSantis</h1>
        <p className='text-2xl font-semibold pb-6 text-balance text-night'>Full-Stack Developer // Engineer</p>
        <p className='text-xl font-semibold text-balance text-night'>I build web applications to provide solutions to your problems.</p>
      </section>
      <section className='pb-12'>
        <h1 className='text-4xl font-bold pb-2 text-night'>About Me</h1>
        <p className='text-xl font-semibold text-balance pb-6 text-night'>Hi! My name is Samuel and I enjoy building web applications and creating solutions to problems. I have a Bachelors in Electrical and Computer Engineering and a Certificate from Flatiron School Coding Boot Camp for Full-Stack Software Engineering.</p>
        <p className='text-xl font-semibold text-balance text-night'>I specialize in ReactJS front end development and have experience using Ruby on Rails, Django, and Firebase for backend development.</p>
      </section>
      <section></section>
    </main>
  )
}

export default Body