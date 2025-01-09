import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Services from './Components/Services'
import About from './Components/About'
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'
import './app.css'

const App = () => {

  return (
    <div  >

      <Navbar />
      <Header />
      <About />
      <Services />
      <MyWork />
      <Contact />

    </div>
  )
}

export default App
