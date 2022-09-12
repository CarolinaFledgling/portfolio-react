import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Header.scss";
import { PortableText } from "@portabletext/react";
import { client } from "../../client";
import getUrlFromProject from "../../helpers/getUrlFromProject";

const myPortableTextComponents = {
  marks: {
    underline: ({ children, value }) => {
      //console.log("children", { children })
      return <span className="gradient__text">{children}</span>;
    },
  },
};

const Header = () => {
  const [dataBlockContent, setDataBlockContent] = useState([]);

  useEffect(() => {
    const query = '*[_type== "about"]';

    client
      .fetch(query)
      .then((data) => {
        //console.log("[data from about]", { data })

        setDataBlockContent(data);
      })
      .catch((err) => {
        //console.log("Sanity error in about", { err })
      });
  }, []);

  return (
    <header id="about" className="section">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header container"
      >
        {dataBlockContent.map((dataBlock, index) => {
          //console.log('datablock', { dataBlock })
          const url = getUrlFromProject(dataBlock);
          return (
            <div key={`datablock-${index}`} className="app__header-container">
              <div className="app__header-content">
                <h1>{dataBlock.title}</h1>
                <PortableText
                  value={dataBlock.textBlock}
                  components={myPortableTextComponents}
                />
              </div>

              <div className="app__header-image">
                {url ? (
                  <img
                    src={getUrlFromProject(dataBlock)}
                    alt="illustration of a dancing girl"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </motion.div>
    </header>
  );
};

export default Header;
