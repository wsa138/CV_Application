import React, { Component } from 'react';
import General from './Components/General.js';
import Education from './Components/Education';
import Work from './Components/Work';

class App extends Component {
  render() {
    return (
      <div>
        <General />
        <Education />
        <Work />
      </div>
    );
  }
}

export default App;
