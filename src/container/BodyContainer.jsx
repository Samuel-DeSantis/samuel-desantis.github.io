import React from 'react'
import Hero from '../components/body/Hero'
import About from '../components/body/About'
import Contact from '../components/body/Contact'
import Projects from '../components/body/Projects'

function BodyContainer() {
  return (
    <main className='pt-36'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default BodyContainer