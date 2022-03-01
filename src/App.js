import React, { Component } from 'react';
import General from './Components/General.js';
import Education from './Components/Education';
import Work from './Components/Work';
import CV from './Components/CV';
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

      educationState: {
        college: '',
        major: '',
        degree: '',
        date: '',
      },

      workState: {
        job: '',
        positionTitle: '',
        mainTasks: '',
        startDate: '',
        endDate: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.expandSection = this.expandSection.bind(this);
    this.changeGeneral = this.changeGeneral.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.changeWork = this.changeWork.bind(this);
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

  changeEducation(event) {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        educationState: {
          ...this.state.educationState,
          [name]: value,
        },
      };
    });
  }

  changeWork(event) {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        workState: {
          ...this.state.workState,
          [name]: value,
        },
      };
    });
  }

  render() {
    return (
      <div id="main-container">
        <h1>CV Application Builder</h1>
        <section id="inputSection">
          <form>
            <div class="inputSectionHeader">
              <h2>General Info</h2>
              <h3 name="generalSection" onClick={this.expandSection}>
                +
              </h3>
            </div>
            {this.state.generalSection.visible ? (
              <General
                generalState={this.state.generalState}
                changeGeneral={this.changeGeneral}
              />
            ) : null}

            <div class="inputSectionHeader">
              <h2>Education</h2>
              <h3 name="educationSection" onClick={this.expandSection}>
                +
              </h3>
            </div>
            {this.state.educationSection.visible ? (
              <Education
                educationState={this.state.educationState}
                changeEducation={this.changeEducation}
              />
            ) : null}

            <div class="inputSectionHeader">
              <h2>Work Experience</h2>
              <h3 name="workSection" onClick={this.expandSection}>
                +
              </h3>
            </div>
            {this.state.workSection.visible ? (
              <Work
                workState={this.state.workState}
                changeWork={this.changeWork}
              />
            ) : null}
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </section>

        <section id="displaySection">
          <CV
            educationInfo={this.state.educationState}
            workInfo={this.state.workState}
            generalInfo={this.state.generalState}
          />
        </section>
      </div>
    );
  }
}

export default App;
