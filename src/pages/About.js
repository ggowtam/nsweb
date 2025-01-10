import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import mobileParallaxImage from '../assets/mobilepa.jpg'; 
import parallaxImage1 from '../assets/para2.jpg';
import presetImage1 from '../assets/Home19.jpg';
import presetImage2 from '../assets/Home14.jpg';
import presetImage3 from '../assets/Home6.jpg';
import '../styles/About.scss';

const About = () => (
  <>
  <div>
    <Parallax className="parallax-container" bgImage={parallaxImage1} strength={500}>
      <div className="about-content">
        <div className="about-text">
          <h3>
            We are a team of authentic filmmakers and <br/>
            photographers here to capture your special <br/>
            moments in the utmost raw and authentic way
          </h3>
          <p>
            Capturing the essence of the moment itself and projecting it <br/>
            through the timeless medium of visuals and sound for you to <br/>
            reminisce some of life’s most monumental moments
          </p>
          <Link to="/services" className="view-collection-btn">View the Collection</Link>
        </div>
      </div>
    </Parallax>
   
  
    </div>
    <div className="white-block">
      <div className="centered-text">
        <strong>We draw on contemporary influences while staying</strong><br/>
        <strong>true to capturing the traditional spirit of Indian weddings.</strong><br/><br/>
        <span>
          By getting to know you, and fulfilling your vision, we strive <br/>
          to create photography which evokes nostalgic sentiments, <br/>
          candid moments and a unique mood to your story.
        </span>
      </div>
      <div className="image-gallerya">
        <img src={presetImage1} alt="Preset 1" />
        <img src={presetImage2} alt="Preset 2" />
        <img src={presetImage3} alt="Preset 3" />
      </div>
    </div>
  </>
);

export default About;
