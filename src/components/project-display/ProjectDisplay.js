import React from 'react';
import './ProjectDisplay.scss';

const ProjectDisplay = ({ project }) => {
  return (
    <div className="project_display_container" style={{ color: 'white' }}>
      <p>{project.title}</p>
    </div>
  );
};

export default ProjectDisplay;
