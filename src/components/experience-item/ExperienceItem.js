import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import ExperienceLogo from '../experience-logo/ExperienceLogo';
import './ExperienceItem.scss';

const ExperienceItem = ({
  type,
  link,
  logo,
  company,
  location,
  role,
  timeline,
  description,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      icon={<ExperienceLogo type={type} />}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={`/assets/logos/${logo}`}
          alt={company}
          className="vertical-timeline-logo"
        />
      </a>
      <div className="vertical-timeline-location">
        <div className="vertical-timeline-header">{company}</div>
        <div className="vertical-timeline-subheader">{location}</div>
      </div>
      <div className="vertical-timeline-role">
        <div className="vertical-timeline-header">{role}</div>
        <div className="vertical-timeline-subheader">{timeline}</div>
      </div>
      {description && (
        <p className="vertical-timeline-description">{description}</p>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceItem;
