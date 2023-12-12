import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Logo from '../images/logo.jpeg';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (

    <footer className="Footer ">
      <div className="Footer-container">
        <div className="Footer-column">
          <img src={Logo} style={{ width: '200px', height: '100px', paddingLeft: '50px' }} alt="ABC logo" />
          <p style={{ paddingLeft: '58px' }}>ABC International School</p>
        </div>
        <div className="Footer-column">
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/">
                <FaLinkedin />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <FaTwitter />
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebook />
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="Footer-column">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:contact@abcschool.com">contact@abcschool.com</a>
            </li>
            <li>
              <a href="https://abcschool.com/careers">Careers</a>
            </li>
            <li>
              Aspiring to become a teacher? Send your resume to
              <a href="mailto:careers@abcschool.com"> work@abcschool.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer-copyright">
        Copyright &copy; 2023 ABC International School
      </div>
    </footer>
  );
};

export default Footer;
