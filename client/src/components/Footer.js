import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="social-container">
    <a href="https://www.linkedin.com/in/connerlaursenk/" target="_blank"
      className="linkedin social">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a href="https://github.com/connerlaursen" target="_blank"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      
</div>


  )
}

export default Footer