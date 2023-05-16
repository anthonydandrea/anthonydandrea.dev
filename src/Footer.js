import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
        <a href="mailto:anthonydandrea2@gmail.com">
            <FaEnvelope className='footer-icon email-icon'/>
        </a>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Anthony D'Andrea. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
