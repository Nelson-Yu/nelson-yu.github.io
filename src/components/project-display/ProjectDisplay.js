import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import useDocumentDimensions from '../../hooks/useDocumentDimensions';
import { isMobileOnly } from 'react-device-detect';
import './ProjectDisplay.scss';
import 'react-image-lightbox/style.css';

const ProjectDisplay = ({ project }) => {
  const { width } = useDocumentDimensions();
  useDocumentDimensions;
  const [openLightbox, setOpenLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setPhotoIndex(index);
    setOpenLightbox(true);
  };

  return (
    <div className="project_display_container" style={{ color: 'white' }}>
      <div className="project_display_content">
        <div className="project_display_title">{project.title}</div>
        {project.link && (
          <div className="project_display_link">
            <span>Link:</span>{' '}
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.link}
            </a>
          </div>
        )}
        <div className="project_display_date">
          <span>Date:</span> {project.date}
        </div>
        <div className="project_display_role">
          <span>Role:</span> {project.role}
        </div>
        <div className="project_display_description">
          <span>Description:</span>
          <br />
          {project.description}
        </div>
        <div className="project_display_stack">
          <span>Stack:</span>
          <br />
          <div className="project_display_stack_icons">
            {project.stack.map((screenshot, index) => (
              <img
                key={index}
                className={`project_display_stack_icon_${index}`}
                src={`/assets/tech/${screenshot}`}
                alt={screenshot}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="project_display_screenshots">
        {project.screenshots.map((screenshot, index) => (
          <div
            key={index}
            className={`project_display_polaroid project_display_polaroid_${index}`}
            onClick={() => {
              handleOpenLightbox(index);
            }}
            onKeyDown={() => {
              handleOpenLightbox(index);
            }}
            role="button"
            tabIndex={0}
          >
            <img
              src={`/assets/screenshots/${screenshot}`}
              alt={`screenshot_${index}`}
              className="project_display_image"
            />
          </div>
        ))}
      </div>

      {openLightbox && project.screenshots.length > 1 && (
        <Lightbox
          mainSrc={`/assets/screenshots/${project.screenshots[photoIndex]}`}
          nextSrc={`/assets/screenshots/${
            project.screenshots[(photoIndex + 1) % project.screenshots.length]
          }`}
          prevSrc={`/assets/screenshots/${
            project.screenshots[
              (photoIndex + project.screenshots.length - 1) %
                project.screenshots.length
            ]
          }`}
          onCloseRequest={() => {
            setOpenLightbox(false);
          }}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + project.screenshots.length - 1) %
                project.screenshots.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % project.screenshots.length)
          }
          imagePadding={width < 768 || isMobileOnly ? 50 : 100}
          reactModalStyle={{ zIndex: 1500 }}
        />
      )}
    </div>
  );
};

export default ProjectDisplay;
