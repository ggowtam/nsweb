import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust this path if needed
import '../styles/Footer.scss'; // Import the CSS for styling

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="The N.S. Creation Films Logo" className="logo" />
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <div className="links-grid">
              <ul>
                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
                {/* <li><Link to="/lovenotes" onClick={scrollToTop}>Love Notes</Link></li> */}
                <li><Link to="/education" onClick={scrollToTop}>Education</Link></li>
              </ul>
              <ul>
                <li><Link to="/presets" onClick={scrollToTop}>Presets</Link></li>
                <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
                <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
                <li><Link to="/book" onClick={scrollToTop}>Book Appointment</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-divider"></div> {/* Divider between Quick Links and Follow Us */}
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/the_n.s.creation_films/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/people/The-NSCreation-Films/61563044004833/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com/@then.s.creationfilms" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>© 2016 THE N.S.CREATION FILMS</p>
      </div>
    </footer>
  );
};

export default Footer;
