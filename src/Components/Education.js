import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { educationDisplayTwoVisible: false };

    this.displayEducationFormTwo = this.displayEducationFormTwo.bind(this);
  }

  displayEducationFormTwo(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        educationDisplayTwoVisible: !prevState.educationDisplayTwoVisible,
      };
    });
  }

  render() {
    let educationState = this.props.educationState;
    return (
      <div>
        <form className="form-component-section container">
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
                <option value="">No Degree</option>
                <option value="A.A.">A.A.</option>
                <option value="A.S.">A.S.</option>
                <option value="B.S.">B.S.</option>
                <option value="B.A.">B.A.</option>
                <option value="M.A.">M.A.</option>
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
        </form>

        {/*Button adds another education form
        FIX: Currently uses the same state as the first form*/}
        <button onClick={this.displayEducationFormTwo}>Add Education</button>
        {this.state.educationDisplayTwoVisible && (
          <form className="form-component-section container">
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
                  <option value="">No Degree</option>
                  <option value="A.A.">A.A.</option>
                  <option value="A.S.">A.S.</option>
                  <option value="B.S.">B.S.</option>
                  <option value="B.A.">B.A.</option>
                  <option value="M.A.">M.A.</option>
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
          </form>
        )}
      </div>
    );
  }
}

export default Education;
