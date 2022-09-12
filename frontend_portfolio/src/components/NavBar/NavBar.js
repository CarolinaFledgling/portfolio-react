import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./NavBar.scss";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-container container">
        <span className="app__navbar-logo">Karolina.K </span>
        <ul className="app__navbar-links">
          {["about", "skills", "projects", "contact"].map((item) => (
            <li className="app_flex p-text" key={`link-${item}`}>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggleNav(true)} />

          {toggleNav && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggleNav(false)} />
              <ul>
                {["about", "skills", "projects", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggleNav(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
