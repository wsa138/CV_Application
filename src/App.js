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
        firstName: 'John',
        lastName: 'Smith',
        title: 'Web Developer',
        email: 'jsmith@email.com',
        phoneNumber: '222-555-0100',
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },

      educationState: {
        college: 'Odin Project University',
        major: 'Web Development',
        degree: 'Bachelor',
        date: '12/21/2021',
      },

      workState: {
        company: 'Google',
        positionTitle: 'Senior Googler',
        mainTasks:
          'Google items using google.com. Google more items using google.com.',
        startDate: '01/01/2020',
        endDate: '01/02/2020',
      },
    };

    this.expandSection = this.expandSection.bind(this);
    this.changeGeneral = this.changeGeneral.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.changeWork = this.changeWork.bind(this);
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
      <div id="main-container container ">
        <h1 className="text-center">CV Application Builder</h1>
        <section id="inputSection">
          <form>
            <div class="inputSectionHeader">
              <h2
                name="generalSection"
                class="component-section text-center"
                onClick={this.expandSection}
              >
                General Info +
              </h2>
            </div>
            {this.state.generalSection.visible ? (
              <General
                generalState={this.state.generalState}
                changeGeneral={this.changeGeneral}
              />
            ) : null}

            <div class="inputSectionHeader">
              <h2
                name="educationSection"
                class="component-section text-center"
                onClick={this.expandSection}
              >
                Education +
              </h2>
            </div>
            {this.state.educationSection.visible ? (
              <Education
                educationState={this.state.educationState}
                changeEducation={this.changeEducation}
              />
            ) : null}

            <div class="inputSectionHeader">
              <h2
                name="workSection"
                class="component-section text-center"
                onClick={this.expandSection}
              >
                Work Experience +
              </h2>
            </div>
            {this.state.workSection.visible ? (
              <Work
                workState={this.state.workState}
                changeWork={this.changeWork}
              />
            ) : null}
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
