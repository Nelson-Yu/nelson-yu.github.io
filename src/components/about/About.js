import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about_container">
      <div className="about_photo_container">
        <div className="about_polaroid">
          <img
            src="/assets/images/ny.jpg"
            alt="Nelson Yu"
            className="about_image"
          />
          <span>Nelson Yu</span>
        </div>
        <div className="about_socials">
          <a
            href="https://github.com/Nelson-Yu"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/icons/github.png" alt="GitHub Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/nelson-yu/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/icons/linkedin.png" alt="LinkedIn Icon" />
          </a>
          <a
            href="https://drive.google.com/file/d/1DZ0Vi_NIVDOxMrba6KIIRuj4fAG4dhAd/view"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/icons/resume.png" alt="Resume Icon" />
          </a>
        </div>
      </div>
      <div className="about_profile_container">
        <p>hello world</p>
      </div>
    </div>
  );
};

export default About;
