import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceItem from '../experience-item/ExperienceItem';
import experienceData from '../../data/experience';
import './Experience.scss';

const Experience = () => {
  return (
    <div id="experience" className="experience_container">
      <div className="experience_title">
        <span>Experience</span>
      </div>
      <VerticalTimeline animate={false}>
        {experienceData.map((item) => (
          <ExperienceItem
            key={item.role}
            type={item.type}
            link={item.link}
            logo={item.logo}
            company={item.company}
            location={item.location}
            role={item.role}
            timeline={item.timeline}
            description={item.description}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
