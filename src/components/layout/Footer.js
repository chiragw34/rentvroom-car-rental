import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';

import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <h1>Rent Vroom</h1>
          <p>Rentvroom Pvt. Ltd.</p>
          <p>
            No:296, 3rd Cross Rd, Jakkasandra,
            <br />
            1st Block, Koramangla Bengaluru, Karnataka 560034
          </p>
        </div>
        <div className="social-media-icons">
          <FaTwitter className="social-media-icon" size="20" />
          <FaInstagram className="social-media-icon" size="20" />
          <FaLinkedin className="social-media-icon" size="20" />
        </div>
        <Menu secondary className='bottom-menu'>
          <Menu.Item name="Home" className="left-menu" />
          <Menu.Item name="Contact" className="left-menu" />
          <Menu.Item name="About" className="left-menu" />
          <Menu.Menu position="right" className="right-menu">
            <Menu.Item name="Privacy Policy" />
            <Menu.Item name="Terms Of Services" />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Footer
