import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput() {
    console.log('User Input');
  }

  render() {
    return (
      <div>
        <label>
          Job:
          <input
            type=""
            name="job"
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Position Title:
          <input
            type=""
            name="positionTitle"
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Main Tasks:
          <input
            type=""
            name="mainTasks"
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Start Date:
          <input
            type=""
            name="startDate"
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          End Date:
          <input
            type=""
            name="endDate"
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />
      </div>
    );
  }
}

export default Work;
