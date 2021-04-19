import React from 'react';
import Chalkboard from '../chalkboard/Chalkboard';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Chalkboard />
      <span className="test">Hello World</span>
    </div>
  );
};

export default App;
