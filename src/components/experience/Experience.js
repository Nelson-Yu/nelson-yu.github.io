import React from 'react';
import EducationItem from '../education-item/EducationItem';
import './Experience.scss';

const Experience = () => {
  return (
    <div id="experience" className="experience_container">
      <div className="experience_title">
        <span>Experience</span>
      </div>
      <div className="experience_education_container">
        <div className="experience_education_title">
          <span>Education</span>
        </div>
        <div className="experience_education_items">
          <EducationItem />
          <EducationItem />
        </div>
      </div>
      <div className="experience_work_container">
        <div className="experience_work_title">
          <span>Work</span>
        </div>
        <div className="experience_work_items"></div>
      </div>
    </div>
  );
};

export default Experience;
