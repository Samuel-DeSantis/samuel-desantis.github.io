'use client';
import Image from 'next/image'
import Link from 'next/link'

export default function App () {
  return (
    <main>
      <Navbar />
      {/* <Sidebar /> */}
      <Home />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}

const navLinks = [
  { title: 'Home', path: '#top' },
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
]

function Navbar () {
  return (
    <nav>
      <ul class='navbar-top'>
        {navLinks.map(link => (
          <li class='link-internal' key={ link.title }>
            <a href={ link.path }>{ link.title }</a>
          </li> 
        ))}
      </ul>
    </nav>
  )
}

function Sidebar () {
  return (
    <nav>
      <ul class='navbar-side'>
        <li class='icon-github'>
          <svg  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#9ac7bc"/></svg>
        </li>
        <li class='icon-github'>
          <svg height='24px' width='26px' xmlns="http://www.w3.org/2000/svg" fill="none"  stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
          </svg>
        </li>
      </ul>
    </nav>
  )
}

function Home () {
  return (
    <>
      <div id='home'></div>
      <section class='block'>
        <p class='intro'>Hi, my name is</p>
        <h1 class="section-heading">Samuel DeSantis</h1>
        <p class='about'>Software Engineer looking for Frontend Development positions and career opportunities. I have a Bachelor's Degree in Electrical & Computer Engineering from <a href='https://ysu.edu/' class='link-external' rel='noopener noreferrer' target='_blank'>Youngstown State University</a> as well as a Full Stack Software Engineering Certificate from <a href='https://flatironschool.com/' class='link-external' rel='noopener noreferrer' target='_blank'>Flatiron School</a> Coding Boot Camp. I have experience programming in JavaScript, Ruby, Python,C/C++, and have worked with ReactJS, NextJS, Ruby on Rails, and Django.</p>
      </section>
    </>
  )
}

function About () {
  return (
    <>
      <div id='about'></div>
      <section class='block'>
        <h3 class='section-heading'>About Me</h3>
        <p>I have been working as an engineer for four years this September and I am looking to make a career change from Electrical Engineering to Software Engineering.<br/><br/>
        My undergraduate studies and interests have always lied with programming, whether it be for hardware or software solutions. My bachelors in Electrical and Computer Engineering gives me experience working with low level languages and taking into account hardware restraints and my software programming experience and Flatiron Certificate give me a the skills necessary to thrive in the Software Engineering Industry.</p>
      </section>
    </>
  )
}




function Projects () {


  return (
    <>
      <div id='projects'></div>
      <section class='block'>
        <h3 class='section-heading'>Projects</h3>
        <div class='project-wrapper'>
          <p>Climbing Logger uses vanilla JavaScript frontend with Bootstrap and Ruby on Rails API backend to store and retrieve the users information.</p><br/>
          <img src={`/Climbs1.png`} width={480} height={480} />
          {/* <Image src='/Climbs2.png' width={480} height={480} /> */}
          {/* <Image src='/Climbs3.png' width={480} height={480} /> */}
        </div>
      </section>
    </>
  )
}

function Footer () {
  return (
    <footer>Samuel DeSantis Portfolio Page 2023</footer>
  )
}

