import React, { useState } from 'react';
import projectsData from '../../data/projects';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Development.scss';

const Development = () => {
  const [openProject, setOpenProject] = useState(false);

  return (
    <div id="development" className="development_container">
      <div className="development_title">
        <span>Development</span>
      </div>
      <div className="development_projects_container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`development_project_polaroid development_project_polaroid_${index}`}
            onClick={() => {
              setOpenProject(true);
            }}
            onKeyDown={() => {
              setOpenProject(true);
            }}
            role="button"
            tabIndex={0}
          >
            <img
              src={`/assets/screenshots/${project.screenshots[0]}`}
              alt={project.title}
              className="development_project_image"
            />
            <span>{project.title}</span>
          </div>
        ))}
      </div>
      <SlidingPane
        className="project_feature"
        overlayClassName="project_feature_overlay"
        isOpen={openProject}
        width="100%"
        from="bottom"
        hideHeader={true}
        onRequestClose={() => {
          setOpenProject(false);
        }}
      >
        <div
          className="project_feature_button"
          onClick={() => {
            setOpenProject(false);
          }}
          onKeyDown={() => {
            setOpenProject(false);
          }}
          role="button"
          tabIndex={0}
        >
          <div className="project_feature_cross">
            <div className="project_feature_cross_1">
              <div></div>
            </div>
            <div className="project_feature_cross_2">
              <div></div>
            </div>
          </div>
        </div>
      </SlidingPane>
    </div>
  );
};

export default Development;
