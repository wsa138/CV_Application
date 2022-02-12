import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: '',
      positionTitle: '',
      mainTasks: '',
      startDate: '',
      endDate: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state.startDate);
    return (
      <div className="form-component-section">
        <label>
          Job:
          <input
            type="text"
            name="job"
            value={this.state.job}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Position Title:
          <input
            type="text"
            name="positionTitle"
            value={this.state.position}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Main Tasks:
          <input
            type="text"
            name="mainTasks"
            value={this.state.mainTasks}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={this.state.endDate}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />
      </div>
    );
  }
}

export default Work;
