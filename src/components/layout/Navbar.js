import React, { Component } from "react";
import {  Image } from "semantic-ui-react";

import logo from '../../images/logo.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
          <Image src={logo} className='header-logo' />
      </div>
    );
  }
}
