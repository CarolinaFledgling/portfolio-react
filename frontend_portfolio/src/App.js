import React from 'react';
import { NavBar } from './components';
import { About, Footer, Skills, Projects, Header } from './container'



const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />

    </div>
  )
}

export default App