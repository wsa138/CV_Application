import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let generalState = this.props.generalState;
    return (
      <div>
        <form className="form-component-section container">
          <div className="form-group row">
            <label for="firstName" className="col-sm-3 col-form-label">
              First Name:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="firstName"
                type="text"
                name="firstName"
                value={generalState.firstName}
                onChange={this.props.changeGeneral}
              ></input>
            </div>
          </div>

          <br />

          <div className="form-group row">
            <label for="lastName" className="col-form-label col-sm-3">
              Last Name:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="lastName"
                type="text"
                name="lastName"
                value={generalState.lastName}
                onChange={this.props.changeGeneral}
              ></input>
            </div>
          </div>

          <br />

          <div className="form-group row">
            <label for="Title" className="col-form-label col-sm-3">
              Title:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="title"
                type="text"
                name="title"
                value={generalState.title}
                onChange={this.props.changeGeneral}
              ></input>
            </div>
          </div>

          <br />

          <div className="form-group row">
            <label for="email" className="col-form-label col-sm-3">
              Email:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="email"
                type="text"
                name="email"
                value={generalState.email}
                onChange={this.props.changeGeneral}
              ></input>
            </div>
          </div>

          <br />

          <div className="form-group row">
            <label for="phoneNumber" className="col-form-label col-sm-3">
              Phone Number:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                value={generalState.phoneNumber}
                onChange={this.props.changeGeneral}
              ></input>
            </div>
          </div>

          <br />

          <div className="form-group row">
            <label for="location" className="col-form-label col-sm-3">
              Location:
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="location"
                type="text"
                name="location"
                value={generalState.location}
                onChange={this.props.changeGeneral}
              ></input>
            </div>
          </div>

          <br />

          <div className="form-group row" id="summarySection">
            <label for="summary" className="col-form-label col-sm-3">
              Summary:
            </label>
            <div className="col-sm-9">
              <textarea
                rows="4"
                className="form-control"
                id="summary"
                type="text"
                name="summary"
                value={generalState.summary}
                onChange={this.props.changeGeneral}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default General;
