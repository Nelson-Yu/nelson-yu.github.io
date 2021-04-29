import React, { useEffect, useState } from 'react';
import './ExperienceLogo.scss';

const ExperienceLogo = ({ type }) => {
  const [logoFile, setLogoFile] = useState(null);

  useEffect(() => {
    switch (type) {
      case 'work':
        setLogoFile('work.png');
        break;
      case 'education':
        setLogoFile('education.png');
        break;
      default:
        console.log('Icon type does not exist');
    }
  }, [type]);

  return (
    <div className="timeline_icon_container">
      <img
        src={`/assets/icons/${logoFile}`}
        alt={type}
        className="timeline_icon"
      />
    </div>
  );
};

export default ExperienceLogo;
