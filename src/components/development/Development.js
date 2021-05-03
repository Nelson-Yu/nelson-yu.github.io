import React, { useState } from 'react';
import projectsData from '../../data/projects';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Development.scss';
import ProjectFeature from '../project-feature/ProjectFeature';

const Development = () => {
  const [openProject, setOpenProject] = useState(false);
  const [featureProject, setFeatureProject] = useState(null);

  const handleOpenProject = (project) => {
    setFeatureProject(project);
    setOpenProject(true);
  };

  const handleCloseProject = () => {
    setOpenProject(false);
  };

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
              handleOpenProject(project);
            }}
            onKeyDown={() => {
              handleOpenProject(project);
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
        onRequestClose={handleCloseProject}
      >
        <div
          className="project_feature_button"
          onClick={handleCloseProject}
          onKeyDown={handleCloseProject}
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
        <ProjectFeature project={featureProject} />
      </SlidingPane>
    </div>
  );
};

export default Development;
