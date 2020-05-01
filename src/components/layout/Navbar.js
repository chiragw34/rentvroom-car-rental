import React, { Component } from "react";
import { Menu, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: "Dashboard" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    const pathname = window.location.pathname;

    if (pathname === "/car-listings") {
      this.setState({
        activeItem: "CarListings",
      });
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div className="header">
        <Menu secondary>
          <Menu.Item className="logo">CAR RENTALS</Menu.Item>
          <Menu.Menu position="right" className="right-menu">
            <Menu.Item
              name="Dashboard"
              active={activeItem === "Dashboard"}
              onClick={this.handleItemClick}
              as={Link}
              to={"/"}
            />
            <Menu.Item
              name="CarListings"
              active={activeItem === "CarListings"}
              onClick={this.handleItemClick}
              as={Link}
              to={"/car-listings"}
            />
          </Menu.Menu>
        </Menu>
        <Divider />
      </div>
    );
  }
}
