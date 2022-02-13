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
    return (
      <div className="form-component-section">
        <label for="college">College:</label>
        <input
          id="college"
          type="text"
          name="college"
          value={this.state.college}
          onChange={this.handleUserInput}
        ></input>

        <br />

        <label for="major">Major:</label>
        <input
          id="major"
          type="text"
          name="major"
          value={this.state.major}
          onChange={this.handleUserInput}
        ></input>

        <br />

        <label for="degree">Degree Awarded:</label>
        <select
          id="degree"
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

        <br />

        <label for="date">Date:</label>
        <input
          id="date"
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.handleUserInput}
        ></input>

        <br />
      </div>
    );
  }
}

export default Education;
