import React, { useEffect, useRef } from 'react';
import videoSrc from '../assets/cinematic film.webm'; // Updated video source to .webm format
import { Parallax } from 'react-parallax';
import parallaxImage1 from '../assets/para3.jpg';
import mobileParallaxImage from '../assets/mobilep.jpg'; // Mobile-specific image
import logo2 from '../assets/logo2.png';

import Home2 from '../assets/Home2.jpg';
import pre15 from '../assets/pre2/pre15.jpg';
import pre93 from '../assets/pre4/pre93.jpg';

import pre17 from '../assets/pre2/pre17.jpg';
import Home4 from '../assets/Home4.jpg';
import Home5 from '../assets/Home5.jpg';
import Home6 from '../assets/Home6.jpg';
import Homepic from '../assets/Homepic.jpg';

import '../styles/Home.scss'; 
import ImageOverlay from '../components/ImageOverlay';
import ImageTextSection from '../components/ImageTextSection';

import leftImage from '../assets/preset6.jpg'; 
import rightImage from '../assets/preset6.jpg'; 

const Home = () => {
  const videoRef = useRef(null);
  const scrollHandlerRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        requestAnimationFrame(() => {
          videoRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
        });
      }
    };



    scrollHandlerRef.current = handleScroll;
    window.addEventListener('scroll', scrollHandlerRef.current);



    return () => {
      window.removeEventListener('scroll', scrollHandlerRef.current);
    };
  }, []);

  return (
    <div>
      <div className="home-container">
        <video ref={videoRef} autoPlay loop muted playsInline className="video-background">
          <source src={videoSrc} type="video/webm" /> {/* Ensure format compatibility */}
          Your browser does not support the video tag.
        </video>
        <div className="overlay-content">
          <h1>THE N.S.CREATION FILMS</h1>
        </div>
      </div>

      <div className="content-container">
        <div className="left-side">
          <p>CAPTURING <strong>ORGANIC</strong>,</p>
          <p>NOSTALGIC, <strong>RETRO</strong> &</p>
          <p><strong>RAW</strong> MOMENTS OF</p>
          <p>YOUR SPECIAL DAY.</p>
        </div>
        <div className="footer-divider"></div>
        <div className="center">
          <img src={logo2} alt="Logo" className="logo2" />
        </div>
        <div className="footer-divider"></div>
        <div className="right-side">
          <p>Through our soulful approach to storytelling, we capture</p>
          <p>all of the real, authentic, and organic moments of your</p>
          <p>wedding day for you to cherish for years to come.</p>
        </div>
      </div>

      <div>
        <div className="image-overlay-container">
          <ImageOverlay 
            imageSrc={Homepic} 
            altText="Preset" 
            overlayText="Relive all of the beautiful, touching, & emotional moments of your special day" 
            overlayTitle="LOVE FROM THE SOUL" 
            linkText="READ MORE" 
            linkTo="/lovenotes" 
          />
        </div>

        <div className="text-container">
          <div className="text-content">
            <h2 className="adobe-jenson">
              With an eye for detail and our timeless cinematic style, <br />
              it’s vital to us that we tell your story through a lens that
            </h2>
            <p className="highlighted">
              <span>Reflects the <strong>essence</strong></span>
              <span>Of <strong>your love</strong></span>
            </p>
          </div>

          <div className="image-grid">
            <img src={pre17} alt="Preset 1" className="image-item image-left" />
            <img src={Home2} alt="Preset 2" className="image-item image-middle-left" />
            <img src={pre93} alt="Preset 3" className="image-item image-center" />
            <img src={Home4} alt="Preset 4" className="image-item image-middle-right" />
            <img src={Home5} alt="Preset 5" className="image-item image-right" />
            <img src={Home6} alt="Preset 6" className="image-item image-extra-right" />
          </div>
        </div>

        <ImageTextSection 
          leftImageSrc={leftImage}
          rightImageSrc={rightImage}
        />
      </div>

      <div>
        <Parallax className="parallax-container" bgImage={parallaxImage1} strength={500}>
          <div style={{ height: '300px' }}></div>
        </Parallax>

        {/* Mobile-Specific Parallax */}
      
      </div>
    
    </div>
  );
};

export default Home;
