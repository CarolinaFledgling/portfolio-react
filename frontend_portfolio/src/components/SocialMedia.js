import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/CarolinaFledgling" target="_blank" rel="noreferrer"><FaGithub /></a>

        </div>
        <div>
            <a href="https://www.linkedin.com/in/karolina-kuli%C5%84ska-870124111/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
    </div>
);

export default SocialMedia;