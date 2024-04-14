import React from 'react'
import { projectsConst } from './consts/projectsConst'

function Projects() {
  return (
    <section className='p-20 bg-tea_green'>
      <h1 className='text-4xl font-bold text-night pb-6'>My Projects</h1>
      <p className='text-night font-semibold pb-10'>Take a look at some of my projects below!</p>
      <div className='grid sm:grid-cols-2 gap-8 max-w-8xl'>
        {projectsConst.map(project => {
          return (
            <div className='rounded-md bg-snow max-w-100'>
              <img className='rounded-t-md pb-2' src={project.image}/>
              <div className='flex'>
                <h2 className='mx-6 pb-2 text-2xl font-semibold text-night'>{project.title}</h2>
                <a className='text-sm text-snow font-semibold border bg-night p-2 rounded-lg hover:bg-persian_green' href={project.href} target='_blank' rel='noopener noreferrer'>GitHub</a>
              </div>  
              <p className='mx-6 pb-6 text-sm text-night font-semibold'>{project.body}</p>
            </div>
        )})}
      </div>
    </section>
  )
}

export default Projects