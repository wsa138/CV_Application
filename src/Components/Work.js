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
      <div>
        <section className="form-component-section">
          <label for="job">Job:</label>
          <input
            id="job"
            type="text"
            name="job"
            value={this.state.job}
            onChange={this.handleUserInput}
          ></input>

          <br />

          <label for="positionTitle">Position Title:</label>
          <input
            id="positionTitle"
            type="text"
            name="positionTitle"
            value={this.state.position}
            onChange={this.handleUserInput}
          ></input>

          <br />

          <label for="mainTasks">Main Tasks:</label>
          <input
            id="mainTasks"
            type="text"
            name="mainTasks"
            value={this.state.mainTasks}
            onChange={this.handleUserInput}
          ></input>

          <br />

          <label for="startDate">Start Date:</label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleUserInput}
          ></input>

          <br />

          <label for="endDate">End Date:</label>
          <input
            id="endDate"
            type="date"
            name="endDate"
            value={this.state.endDate}
            onChange={this.handleUserInput}
          ></input>

          <br />
        </section>
      </div>
    );
  }
}

export default Work;
