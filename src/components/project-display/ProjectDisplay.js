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
