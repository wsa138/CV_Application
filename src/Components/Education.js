import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      college: '',
      major: '',
      degree: '',
      date: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <label>
          College:
          <input
            type="text"
            name="college"
            value={this.state.college}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Major:
          <input
            type="text"
            name="major"
            value={this.state.major}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Degree Awarded:
          <select
            name="degree"
            value={this.state.degree}
            onChange={this.handleUserInput}
          >
            <option value="">--Please Select One--</option>
            <option value="noDegree">No Degree</option>
            <option value="associate">Associate's</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
          </select>
        </label>
        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />
      </div>
    );
  }
}

export default Education;
