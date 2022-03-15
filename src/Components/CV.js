import React, { Component } from 'react';

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
              <div className="col-sm-8" id="nameDisplay">
                <h4>Name</h4>
                <p>{`${generalInfo.firstName} ${generalInfo.lastName}`}</p>
              </div>
              <div className="col-sm-4">
                <div id="emailDisplay">
                  <h4>Email</h4>
                  <p>{generalInfo.email}</p>
                </div>
                <div id="phoneDisplay">
                  <h4>Phone Number</h4>
                  <p>{generalInfo.phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="infoDisplay container">
            <div class="row">
              <div id="collegeDisplay" class="col-sm-6">
                <h4>College</h4>
                <p>{educationInfo.college}</p>
              </div>
              <div id="dateDisplay" class="col-sm-6">
                <h4>Date</h4>
                <p>{educationInfo.date}</p>
              </div>
            </div>
            <div class="row">
              <div id="degreeDisplay" class="col-sm-6">
                <h4>Degree</h4>
                <p>{educationInfo.degree}</p>
              </div>
              <div id="majorDisplay" class="col-sm-6">
                <h4>Major</h4>
                <p>{educationInfo.major}</p>
              </div>
            </div>
          </div>

          <div className="infoDisplay container">
            <div id="companyDisplay" class="row">
              <h4>Company</h4>
              <p>{workInfo.company}</p>
            </div>
            <div class="row">
              <div id="positionTitleDisplay" class="col-sm-8">
                <h4>Position Title</h4>
                <p>{workInfo.positionTitle}</p>
              </div>
              <div id="startDateDisplay" class="col-sm-2">
                <h4>Start Date</h4>
                <p>{workInfo.startDate}</p>
              </div>
              <div id="endDateDisplay" class="col-sm-2">
                <h4>End Date</h4>
                <p>{workInfo.endDate}</p>
              </div>
            </div>
            <div id="mainTasksDisplay" class="row">
              <h4>Main Tasks</h4>
              <p>{workInfo.mainTasks}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CV;
