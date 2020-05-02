import React, { Component } from "react";
import { Card, Grid, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaRupeeSign, FaEyeDropper } from "react-icons/fa";

// Redux
import { connect } from "react-redux";
import { closeUserForm, openUserForm } from "../../redux/actions/uiActions";
import { setSelectedCar } from "../../redux/actions/dataActions";

class CarCard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onClose = () => {
    this.props.closeUserForm();
  };
  handleOnClick = (event) => {
    this.props.setSelectedCar(this.props.carData);  
  };
  render() {
    var { carData } = this.props;

    return (
      <Card className="car-card">
        <Grid>
          <Grid.Column width={4}>
            <Image src={carData.image} className="card-car-img" />
          </Grid.Column>
          <Grid.Column width={4} className="card-name">
            <h4 className="card-car-name">{carData.name}</h4>
            <Grid.Row>
              <div className="card-car-color">
                <FaEyeDropper color="#666" />
                {carData.color}
              </div>
              <div className="card-car-seats">
                <MdAirlineSeatReclineNormal color="#666" />
                {carData.capacity} seater
              </div>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={2} className="card-car-rent">
            <FaRupeeSign color="#666" />
            {carData.rent}
          </Grid.Column>
          <Grid.Column width={3} className="card-car-book">
            <Button
              primary
              className="book-btn"
              disabled={!carData.available}
              onClick={this.handleOnClick}
              as={Link}
              to='/book-now'
            >
              Book Car
            </Button>
            {!carData.available && (
              <p style={{ color: "red", marginTop: "5px" }}>
                Currently Unavailable
              </p>
            )}
          </Grid.Column>
          <Grid.Column width={2} className="card-car-details">
            <div>
              <Button
                className="details-btn"
                onClick={this.handleOnClick}
                as={Link}
                to={`/car-details/${carData.id}`}
              >
                Details
              </Button>
            </div>
          </Grid.Column>
        </Grid>
      </Card>
    );
  }
}

CarCard.propTypes = {
  openUserForm: PropTypes.func.isRequired,
  closeUserForm: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  setSelectedCar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dialogOpen: state.UI.dialogOpen,
  data: state.data,
});

const mapActionToProps = {
  openUserForm,
  closeUserForm,
  setSelectedCar,
};

export default connect(mapStateToProps, mapActionToProps)(CarCard);
