import React, { useState, useEffect } from "react";
import {
  AiFillEye,

  AiOutlineLogin,
  AiOutlineDashboard,
} from "react-icons/ai";

import { motion } from "framer-motion";
import { client } from "../../client";
import "./Projects.scss";
import getUrlFromProject from "../../helpers/getUrlFromProject";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type== "projects"]';

    client
      .fetch(query)
      .then((data) => {
        setProjects(data);
        setFilterProjects(data);
        console.log("[data from projects]", data);
      })
      .catch((err) => {
        console.log("Sanity error in projects", err);
      });
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterProjects(projects);
      } else {
        const filteredProjectItem = projects.filter((project) =>
          project.tags.includes(item)
        );
        setFilterProjects(filteredProjectItem);
      }
    }, 500);
  };

  return (
    <section id="projects" className="app__projects section">
      <div className="container">
        <h2 className="app__projects-heading-text">What I've Built</h2>
        <p className="app__projects-description">
          Filter projects by: commercial, personal and all{" "}
        </p>
        <div className="app__project-filter">
          {["Commercial project", "Personal project", "All"].map(
            (item, index) => {
              return (
                <div
                  key={`project-${index}`}
                  onClick={() => handleProjectFilter(item)}
                  className={`app__project-filter-item app__flex p-text ${
                    activeFilter === item ? "item-active" : ""
                  } `}
                >
                  {item}
                </div>
              );
            }
          )}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__project-portfolio"
        >
          {filterProjects?.map((project, index) => {
            const url = getUrlFromProject(project);
            const hasLoginLink = !!project.loginLink;
            const hasDashboardLink = !!project.dashboardLink;
            return (
              // card
              <div className="app__project-item" key={`project-${index}`}>
                {url ? (
                  <img src={getUrlFromProject(project)} alt={project.title} />
                ) : (
                  <span>No Image</span>
                )}

                {/* card body */}
                <div className="app__project-content">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} link`}
                  >
                    <h3 className="app__projects-title">{project.title}</h3>
                  </a>
                  <p className="app__project-description">
                    {project.description}
                  </p>

                  <div className="app__project-tag">
                    <p className="app__project-paragraph">{project.tags[0]}</p>
                  </div>

                  <div className="app__project-icons">
                    {hasLoginLink && (
                      <a
                        href={project.loginLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} login link`}
                      >
                        <div className="app__project-icon">
                          <AiOutlineLogin />
                        </div>
                      </a>
                    )}

                    {hasDashboardLink && (
                      <a
                        href={project.dashboardLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} dashboard link`}
                      >
                        <div className="app__project-icon">
                          <AiOutlineDashboard />
                        </div>
                      </a>
                    )}

                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} link`}
                      >
                        <div className="app__project-icon">
                          <AiFillEye />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="app-project-button">
        <a
          className="primary-button"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/CarolinaFledgling"
          aria-label="link to github projects"
        >
          ALL GITHUB REPOS
        </a>
      </div>
    </section>
  );
};

export default Projects;
