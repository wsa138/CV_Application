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
                  className="display-5 text-uppercase font-weight-bold text-primary"
                  id="nameText"
                >{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
                <p id="generalInfoText" className="text-secondary">
                  {generalInfo.title}
                </p>
              </div>
              <div className="col-md-4 col-sm-4" id="emailPhoneLocationText">
                <p>
                  <i className="bi bi-envelope generalIcon text-primary"></i>
                  {generalInfo.email}
                  <br />
                  <i className="bi bi-telephone generalIcon text-primary"></i>
                  {generalInfo.phoneNumber}
                  <br />
                  <i className="bi bi-geo-alt generalIcon text-primary"></i>
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
            <div className="row">
              <div id="collegeDisplay" className="col-sm-6">
                <p>{educationInfo.college}</p>
              </div>
              <div
                id="dateDisplay"
                className="col-sm-6 d-flex justify-content-sm-end"
              >
                <p>{educationInfo.date}</p>
              </div>
            </div>
            <div className="row" id="degreeInfo">
              <div
                id="degreeMajorDisplay"
                className="col d-flex justify-content-sm-end"
              >
                <p>
                  {educationInfo.degree}
                  &nbsp;
                  {educationInfo.major}
                </p>
              </div>
            </div>

            {/*Second education section display*/}
            <div className="row">
              <div id="collegeDisplay2" className="col-sm-6">
                <p>{educationInfo.college2}</p>
              </div>
              <div
                id="dateDisplay2"
                className="col-sm-6 d-flex justify-content-sm-end"
              >
                <p>{educationInfo.date2}</p>
              </div>
            </div>
            <div className="row" id="degreeInfo">
              <div
                id="degreeMajorDisplay2"
                className="col d-flex justify-content-sm-end"
              >
                <p>
                  {educationInfo.degree2}
                  &nbsp;
                  {educationInfo.major2}
                </p>
              </div>
            </div>
          </div>

          {/*Experience display section*/}
          <div className="infoDisplay container" id="experienceDisplay">
            <h2 className="text-primary">Experience</h2>
            <div id="companyDisplay" className="row experienceRow">
              <p>{workInfo.company}</p>
            </div>
            <div className="row experienceRow">
              <div id="positionTitleDisplay" className="col-sm-8">
                <p>{workInfo.positionTitle}</p>
              </div>
              <div id="startDateDisplay" className="col-sm-2">
                <p>{workInfo.startDate}</p>
              </div>
              <div id="endDateDisplay" className="col-sm-2">
                <p>{workInfo.endDate}</p>
              </div>
            </div>
            <div id="mainTasksDisplay" className="row experienceRow">
              <p>{workInfo.mainTasks}</p>
            </div>
            <br />
            {/*Second experience display section*/}
            <div id="companyDisplay2" className="row experienceRow">
              <p>{workInfo.company2}</p>
            </div>
            <div className="row experienceRow">
              <div id="positionTitleDisplay2" className="col-sm-8">
                <p>{workInfo.positionTitle2}</p>
              </div>
              <div id="startDateDisplay2" className="col-sm-2">
                <p>{workInfo.startDate2}</p>
              </div>
              <div id="endDateDisplay2" className="col-sm-2">
                <p>{workInfo.endDate2}</p>
              </div>
            </div>
            <div id="mainTasksDisplay2" className="row experienceRow">
              <p>{workInfo.mainTasks2}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CV;
