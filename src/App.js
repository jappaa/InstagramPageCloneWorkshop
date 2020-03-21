import React from 'react';

import './App.css';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">

      <div id='navigation'>
          <div id='logo'>
          <img  style={{height: '29px'}} alt="Instagram" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          </div>
          <div id='search'>
          <input type="text" autocapitalize="none" placeholder="Search" value="" />
          </div>
          <div id='icons' style={{width: '10%'}}>
          </div>
      </div>

      <div id='content'>
        <Gallery />
      </div>
    </div>
  );
}

export default App;
