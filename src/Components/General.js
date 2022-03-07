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
        <section className="form-component-section">
          <div className="row">
            <div className="col">
              <label for="firtName">First Name:</label>
              <input
                id="firtName"
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
