import React, { Component } from 'react';
import General from './Components/General.js';
import Education from './Components/Education';
import Work from './Components/Work';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id="main-container">
        <h1>CV Application</h1>
        <form>
          <General />
          <Education />
          <Work />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
