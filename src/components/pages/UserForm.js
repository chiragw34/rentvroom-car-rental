import React, {Component} from "react";
import { Button, Checkbox, Form, Modal, Divider } from "semantic-ui-react";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Redux
import { connect } from "react-redux";
import { closeUserForm } from "../../redux/actions/uiActions";

class UserForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Phone number</label>
          <input placeholder="Phone number" />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Date of Issue</label>

            <DatePicker />
          </Form.Field>
          <Form.Field>
            <label>Date of Return</label>
            <DatePicker />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Divider />
        <div className="modal-action-btn-grp">
          <Button
            className="modal-action-btn"
            type="submit"
            positive
            content="Submit"
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
