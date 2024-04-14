import React from 'react'
import ClimbingLogger from '../../assets/ClimbingLogger-main.png'
import OnlineMessageBoard from '../../assets/online-message-board.png'

function Projects() {
  return (
    <div className='p-20 bg-persian_green'>
      <h1 className='text-4xl font-bold text-night pb-6'>My Projects</h1>
      <p className='text-night font-semibold pb-10'>Take a look at some of my projects below!</p>
      <div className='grid sm:grid-cols-2 gap-8'>
        <div className='rounded-md bg-snow max-w-100'>
          <img className='rounded-t-md' src={OnlineMessageBoard}/>
          <div className='flex'>
            <h2 className='mx-6 pb-2 text-2xl font-semibold text-night'>Online Message Board</h2>
            <a className='text-sm text-snow font-semibold border bg-night p-2 rounded-lg hover:bg-persian_green' href="https://github.com/Samuel-DeSantis/message-board-throwback" target='_blank' rel='noopener noreferrer'>GitHub</a>
          </div>  
          <p className='mx-6 pb-6 text-sm text-night font-semibold'>Add climbs and track your progress with the Climbing Logger app. Enter the route location, diffuculty, ascents, and description and save it to your collection. The web application front end was built with JavaScript + <a className='hover:underline' href="https://getbootstrap.com/">BootStrap</a> and the backend RESTful API was built with <a className='hover:underline' href="https://rubyonrails.org/">Ruby on Rails</a>.</p>
        </div>
        <div className='rounded-md bg-snow max-w-100'>
          <img className='rounded-t-md' src={ClimbingLogger}/>
          <div className='flex'>
            <h2 className='mx-6 pb-2 text-2xl font-semibold text-night'>Climbing Logger</h2>
            <a className='text-sm text-snow font-semibold border bg-night p-2 rounded-lg hover:bg-persian_green' href="https://github.com/Samuel-DeSantis/js-portfolio-project" target='_blank' rel='noopener noreferrer'>GitHub</a>
          </div>  
          <p className='mx-6 pb-6 text-sm text-night font-semibold'>Add climbs and track your progress with the Climbing Logger app. Enter the route location, diffuculty, ascents, and description and save it to your collection. The web application front end was built with JavaScript + <a className='hover:underline' href="https://getbootstrap.com/">BootStrap</a> and the backend RESTful API was built with <a className='hover:underline' href="https://rubyonrails.org/">Ruby on Rails</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects