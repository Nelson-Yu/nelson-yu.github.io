import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="about_title">
        <span>About</span>
      </div>
      <div className="about_info_container">
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
          <p>
            Hello! I&apos;m a software developer driven by curiosity and passion
            to explore the endless abyss of programming and technology.{' '}
          </p>
          <p>
            I enjoy the many aspects of being a diverse software developer, such
            as: building responsive and full-stack web applications, DevOps
            engineering, mentoring, and many more. Nowadays, you&apos;ll also
            find me dipping my toes into my budding interest of Artificial
            Intelligence (AI).
          </p>
          <p>
            Currently, I&apos;m a software developer for{' '}
            <a
              className="about_profile_link"
              href="https://www.bcchdigital.ca/"
              target="_blank"
              rel="noreferrer"
            >
              Digital Lab
            </a>{' '}
            at BC Children&apos;s Hospital based in Vancouver, BC, Canada, where
            we create impactful projects aimed at improving the wellbeing of
            others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
