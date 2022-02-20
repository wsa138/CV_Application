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
      <div>
        <section className="form-component-section">
          <label for="firtName">First Name:</label>
          <input
            id="firtName"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleUserInput}
          ></input>

          <br />

          <label for="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleUserInput}
          ></input>

          <br />

          <label for="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleUserInput}
          ></input>

          <br />

          <label for="phoneNumber">Phone Number:</label>
          <input
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleUserInput}
          ></input>

          <br />
        </section>
      </div>
    );
  }
}

export default General;
