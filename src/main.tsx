import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Intro from './pages/intro'
import Projects from './pages/projects'
import Service from './pages/services'
import Contact from './pages/contact'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='bg-[#16181D]'> 
      <Intro />
      <Projects />
      <Service />
      <Contact />
    </div>
  </React.StrictMode>,
)
