import React, { Component } from 'react';
import '../style.css';

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const educationInfo = this.props.educationInfo;
    const generalInfo = this.props.generalInfo;
    const workInfo = this.props.workInfo;
    return (
      <div>
        <section id="displayedInfo">
          <div className="infoDisplay container">
            <div className="row">
              <div className="col-sm-8 " id="nameDisplay">
                <h1>{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
              </div>
              <div className="col-sm-4 ">
                <div id="emailDisplay">
                  <p>{generalInfo.email}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div id="titleDisplay" className="col-sm-8 ">
                <p>{generalInfo.title}</p>
              </div>
              <div id="phoneDisplay" className="col-sm-4 ">
                <p>{generalInfo.phoneNumber}</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div id="summary" className="col-sm-10">
                <p>{generalInfo.summary}</p>
              </div>
            </div>
          </div>

          <div className="infoDisplay container">
            <h2>Education</h2>
            <div class="row">
              <div id="collegeDisplay" class="col-sm-6">
                <p>{educationInfo.college}</p>
              </div>
              <div id="dateDisplay" class="col-sm-6">
                <p>{educationInfo.date}</p>
              </div>
            </div>
            <div class="row">
              <div id="degreeDisplay" class="col-sm-6">
                <p>{educationInfo.degree}</p>
              </div>
              <div id="majorDisplay" class="col-sm-6">
                <p>{educationInfo.major}</p>
              </div>
            </div>
          </div>

          <div className="infoDisplay container">
            <h2>Experience</h2>
            <div id="companyDisplay" class="row">
              <p>{workInfo.company}</p>
            </div>
            <div class="row">
              <div id="positionTitleDisplay" class="col-sm-8">
                <p>{workInfo.positionTitle}</p>
              </div>
              <div id="startDateDisplay" class="col-sm-2">
                <p>{workInfo.startDate}</p>
              </div>
              <div id="endDateDisplay" class="col-sm-2">
                <p>{workInfo.endDate}</p>
              </div>
            </div>
            <div id="mainTasksDisplay" class="row">
              <p>{workInfo.mainTasks}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CV;
