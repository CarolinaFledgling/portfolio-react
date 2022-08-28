import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Header.scss'
import { PortableText } from '@portabletext/react'
import { getImageBuilder, client } from '../../client';



const myPortableTextComponents = {
  marks: {
    underline: ({ children, value }) => {
      console.log("children", { children })
      return (
        <span className="gradient__text">
          {children}
        </span>
      )
    },
  },
}

const Header = () => {
  const [dataBlockContent, setDataBlockContent] = useState([])

  useEffect(() => {
    const query = '*[_type== "about"]'

    client.fetch(query)
      .then((data) => {
        console.log("[data from about]", { data })

        setDataBlockContent(data)

      
      })
      .catch((err) => {
        console.log("Sanity error in about", { err })
      })

  }, [])

  return (
    <header id="about" className='section'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header container'
      >
        {dataBlockContent.map((dataBlock, index) => {
          console.log('datablock', { dataBlock })
          const url = getUrl(dataBlock)
          return (
            <div key={`datablock-${index}`} className="app__header-container">
              <div className="app__header-content">
                <h1>{dataBlock.title}</h1>
                {/* <p>I&apos;m a self-taught <span className="gradient__text">Frontend Developer</span> with 1 year commercial experience using: <span className='app__header-bold'>React</span>, <span className='app__header-bold'>Sanity (CMS)</span>, <span className='app__header-bold'>JavaScript</span>, <span className='app__header-bold'>Html</span>, <span className='app__header-bold'>Css</span>, <span className='app__header-bold'>Next.js</span>, <span className='app__header-bold'>Formik</span>, <span className='app__header-bold'> and working with Rest API</span>.</p>
                <p>I&apos;m interested in continuing building both Static and SPA web applications for both desktop and mobile devices.</p>
                <p>Now I&apos;m spending my time building projects with React, Sanity, and
                  learning new technologies.</p>
                <p>In my spare time I love playing team sports:⚽🏀🏐🎾🏓🏸and Nintendo games 🎮 </p>
                <span className="span-text"> I'm open for new opportunities.</span> */}
                <PortableText
                  value={dataBlock.textBlock}

                  // serializers={{
                  //   span: (props) => <span className="gradient__text" {...props} />,


                  // }}

                  components={myPortableTextComponents}
                />

              </div>

              <div className="app__header-image">
                {url ? <img src={getUrl(dataBlock)} alt="illustration of a dancing girl" /> : ""}
              </div>
            </div>
          )


        })}

      </motion.div>
    </header>
  )
}

export default Header


function getUrl(dataBlock) {
  try {
    const url = getImageBuilder(dataBlock?.imgUrl).url()
    return url
  } catch (err) {
    console.log(err)
    return undefined
  }

}