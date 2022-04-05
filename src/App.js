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
        location: 'New York, NY',
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },

      educationState: {
        college: 'Odin Project University',
        major: 'Web Development',
        degree: 'B.S.',
        date: '12/21/2021',
        college2: 'Free Code Camp Institute',
        major2: 'React',
        degree2: 'A.A.',
        date2: '12/21/2020',
      },

      workState: {
        company: 'Google',
        positionTitle: 'Senior Googler',
        mainTasks:
          'Google items using google.com. Google more items using google.com.',
        startDate: '01/01/2020',
        endDate: '01/02/2020',
        company2: 'Microsoft',
        positionTitle2: 'Senior Micro Softer',
        mainTasks2: 'Do Microsoft stuff. Do even more Microsoft stuff.',
        startDate2: '01/01/2019',
        endDate2: '01/02/2019',
      },
    };

    this.expandSection = this.expandSection.bind(this);
    this.changeGeneral = this.changeGeneral.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.changeWork = this.changeWork.bind(this);
  }

  //Changes whether an form section is visible or not
  expandSection(event) {
    event.preventDefault();
    let section = event.target.getAttribute('name');
    let prevVisibility = this.state[section].visible;

    this.setState((prevState) => {
      return {
        ...prevState,
        [section]: {
          visible: !prevVisibility,
        },
      };
    });
  }

  // General info state function
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

  // Education info state function
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

  //Work info state function
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
      <div id="main-container" className="container">
        <h1 className="text-center text-primary">CV Application Builder</h1>
        <section id="inputSection">
          <div>
            {/*General info form section*/}
            <div className="inputSectionHeader text-center">
              <button
                name="generalSection"
                className="component-section text-center btn btn-primary"
                onClick={this.expandSection}
              >
                General Info +
              </button>
            </div>
            {this.state.generalSection.visible ? (
              <General
                generalState={this.state.generalState}
                changeGeneral={this.changeGeneral}
              />
            ) : null}

            {/*Education info form section*/}
            <div
              className="inputSectionHeader text-center"
              id="educationSection"
            >
              <button
                name="educationSection"
                className="component-section text-center btn btn-primary"
                onClick={this.expandSection}
              >
                Education +
              </button>
            </div>
            {this.state.educationSection.visible ? (
              <Education
                educationState={this.state.educationState}
                changeEducation={this.changeEducation}
              />
            ) : null}

            {/*Work experience form section*/}
            <div className="inputSectionHeader text-center">
              <button
                name="workSection"
                className="component-section text-center btn btn-primary"
                onClick={this.expandSection}
              >
                Work Experience +
              </button>
            </div>
            {this.state.workSection.visible ? (
              <Work
                workState={this.state.workState}
                changeWork={this.changeWork}
              />
            ) : null}
          </div>
        </section>

        <section id="displaySection" className="">
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
