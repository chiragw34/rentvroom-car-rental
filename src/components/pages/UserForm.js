import React, { Component } from "react";
import { Button, Checkbox, Form, Modal, Divider } from "semantic-ui-react";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Redux
import { connect } from "react-redux";
import { closeUserForm } from "../../redux/actions/uiActions";

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      phone: "",
      dIssue: "",
      dReturn: "",
      isChecked: false,
      errors: {
        fname: null,
        lname: null,
        phone: null,
        dIssue: null,
        dReturn: null,
      },
    };
  }

  validateForm() {
    console.log("validating form");

    const errors = this.state.errors;
    if (this.state.fname === "" || this.state.fname === null) {
      errors.fname = true;
    } else errors.fname = false;

    if (this.state.lname === "" || this.state.lname === null) {
      errors.lname = true;
    } else errors.lname = false;

    if (this.state.phone === "" || this.state.phone === null) {
      errors.phone = true;
    } else errors.phone = false;

    if (this.state.dIssue === "" || this.state.dIssue === null) {
      errors.dIssue = true;
    } else errors.dIssue = false;

    if (this.state.dReturn === "" || this.state.dReturn === null) {
      errors.dReturn = true;
    } else errors.dReturn = false;

    this.setState({ errors });
    console.log("state : ", this.state, errors);
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.validateForm();
  };
  handleCheckBox = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    this.setState({
      dIssue: new Date(),
    });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group widths="equal">
          <Form.Field required>
            <label>First Name</label>
            <Form.Input
              placeholder="First Name"
              name="fname"
              onChange={this.handleChange}
              error={
                this.state.errors.fname && {
                  content: "This field cannot be empty",
                }
              }
            />
          </Form.Field>
          <Form.Field required>
            <label>Last Name</label>
            <Form.Input
              placeholder="Last Name"
              name="lname"
              onChange={this.handleChange}
              error={
                this.state.errors.lname && {
                  content: "This field cannot be empty",
                }
              }
            />
          </Form.Field>
        </Form.Group>
        <Form.Field required>
          <label>Phone number</label>
          <Form.Input
            placeholder="Phone number"
            type="phone"
            name="phone"
            onChange={this.handleChange}
            error={
              this.state.errors.phone && {
                content: "This field cannot be empty",
              }
            }
          />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field required>
            <label>Date of Issue</label>
            <Form.Input
              error={
                this.state.errors.dIssue && {
                  content: "This field cannot be empty",
                }
              }
            >
              <DatePicker
                selected={this.state.dIssue}
                onChange={(date) => this.setState({ dIssue: date })}
                name="dIssue"
                placeholderText="mm/dd/yyyy"
              />
            </Form.Input>
          </Form.Field>
          <Form.Field required>
            <label>Date of Return</label>
            <Form.Input
              error={
                this.state.errors.dReturn && {
                  content: "This field cannot be empty",
                }
              }
            >
              <DatePicker
                selected={this.state.dReturn}
                onChange={(date) => this.setState({ dReturn: date })}
                name="dReturn"
                placeholderText="mm/dd/yyyy"
              />
            </Form.Input>
          </Form.Field>
        </Form.Group>
        <Form.Field required>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={this.state.isChecked}
            onChange={this.handleCheckBox}
          />
        </Form.Field>
        <Divider />
        <div className="modal-action-btn-grp">
          <Button
            className="modal-action-btn"
            type="submit"
            positive
            content="Submit"
            disabled={!this.state.isChecked}
          />
          <Button
            className="modal-action-btn"
            negative
            content="Cancel"
            onClick={this.props.closeUserForm}
          />
        </div>
        <Modal.Actions></Modal.Actions>
      </Form>
    );
  }
}

UserForm.prototypes = {
  openUserForm: PropTypes.func.isRequired,
  closeUserForm: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dialogOpen: state.UI.dialogOpen,
});

const mapActionToProps = {
  closeUserForm,
};

export default connect(mapStateToProps, mapActionToProps)(UserForm);
