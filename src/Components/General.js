import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="form-component-section">
        <label>
          <p>First Name:</p>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          <p>Last Name:</p>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          <p>Email:</p>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          <p>Phone Number:</p>
          <input
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />
      </div>
    );
  }
}

export default General;
