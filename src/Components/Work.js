import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { experienceDisplayTwoVisible: false };

    this.displayExperienceFormTwo = this.displayExperienceFormTwo.bind(this);
  }

  displayExperienceFormTwo(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        experienceDisplayTwoVisible: !prevState.experienceDisplayTwoVisible,
      };
    });
  }

  render() {
    let workState = this.props.workState;
    return (
      <div>
        <form className="form-component-section container">
          <div className="form-group row">
            <label for="company" className="col-form-label col-sm-3">
              Company:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="company"
                type="text"
                name="company"
                value={workState.company}
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
                value={workState.positionTitle}
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
        </form>

        {/*Button adds another experience form*/}
        <button onClick={this.displayExperienceFormTwo}>Add Experience</button>
        {this.state.experienceDisplayTwoVisible && (
          <form className="form-component-section container">
            <div className="form-group row">
              <label for="company2" className="col-form-label col-sm-3">
                Company:
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  id="company2"
                  type="text"
                  name="company2"
                  value={workState.company2}
                  onChange={this.props.changeWork}
                ></input>
              </div>
            </div>

            <br />

            <div className="row form-group">
              <label for="positionTitle2" className="col-form-label col-sm-3">
                Position Title:
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  id="positionTitle2"
                  type="text"
                  name="positionTitle2"
                  value={workState.positionTitle2}
                  onChange={this.props.changeWork}
                ></input>
              </div>
            </div>

            <br />

            <div className="row form-group">
              <label for="mainTasks2" className="col-form-label col-sm-3">
                Main Tasks:
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  id="mainTasks2"
                  type="text"
                  name="mainTasks2"
                  value={workState.mainTasks2}
                  onChange={this.props.changeWork}
                ></input>
              </div>
            </div>

            <br />

            <div className="row form-group">
              <label for="startDate2" className="col-form-label col-sm-3">
                Start Date:
              </label>
              <div className="col-sm-9">
                <input
                  id="startDate2"
                  type="date"
                  name="startDate2"
                  value={workState.startDate2}
                  onChange={this.props.changeWork}
                ></input>
              </div>
            </div>

            <br />

            <div className="row form-group">
              <label for="endDate2" className="col-form-label col-sm-3">
                End Date:
              </label>
              <div className="col-sm-9">
                <input
                  id="endDate2"
                  type="date"
                  name="endDate2"
                  value={workState.endDate2}
                  onChange={this.props.changeWork}
                ></input>
              </div>
            </div>

            <br />
          </form>
        )}
      </div>
    );
  }
}

export default Work;
