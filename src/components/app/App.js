import React from 'react';
import Chalkboard from '../chalkboard/Chalkboard';
import Navbar from '../navbar/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Chalkboard />
    </div>
  );
};

export default App;
