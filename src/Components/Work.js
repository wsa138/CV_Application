import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput() {
    console.log('User Input');
  }

  render() {
    return (
      <div>
        <label>
          Job:
          <input
            type=""
            name=""
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Position Title:
          <input
            type=""
            name=""
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Main Tasks:
          <input
            type=""
            name=""
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          Start Date:
          <input
            type=""
            name=""
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />

        <label>
          End Date:
          <input
            type=""
            name=""
            value=""
            onChange={this.handleUserInput}
          ></input>
        </label>
        <br />
      </div>
    );
  }
}

export default Work;
