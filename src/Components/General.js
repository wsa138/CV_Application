import React, { Component } from 'react';

class General extends Component {
  render() {
    return (
      <div>
        <label for="first_name">First Name</label>
        <input type="text" id="first_name" name="first_name"></input>;
      </div>
    );
  }
}

export default General;
