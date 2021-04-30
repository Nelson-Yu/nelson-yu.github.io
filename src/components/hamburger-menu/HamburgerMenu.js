import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="hamburger_menu_container">
      <div className="hamburger_menu_button">
        <Hamburger right toggled={isOpen} toggle={setOpen} />
      </div>
      <Menu
        isOpen={isOpen}
        width={'100%'}
        right
        noOverlay
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <a className="hambuger_menu_item" href="#about" onClick={handleClose}>
          <span>About</span>
        </a>
        <a
          className="hambuger_menu_item"
          href="#experience"
          onClick={handleClose}
        >
          <span>Experience</span>
        </a>
        <a className="hambuger_menu_item" href="#about" onClick={handleClose}>
          <span>Development</span>
        </a>
        <a className="hambuger_menu_item" href="#about" onClick={handleClose}>
          <span>Contact</span>
        </a>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
