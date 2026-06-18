import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing social icons
import logo from '../assets/logo.png';
import '../styles/Header.scss'; // Assuming your header styles are in Header.scss

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);       // Close the main menu if it's open
    setDropdownOpen(false);   // Close the dropdown menu
    scrollToTop();            // Scroll to the top of the page
  };

  // Add scroll effect for header transparency
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
        <Link
            to="/"
            onClick={() => {
              scrollToTop();
            }}
          >
            <img
              src={logo}
              alt="The N.S. Creation Films Logo"
              className="logo"
            />
          </Link>
       <div className="menu-toggle" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <nav className={`nav-menu ${menuOpen ? 'mobile active' : 'mobile'}`}>
        <span className="close-menu" onClick={toggleMenu}>✕</span> {/* Close icon */}
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/services" onClick={handleLinkClick}>Services</Link>
        <div className="dropdown">
          <span onClick={toggleDropdown}>For Photographers</span>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <Link to="/education" onClick={handleLinkClick}>Education</Link>
            <Link to="/presets" onClick={handleLinkClick}>Presets</Link>
          </div>
        </div>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>

        <a
          href="https://gallery.thenscreationfilms.com"
          className="gallery-button"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Gallery
        </a>

        <Link to="/recent-work" className="recent-work-button" onClick={handleLinkClick}>Recent Work</Link>

        <Link to="/book" className="book-button" onClick={handleLinkClick}>Book Appointment</Link>

        {/* Social icons for mobile menu */}
        <div className="footer-socialh">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/The-NSCreation-Films/61563044004833/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/the_n.s.creation_films/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@then.s.creationfilms" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
