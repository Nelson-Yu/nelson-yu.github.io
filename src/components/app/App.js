import React from 'react';
import About from '../about/About';
import Chalkboard from '../chalkboard/Chalkboard';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Chalkboard />
      <Header />
      <About />
    </div>
  );
};

export default App;
