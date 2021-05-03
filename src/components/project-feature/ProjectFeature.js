import React from 'react';
import './ProjectFeature.scss';

const ProjectFeature = ({ project }) => {
  return (
    <div style={{ color: 'white' }}>
      <p>{project.title}</p>
    </div>
  );
};

export default ProjectFeature;
