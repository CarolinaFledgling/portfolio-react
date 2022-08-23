import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg'
import './NavBar.scss'



const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    return (
        <nav className='app__navbar navbar__section-padding'>
            <div className='app__navbar-logo'>
                <span className="gradient__text">Karolina.K</span>
            </div>
            <ul className='app__navbar-links'>
                {['header', 'skills', 'projects', 'contact'].map((item) => (
                    <li className='app_flex p-text' key={`link-${item}`}>
                        <div>
                        </div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggleNav(true)} />

                {toggleNav && (
                    <motion.div whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}>
                        <HiX onClick={() => setToggleNav(false)} />
                        <ul>
                            {['header', 'skills', 'projects', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggleNav(false)} >{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )
                }
            </div>
        </nav >
    )
}

export default NavBar