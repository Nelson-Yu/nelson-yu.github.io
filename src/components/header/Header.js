import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_content">
        <p className="header_intro">
          Hey! It&apos;s me, <span className="header_name">Nelson Yu</span>.
        </p>
        <p className="header_description">
          Your friendly neighbourhood...
          <span className="header_role">software developer</span>.
        </p>
      </div>
    </div>
  );
};

export default Header;
