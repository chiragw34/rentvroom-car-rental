import React, { Component } from "react";
import {
  Card,
  Grid,
  Image,
  Loader,
  Label,
  Dimmer,
  Button,
  Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CurrentBookings from "../components/pages/CurrentBooking";

// Icons
import { MdAirlineSeatReclineNormal, MdClose } from "react-icons/md";
import { FaRupeeSign, FaEyeDropper } from "react-icons/fa";

// Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCar } from "../redux/actions/dataActions";

class CarDetails extends Component {
  constructor() {
    super();
    this.state = {
      carData: {},
      loading: true,
      booked: false,
    };
  }

  handleOnClick = (event) => {
    this.props.setSelectedCar(this.props.carData);
  };
  componentDidMount() {
    var data;
    var userData = JSON.parse(localStorage.getItem("userData"));

    if (Object.keys(this.props.data.selectedCar).length !== 0) {
      data = this.props.data.selectedCar;
    } else {
      data = JSON.parse(localStorage.getItem("selectedCar"));
    }

    if (userData !== null && userData.selectedCar.id === data.id) {
      // already booked
      this.setState({
        booked: true,
      });
    }

    if (data) {
      this.setState({
        carData: data,
        loading: false,
      });
    }
  }

  render() {
    const carData = this.state.carData;

    const carDetails = this.state.loading ? (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    ) : (
      <div className="car-details-body">
        <Card className="car-details-card">
          <Grid>
            <Grid.Column width={9}>
              <Image src={carData.image} className="full-car-img" />
            </Grid.Column>
            <Grid.Column width={6} className="right-side-details">
              <h1>{carData.name}</h1>
              <div>
                <p className="sub-details-1">
                  <FaEyeDropper /> White
                  <MdAirlineSeatReclineNormal className="car-seats" />{" "}
                  {carData.capacity} seats
                </p>
                <p className="sub-details-2">
                  Rent per day:
                  <span className="car-rent">
                    <FaRupeeSign fontSize={18} />
                    {carData.rent}
                  </span>
                </p>
              </div>
              <div className="sub-details-3">
                <Button
                  primary
                  className="book-btn"
                  disabled={!carData.available}
                  onClick={this.handleOnClick}
                  as={Link}
                  to="/book-now"
                >
                  Book Now
                </Button>
                {!carData.available && (
                  <span style={{ color: "red", marginLeft: "10px" }}>
                    Currently unavailable
                  </span>
                )}
              </div>
            </Grid.Column>
          </Grid>
        </Card>
        <h2 style={{ color: "#555" }}>Car Details</h2>
        <Divider />
        {!carData.available && (
          <Label className="na-label">
            Not Available <MdClose />{" "}
          </Label>
        )}
        <p>Vehicle Number: {carData.vehicle_no}</p>
        <p>{carData.description}</p>
        {this.state.booked && <CurrentBookings />}
      </div>
    );
    return (
      <div className="car-details-container">
        <Navbar />
        {carDetails}

        <Footer />
      </div>
    );
  }
}

CarDetails.propTypes = {
  data: PropTypes.object.isRequired,
  setSelectedCar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionToProps = {
  setSelectedCar,
};

export default connect(mapStateToProps, mapActionToProps)(CarDetails);
