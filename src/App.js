import React, { Component } from 'react';
import General from './Components/General.js';
import Education from './Components/Education';
import Work from './Components/Work';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalSection: {
        visible: false,
      },
      educationSection: {
        visible: false,
      },
      workSection: {
        visible: false,
      },

      generalState: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.expandSection = this.expandSection.bind(this);
    this.changeGeneral = this.changeGeneral.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  expandSection(event) {
    let section = event.target.getAttribute('name');
    let prevVisibility = this.state[section].visible;
    console.log(prevVisibility);
    console.log(this.state);

    this.setState((prevState) => {
      return {
        ...prevState,
        [section]: {
          visible: !prevVisibility,
        },
      };
    });
  }

  changeGeneral(event) {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        generalState: {
          ...this.state.generalState,
          [name]: value,
        },
      };
    });
  }

  render() {
    console.log(this.state.generalState);
    return (
      <div id="main-container">
        <h1>CV Application Builder</h1>
        <form>
          <h2>General Info</h2>
          <h3 name="generalSection" onClick={this.expandSection}>
            +
          </h3>
          {this.state.generalSection.visible ? (
            <General
              generalState={this.state.generalState}
              changeGeneral={this.changeGeneral}
            />
          ) : null}

          <h2>Education</h2>
          <h3 name="educationSection" onClick={this.expandSection}>
            +
          </h3>
          {this.state.educationSection.visible ? <Education /> : null}

          <h2>Work Experience</h2>
          <h3 name="workSection" onClick={this.expandSection}>
            +
          </h3>
          {this.state.workSection.visible ? <Work /> : null}
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
