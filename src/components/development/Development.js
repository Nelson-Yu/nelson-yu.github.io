import React from 'react';
import projectsData from '../../data/projects';
import './Development.scss';

const Development = () => {
  return (
    <div id="development" className="development_container">
      <div className="development_title">
        <span>Development</span>
      </div>
      <div className="development_projects_container">
        <div className="development_projects">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="development_project_polaroid"
              style={{
                transform: `rotate(${
                  Math.round((Math.random() * 5 - 2.5) * 10) / 10
                }deg)`,
              }}
              onClick={() => {
                console.log('hi');
              }}
              onKeyDown={() => {
                console.log('hi');
              }}
              role="button"
              tabIndex={0}
            >
              <img
                src={`/assets/screenshots/${project.screenshot}`}
                alt={project.title}
                className="development_project_image"
              />
              <span>{project.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Development;
