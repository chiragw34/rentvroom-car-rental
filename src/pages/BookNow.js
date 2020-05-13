import React, { Component } from "react";
import { Grid, Image, Input, Form, Button, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

// Components
import ConfirmModal from "../components/pages/ConfirmModal";

import logo from "../images/logo.png";

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
    // console.log("validating form");
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
    // console.log("state : ", this.state, errors);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.validateForm();
    const errors = this.state.errors;

    if (!errors.name && !errors.phone && !errors.dIssue && !errors.dReturn) {
      // console.log("submit success full");

      // no errors
      const userData = {
        name: this.state.name,
        phone: this.state.phone,
        dIssue: this.state.dIssue,
        dReturn: this.state.dReturn,
      };
      // console.log(this.props.match.params.carId);
      const carId = this.props.match.params.carId;
      axios.post(`/book/${carId}`, userData).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.setState({ visible: true });
        }
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="book-now-container">
        <ConfirmModal
          visible={this.state.visible}
          name={this.state.name}
          dIssue={this.state.dIssue}
          dReturn={this.state.dReturn}
        />
        <div className="book-details ">
          <Grid>
            <h1>Booking Details</h1>
            <Image src={logo} className="side-logo" />
          </Grid>
          <Form onSubmit={this.handleSubmit}>
            <Grid columns={2} className="form">
              <Grid.Column mobile={16} tablet={8} computer={6}>
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
              <Grid.Column mobile={16} tablet={9} computer={6}>
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
              <Grid.Column mobile={16} tablet={9} computer={6}>
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
                    minDate={new Date()}
                    onChange={(date) => this.setState({ dIssue: date })}
                  />
                </Form.Input>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={9} computer={6}>
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
                    minDate={new Date()}
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
