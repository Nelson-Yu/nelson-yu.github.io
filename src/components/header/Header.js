import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_content">
        <p className="header_intro">
          Hey! It&apos;s me, <br className="header_mobile_break" />
          <span className="header_name">Nelson Yu</span>.
        </p>
        <p className="header_description">
          Your friendly neighbourhood...
          <br className="header_mobile_break" />
          <span className="header_role">software developer</span>.
        </p>
      </div>
    </div>
  );
};

export default Header;
