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
      <div id="page">
        <section id="displayedInfo">
          {/*General info display section*/}
          <div className=" container" id="generalDisplay">
            <div className="row">
              <div className="col-md-8 col-sm-8" id="nameDisplay">
                <h1
                  class="display-5 text-uppercase font-weight-bold text-primary"
                  id="nameText"
                >{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
                <p id="generalInfoText" class="text-secondary">
                  {generalInfo.title}
                </p>
              </div>
              <div class="col-md-4 col-sm-4" id="emailPhoneLocationText">
                <p>
                  <i class="bi bi-envelope generalIcon text-primary"></i>
                  {generalInfo.email}
                  <br />
                  <i class="bi bi-telephone generalIcon text-primary"></i>
                  {generalInfo.phoneNumber}
                  <br />
                  <i class="bi bi-geo-alt generalIcon text-primary"></i>
                  {generalInfo.location}
                </p>
              </div>
            </div>
            <hr></hr>
            <div className="row justify-content-center">
              <div id="summary" className="col-sm-10">
                <p>{generalInfo.summary}</p>
              </div>
            </div>
          </div>

          {/*Education info display section*/}
          <div className="infoDisplay container" id="educationDisplay">
            <h2 className="text-primary">Education</h2>
            <div class="row">
              <div id="collegeDisplay" class="col-sm-6">
                <p>{educationInfo.college}</p>
              </div>
              <div
                id="dateDisplay"
                class="col-sm-6 d-flex justify-content-sm-end"
              >
                <p>{educationInfo.date}</p>
              </div>
            </div>
            <div class="row" id="degreeInfo">
              <div
                id="degreeMajorDisplay"
                class="col d-flex justify-content-sm-end"
              >
                <p>
                  {educationInfo.degree}
                  &nbsp;
                  {educationInfo.major}
                </p>
              </div>
            </div>

            <div class="row">
              <div id="collegeDisplay" class="col-sm-6">
                <p>{educationInfo.college}</p>
              </div>
              <div
                id="dateDisplay"
                class="col-sm-6 d-flex justify-content-sm-end"
              >
                <p>{educationInfo.date}</p>
              </div>
            </div>
            <div class="row" id="degreeInfo">
              <div
                id="degreeMajorDisplay"
                class="col d-flex justify-content-sm-end"
              >
                <p>
                  {educationInfo.degree}
                  &nbsp;
                  {educationInfo.major}
                </p>
              </div>
            </div>
          </div>

          {/*Experience display section*/}
          <div className="infoDisplay container" id="experienceDisplay">
            <h2 className="text-primary">Experience</h2>
            <div id="companyDisplay" class="row experienceRow">
              <p>{workInfo.company}</p>
            </div>
            <div class="row experienceRow">
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
            <div id="mainTasksDisplay" class="row experienceRow">
              <p>{workInfo.mainTasks}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CV;
