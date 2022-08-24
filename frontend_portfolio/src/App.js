import React from 'react';
import { NavBar } from './components';
import { Contact, Skills, Projects, Header } from './container'
import './App.scss'


const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}

export default App