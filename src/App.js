import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Ig Reels Clone</h1>
      {/* Header */}
      {/* Reels Text */}
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/600px-Instagram_logo_2016.svg.png"
          alt=""
        />
        <h1>Reels</h1>
      </div>
      {/* container for the videos */}
      <div className="app__videos">
        
      </div>
    </div>
  );
}

export default App;
