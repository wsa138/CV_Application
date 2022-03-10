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
        <section className="form-component-section container">
          <div className="row form-group">
            <label for="college" className="col-form-label col-sm-3">
              College:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="college"
                type="text"
                name="college"
                value={educationState.college}
                onChange={this.props.changeEducation}
              ></input>
            </div>
          </div>

          <br />

          <div className="row form-group">
            <label for="major" className="row-form-label col-sm-3">
              Major:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="major"
                type="text"
                name="major"
                value={educationState.major}
                onChange={this.props.changeEducation}
              ></input>
            </div>
          </div>

          <br />

          <div className="row form-group">
            <label for="degree" className="col-form-label col-sm-3">
              Degree Awarded:
            </label>
            <div className="col-sm-9">
              <select
                className="form-select"
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
            </div>
          </div>

          <br />

          <div className="form-group row">
            <label for="date" className="col-form-label col-sm-3">
              Date:
            </label>
            <div className="col-sm-9">
              <input
                id="date"
                type="date"
                name="date"
                value={educationState.date}
                onChange={this.props.changeEducation}
              ></input>
            </div>
          </div>

          <br />
        </section>
      </div>
    );
  }
}

export default Education;
