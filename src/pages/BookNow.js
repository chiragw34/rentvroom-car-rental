import React, { Component } from "react";
import {
  Grid,
  Image,
  Input,
  Form,
  Button,
  Label,
  Modal,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Datepicker from "react-datepicker";

import ConfirmModal from "../components/pages/ConfirmModal";

import logo from "../images/logo.png";
import "react-datepicker/dist/react-datepicker.css";
// Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setUserData } from "../redux/actions/dataActions";
class BookNow extends Component {
  state = {
    name: null,
    phone: null,
    dIssue: null,
    dReturn: null,
    errors: {
      name: null,
      phone: null,
      dIssue: null,
      dReturn: null,
    },
    visible: false,
  };

  validateForm() {
    console.log("validating form");
    const errors = this.state.errors;

    // name
    if (this.state.name === "" || this.state.name === null) {
      errors.name = true;
    } else errors.name = false;

    // phone number
    if (this.state.phone === "" || this.state.phone === null) {
      errors.phone = "Phone number cannot be empty";
    } else if (
      !this.state.phone.match(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      )
    ) {
      errors.phone = "Please enter a correct phone number";
    } else errors.phone = false;

    // issue date
    if (this.state.dIssue === "" || this.state.dIssue === null) {
      errors.dIssue = "This field cannot be empty";
    } else errors.dIssue = false;

    // return date
    if (this.state.dReturn === "" || this.state.dReturn === null) {
      errors.dReturn = "This field cannot be empty";
    } else if (this.state.dReturn < this.state.dIssue) {
      errors.dReturn = "Return date should be ahead of issue date";
    } else errors.dReturn = false;

    this.setState({ errors });
    console.log("state : ", this.state, errors);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.validateForm();
    const errors = this.state.errors;

    if (!errors.name && !errors.phone && !errors.dIssue && !errors.dReturn) {
      console.log("submit success full");
      var data = {};
      if (Object.keys(this.props.data.selectedCar).length !== 0) {
        data = this.props.data.selectedCar;
      } else {
        data = JSON.parse(localStorage.getItem("selectedCar"));
      }

      // no errors
      const userData = {
        name: this.state.name,
        phone: this.state.phone,
        dIssue: this.state.dIssue,
        dReturn: this.state.dReturn,
        selectedCar: data,
      };
      this.props.setUserData(userData);
      this.setState({ visible: true });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.props);

    return (
      <div className="book-now-container">
        <ConfirmModal visible={this.state.visible} />
        <div className="book-details ">
          <Grid>
            <h1>Booking Details</h1>
            <Image src={logo} className="side-logo" />
          </Grid>
          <Form onSubmit={this.handleSubmit}>
            <Grid columns={2} className="form">
              <Grid.Column>
                <Form.Field
                  label="Name"
                  type="text"
                  control={Input}
                  placeholder="Name"
                  name="name"
                  onChange={this.handleChange}
                  error={
                    this.state.errors.name && {
                      content: "This field cannot be empty",
                    }
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  label="Phone Number"
                  type="phone"
                  control={Input}
                  placeholder="+91"
                  onChange={this.handleChange}
                  name="phone"
                  error={
                    this.state.errors.phone && {
                      content: this.state.errors.phone,
                    }
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label="Date of issue"
                  error={
                    this.state.errors.dIssue && {
                      content: this.state.errors.dIssue,
                    }
                  }
                >
                  <Datepicker
                    placeholderText="mm/dd/yyyy"
                    selected={this.state.dIssue}
                    onChange={(date) => this.setState({ dIssue: date })}
                  />
                </Form.Input>
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label="Date of return"
                  error={
                    this.state.errors.dReturn && {
                      content: this.state.errors.dReturn,
                    }
                  }
                >
                  <Datepicker
                    placeholderText="mm/dd/yyyy"
                    selected={this.state.dReturn}
                    onChange={(date) => this.setState({ dReturn: date })}
                  />
                </Form.Input>
              </Grid.Column>
            </Grid>
            <div className="action-btns">
              <Label as={Link} to="/dashboard" className="cancel-btn">
                Cancel
              </Label>
              <Button className="submit-btn" type="submit" content="Submit" />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

BookNow.propTypes = {
  setUserData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionToProps = {
  setUserData,
};
export default connect(mapStateToProps, mapActionToProps)(BookNow);
