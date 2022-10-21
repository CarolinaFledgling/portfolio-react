import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./SocialFields.scss";

function SocialFields() {
  return (
    <div className="app__contact-social">
      <a
        href="https://github.com/CarolinaFledgling"
        target="_blank"
        rel="noreferrer"
        aria-label="Github link"
      >
        <div className="app__project-icon github">
          <FaGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/karolina-kulinska-870124111/"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin link"
      >
        <div className="app__project-icon linkedin">
          <FaLinkedin />
        </div>
      </a>
    </div>
  );
}

export default SocialFields;
