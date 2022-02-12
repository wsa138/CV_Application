import React, { Component } from 'react';
import General from './Components/General.js';
import Education from './Components/Education';
import Work from './Components/Work';
import './style.css';

class App extends Component {
  render() {
    return (
      <div id="main-container">
        <h1>CV Application</h1>
        <form>
          <General />
          <Education />
          <Work />
        </form>
      </div>
    );
  }
}

export default App;
