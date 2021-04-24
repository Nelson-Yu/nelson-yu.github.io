import React from 'react';
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
    </div>
  );
};

export default App;
