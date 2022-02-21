import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let educationState = this.props.educationState;
    return (
      <div>
        <section className="form-component-section">
          <label for="college">College:</label>
          <input
            id="college"
            type="text"
            name="college"
            value={educationState.college}
            onChange={this.props.changeEducation}
          ></input>

          <br />

          <label for="major">Major:</label>
          <input
            id="major"
            type="text"
            name="major"
            value={educationState.major}
            onChange={this.props.changeEducation}
          ></input>

          <br />

          <label for="degree">Degree Awarded:</label>
          <select
            id="degree"
            name="degree"
            value={educationState.degree}
            onChange={this.props.changeEducation}
          >
            <option value="">--Please Select One--</option>
            <option value="noDegree">No Degree</option>
            <option value="associate">Associate's</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
          </select>

          <br />

          <label for="date">Date:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={educationState.date}
            onChange={this.props.changeEducation}
          ></input>

          <br />
        </section>
      </div>
    );
  }
}

export default Education;
