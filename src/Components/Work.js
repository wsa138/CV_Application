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
        <section className="form-component-section container">
          <div className="form-group row">
            <label for="job" className="col-form-label col-sm-3">
              Job:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="job"
                type="text"
                name="job"
                value={workState.job}
                onChange={this.props.changeWork}
              ></input>
            </div>
          </div>

          <br />

          <div className="row form-group">
            <label for="positionTitle" className="col-form-label col-sm-3">
              Position Title:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="positionTitle"
                type="text"
                name="positionTitle"
                value={workState.position}
                onChange={this.props.changeWork}
              ></input>
            </div>
          </div>

          <br />

          <div className="row form-group">
            <label for="mainTasks" className="col-form-label col-sm-3">
              Main Tasks:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="mainTasks"
                type="text"
                name="mainTasks"
                value={workState.mainTasks}
                onChange={this.props.changeWork}
              ></input>
            </div>
          </div>

          <br />

          <div className="row form-group">
            <label for="startDate" className="col-form-label col-sm-3">
              Start Date:
            </label>
            <div className="col-sm-9">
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

          <div className="row form-group">
            <label for="endDate" className="col-form-label col-sm-3">
              End Date:
            </label>
            <div className="col-sm-9">
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
