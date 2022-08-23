import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const handleProjectFilter = () => {

    }
    return (
        <>
            <h2 className="head-text">There's nothing quite like building <span className="gradient__text"> projects</span>  to grow coding skills.</h2>
            <div className='app_work-filter'>
                {["React", "Wordpress", "HTML/CS/Js", "Picapoint", "All"].map((item, index) => {
                    <div
                        key={`project-${index}`}
                        onClick={() => handleProjectFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''} `}
                    >

                    </div>
                })}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >

            </motion.div>
        </>
    )
}

export default Projects