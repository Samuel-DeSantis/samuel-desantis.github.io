import React from 'react'
import { aboutConst } from './consts/aboutConst';

function About() {
  return (
    <section className='px-20 py-12 bg-persian_green'>
      <h1 className='text-4xl font-bold pb-6 text-night'>About Me</h1>
      <p className='font-semibold text-balance pb-6 text-night max-w-screen-sm'>Hi! My name is Samuel and I enjoy building web applications and creating solutions to problems. I have a Bachelors in Electrical and Computer Engineering and a Certificate from Flatiron School Coding Boot Camp for Full-Stack Software Engineering.</p>
      <p className='font-semibold text-balance text-night'>I specialize in ReactJS front end development and have experience using Ruby on Rails, Django, and Firebase for backend development.</p>
      <div className='py-12 grid  grid-cols-2 sm:grid-cols-4 text-night gap-y-8'>
        {aboutConst.map(tag => tag)}
      </div>
    </section>
  )
}

export default About