import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client
      .fetch(query)
      .then((data) => {
        setSkills(data);
        //console.log(data)
      })
      .catch((error) => {
        console.error("Sanity fetching failed", error);
      });
  }, []);

  /*
  const skills = [
    {
      title: 'Good understanding',
      descriptions: ["React"]
    },
    {
      title: 'Basic understanding',
      descriptions: ["js"]
    },
    {
      title: 'Want to learn',
      descriptions: ["React", "MUI", "React", "MUI", "React", "MUI",]
    },
  ]
  */

  return (
    <div id="skills" className="app__skills section">
      <div className="container">
        <h2 className="heading-text">
          It is not easy to assess your own{" "}
          <span className="color-text"> skills.</span>
        </h2>
        <div className="app__skills-profiles">
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={skill.title + index}
            >
              <h3 className="app__profile-title">{skill.title}</h3>
              {skill?.description?.map((description, index) => (
                <ul
                  key={`description-${index}`}
                  className="app__profile-description"
                >
                  <li className="app__profile-skill">{description}</li>
                </ul>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
