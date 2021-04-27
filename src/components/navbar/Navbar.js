import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar_container">
      <div className="navbar">
        <a className="navbar_btn" href="#about">
          <span>About</span>
        </a>
        <a className="navbar_btn" href="#experience">
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
