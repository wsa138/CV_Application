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
        <section className="form-component-section container">
          <div className="form-group row">
            <label for="firstName" class="col-sm-3 col-form-label">
              First Name:
            </label>
            <div class="col-sm-9">
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

          <div className="row">
            <div className="col">
              <label for="lastName">Last Name:</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={generalState.lastName}
                onChange={this.props.changeGeneral}
              ></input>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <label for="email">Email:</label>
              <input
                id="email"
                type="text"
                name="email"
                value={generalState.email}
                onChange={this.props.changeGeneral}
              ></input>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <label for="phoneNumber">Phone Number:</label>
              <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                value={generalState.phoneNumber}
                onChange={this.props.changeGeneral}
              ></input>
            </div>
          </div>

          <br />
        </section>
      </div>
    );
  }
}

export default General;
