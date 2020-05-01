import React, { Component } from "react";
import { Card, Image, Button, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { closeUserForm, openUserForm } from "../../redux/actions/uiActions";
import UserForm from "./UserForm";

class CarCard extends Component {
  constructor() {
    super();
    this.state = { dialogOpen: true };
  }
  onClose = () => {
    this.props.closeUserForm();
  };
  render() {
    var { carData } = this.props;
    const handleOnClick = (event) => {
      this.setState({ dialogOpen: true });
      this.props.openUserForm();
    };

    console.log("CarCard : this.props.dialogOpen", this.props);

    return (
      <Card className="car-card">
        <Image src={carData.image} wrapped ui={false} className="car-img" />
        <Card.Content>
          <Card.Header>{carData.name}</Card.Header>
          <Card.Meta>
            <span className="date">Model: {carData.model}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Modal
            size="small"
            open={this.props.dialogOpen}
            onClose={this.onClose}
            closeOnDimmerClick={false}
            trigger={
              <Button
                primary
                className="book-btn"
                disabled={!carData.available}
                onClick={handleOnClick}
              >
                Book Car
              </Button>
            }
          >
            <Modal.Header>Enter Your details</Modal.Header>
            <Modal.Content>
              <UserForm />
            </Modal.Content>
          </Modal>
          <Button floated="right" as={Link} to={`/car-details/${carData.id}`}>
            Details
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

CarCard.prototypes = {
  openUserForm: PropTypes.func.isRequired,
  closeUserForm: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dialogOpen: state.UI.dialogOpen,
});

const mapActionToProps = {
  openUserForm,
  closeUserForm,
};

export default connect(mapStateToProps, mapActionToProps)(CarCard);
