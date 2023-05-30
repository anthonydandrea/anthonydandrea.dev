// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaGithub, FaLinkedin, FaEnvelope, FaMediumM } from "react-icons/fa";
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SvgMediumIcon from "../svgs/SvgMediumIcon";

function Footer() {
  return (
  <footer className="footer">
      <div className="footer__links">
        <a href="https://github.com/anthonydandrea" target="_blank" rel="noopener noreferrer">
            <FaGithub className='footer-icon github-icon'/>
        </a>
        <a href="https://www.linkedin.com/in/anthony-dandrea/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='footer-icon my-linkedin-icon' />
        </a>
        <a href="https://anthony-dandrea.medium.com/" target="_blank" rel="noopener noreferrer">
            <SvgMediumIcon width={20} height={20} className='footer-icon my-medium-icon' />
        </a>
        <a href="mailto:anthonydandrea2@gmail.com">
            <FaEnvelope className='footer-icon email-icon'/>
        </a>
      </div>
      {/* <p className="footer__copy">© {new Date().getFullYear()} Anthony D&apos;Andrea. All rights reserved.</p> */}
    </footer>
  );
}

export default Footer;
