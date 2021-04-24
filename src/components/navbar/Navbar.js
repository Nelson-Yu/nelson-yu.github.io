import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar_container">
      <div className="navbar">
        <a className="navbar_btn" href="/#">
          <span>About</span>
        </a>
        <a className="navbar_btn" href="/#">
          <span>Experience</span>
        </a>
        <a className="navbar_btn" href="/#">
          <span>Development</span>
        </a>
        <a className="navbar_btn" href="/#">
          <span>Contact</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
