import React from 'react';
import './ProjectDisplay.scss';

const ProjectDisplay = ({ project }) => {
  return (
    <div className="project_display_container" style={{ color: 'white' }}>
      <div className="project_display_content">
        <p>
          {project.title}
          {project.title}
        </p>
      </div>
      <div className="project_display_screenshots">
        {project.screenshots.map((screenshot, index) => (
          <div
            key={index}
            className={`project_display_polaroid project_display_polaroid_${index}`}
          >
            <img
              src={`/assets/screenshots/${screenshot}`}
              alt={`screenshot_${index}`}
              className="project_display_image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;
