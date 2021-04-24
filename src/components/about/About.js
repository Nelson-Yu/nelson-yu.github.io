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
      </div>
      <div className="about_profile_container">
        <p>hello world</p>
      </div>
    </div>
  );
};

export default About;
