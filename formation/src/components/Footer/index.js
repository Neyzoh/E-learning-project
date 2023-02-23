import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <footer>
      <Container>
        <div className='singleCol socia-media-icons-black d-flex justify-content-around padding-top'>
          <a href='#Facebook'>
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href='#Twitter'>
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href='#Instagram'>
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <a href='#Linkedin'>
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
      </Container>
          <ul className="list-inline">
              <a className="list-inline-item" href="#home">Home</a>
              <a className="list-inline-item" href="#services">Services</a>
              <a className="list-inline-item" href="#about">About</a>
              <a className="list-inline-item" href="#terms">Terms</a>
              <a className="list-inline-item" href="#pv">Privacy Policy</a>
          </ul>
          <p className="copyright">Company Name © 2018</p>
    </footer>
  );
}

export default Footer;
