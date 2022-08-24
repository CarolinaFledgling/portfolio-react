import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import './Projects.scss'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [projects, setProjects] = useState([]);
    const [filterProjects, setFilterProjects] = useState([]);

    useEffect(() => {
        const query = '*[_type== "projects"]'

        client.fetch(query)
            .then((data) => {
                setProjects(data)
                setFilterProjects(data)
                console.log("[data from projects]", data)
            })
            .catch((err) => {
                console.log("Sanity error in projects", err)
            })

    }, [])



    const handleProjectFilter = (item) => {
        setActiveFilter(item)
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === "All") {
                setFilterProjects(projects)
            } else {
                const filteredProjectItem = projects.filter((project) => project.tags.includes(item))
                setFilterProjects(filteredProjectItem)
            }
        }, 500)

    }
    return (
        <section id="projects" className='app__projects section'>
            <div className='container'>
                <h2 className="heading-text">There's nothing quite like building <span className="color-text"> projects</span>  to grow coding skills.</h2>
                <div className='app__project-filter'>
                    {["React", "Wordpress", "HTML/CS/JS", "Agency projects", "All"].map((item, index) => {
                        return (
                            <div
                                key={`project-${index}`}
                                onClick={() => handleProjectFilter(item)}
                                className={`app__project-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''} `}
                            >
                                {item}
                            </div>
                        )
                    })}
                </div>


                <motion.div
                    animate={animateCard}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className="app__project-portfolio"
                >
                    {filterProjects?.map((project, index) => {
                        return (
                            <div className="app__project-item app__flex" key={`project-${index}`}>
                                <div className='app__project-img app__flex'>
                                    <img src={urlFor(project?.imgUrl)} alt={project?.name} />
                                </div>

                                <div className="app__project-content app__flex">
                                    <h4 className="bold-text">{project.title}</h4>
                                    <p className="app__project-description">{project.description}</p>

                                    <div className="app__project-tag app__flex">
                                        <p className="app__project-paragraph">{project.tags[0]}</p>
                                    </div>
                                </div>

                                <div className='app__project-icons'  >
                                    <a href={project.projectLink} target="_blank" rel="noreferrer">
                                        <div className='app__project-icon'>
                                            <AiFillEye />
                                        </div>
                                    </a>
                                    <a href={project.codeLink} target="_blank" rel="noreferrer">
                                        <div className='app__project-icon'>
                                            <AiFillGithub />
                                        </div>
                                    </a>
                                </div>


                            </div>
                        )

                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects