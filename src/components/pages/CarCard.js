import React, { Component } from "react";
import { Card, Grid, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaRupeeSign, FaEyeDropper } from "react-icons/fa";

// Redux
import { connect } from "react-redux";
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
    if (JSON.parse(localStorage.getItem(carData.id) !== null)) {
      carData.available = false;
    }

    return (
      <Card className="car-card">
        <Grid>
          <Grid.Column mobile={16} tablet={3} computer={4}>
            <Image src={carData.image} className="card-car-img" />
          </Grid.Column>
          <Grid.Column
           
            mobile={9}
            tablet={5}
            computer={4}
            className="card-name"
          >
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
          <Grid.Column
           
            mobile={5}
            tablet={2}
            computer={2}
            className="card-car-rent"
          >
            <FaRupeeSign color="#666" />
            {carData.rent}
          </Grid.Column>
          <Grid.Column
           
            mobile={8}
            tablet={2}
            computer={3}
            className="card-car-book"
          >
            <Button
              primary
              className="book-btn"
              disabled={!carData.available}
              onClick={this.handleOnClick}
              as={Link}
              to="/book-now"
            >
              Book Car
            </Button>
            {!carData.available && (
              <p style={{ color: "red", marginTop: "5px" }}>
                Currently Unavailable
              </p>
            )}
          </Grid.Column>
          <Grid.Column
           
            mobile={5}
            tablet={1}
            computer={2}
            className="card-car-details"
          >
            <div>
              <Button
                className="details-btn"
                onClick={this.handleOnClick}
                as={Link}
                to="/car-details"
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
  setSelectedCar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionToProps = {
  setSelectedCar,
};

export default connect(mapStateToProps, mapActionToProps)(CarCard);
