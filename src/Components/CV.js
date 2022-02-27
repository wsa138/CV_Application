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
          <h3>General Info</h3>
          <div className="infoDisplay">
            <div id="nameDisplay">
              <h4>Name</h4>
              <p>{`${generalInfo.firstName} ${generalInfo.lastName}`}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CV;
