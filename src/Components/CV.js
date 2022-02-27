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
    console.log(educationInfo, generalInfo, workInfo);
    return (
      <div>
        <section id="displayedInfo"></section>
        <div></div>
      </div>
    );
  }
}

export default CV;
