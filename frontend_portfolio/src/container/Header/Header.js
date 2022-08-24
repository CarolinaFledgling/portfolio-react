import React from 'react'
import { motion } from 'framer-motion';
import header from '../../assets/header2.svg'
import './Header.scss'
import { AppWrap } from '../../wrapper';

const Header = () => {
  return (
    <div id="header" className='section'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header container'
      >
        <div className="app__header-content">
          <h1>Hi there! <span>👋</span></h1>
          <p>I&apos;m a self-taught <span className="gradient__text">Frontend Developer</span> with 1 year commercial experience using <span className='app__header-bold'>React</span>, <span className='app__header-bold'>Sanity (CMS)</span>, <span className='app__header-bold'>JS</span>, <span className='app__header-bold'>HTML</span>, <span className='app__header-bold'>CSS</span>, <span className='app__header-bold'>Next.js</span>, <span className='app__header-bold'>Formik</span>, <span className='app__header-bold'>MUI</span>.</p>
          <p>I&apos;m interested in continuing building both Static and SPA web applications for both desktop and mobile devices.</p>
          <p>Now I&apos;m spending my time building projects with React JS, Sanity, and
            learning new technologies.</p> <span className="span-text"> I'm open for new opportunities.</span>
        </div>

        <div className="app__header-image">
          <img src={header} alt="illustration of a dancing girl" />
        </div>
      </motion.div>
    </div>
  )
}

export default Header