import React from 'react';
import './ProjectDisplay.scss';

const ProjectDisplay = ({ project }) => {
  return (
    <div className="project_display_container" style={{ color: 'white' }}>
      <div className="project_display_screenshots">
        <p>{project.title}</p>
      </div>
      <div className="project_display_content">
        <p>
          {project.title}
          {project.title}
        </p>
      </div>
    </div>
  );
};

export default ProjectDisplay;
