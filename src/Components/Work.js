import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let workState = this.props.workState;
    return (
      <div>
        <section className="form-component-section">
          <div className="row">
            <div className="col">
              <label for="job">Job:</label>
              <input
                id="job"
                type="text"
                name="job"
                value={workState.job}
                onChange={this.props.changeWork}
              ></input>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <label for="positionTitle">Position Title:</label>
              <input
                id="positionTitle"
                type="text"
                name="positionTitle"
                value={workState.position}
                onChange={this.props.changeWork}
              ></input>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <label for="mainTasks">Main Tasks:</label>
              <input
                id="mainTasks"
                type="text"
                name="mainTasks"
                value={workState.mainTasks}
                onChange={this.props.changeWork}
              ></input>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <label for="startDate">Start Date:</label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                value={workState.startDate}
                onChange={this.props.changeWork}
              ></input>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <label for="endDate">End Date:</label>
              <input
                id="endDate"
                type="date"
                name="endDate"
                value={workState.endDate}
                onChange={this.props.changeWork}
              ></input>
            </div>
          </div>

          <br />
        </section>
      </div>
    );
  }
}

export default Work;
