import React from 'react';
import { isMobileOnly } from 'react-device-detect';
import useDocumentDimensions from '../../hooks/useDocumentDimensions';
import About from '../about/About';
import Chalkboard from '../chalkboard/Chalkboard';
import Development from '../development/Development';
import Experience from '../experience/Experience';
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './App.scss';

const App = () => {
  const { width } = useDocumentDimensions();

  const renderMenu = () => {
    if (isMobileOnly || width < 768) {
      return <HamburgerMenu />;
    } else {
      return (
        <>
          <Navbar />
          <Chalkboard />
        </>
      );
    }
  };

  return (
    <div className="App">
      {renderMenu()}
      <Header />
      <About />
      <Experience />
      <Development />
    </div>
  );
};

export default App;
