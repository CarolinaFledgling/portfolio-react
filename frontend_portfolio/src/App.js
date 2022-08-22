import React from 'react';
import { NavBar } from './components';
import { Footer, Skills, Projects, Header } from './container'
import './App.scss'


const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Footer />

    </div>
  )
}

export default App