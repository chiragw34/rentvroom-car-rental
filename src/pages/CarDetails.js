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
import axios from "axios";

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
  state = {
    carData: {},
    loading: true,
    booked: false,
  };

  componentDidMount() {
    const carId = this.props.match.params.carId;
    axios.get(`/cars/${carId}`).then((res) => {
      // console.log(res.data.car);
      this.setState({
        carData: res.data.car,
        loading: false,
      });
    });

    var selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

    if (localStorage.getItem(selectedCar.id) !== null) {
      this.setState({
        booked: true,
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
            <Grid.Column mobile={16} tablet={8} computer={9}>
              <Image src={carData.image} className="full-car-img" />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={7}
              computer={6}
              className="right-side-details"
            >
              <h1>{carData.name}</h1>
              <div>
                <p className="sub-details-1">
                  <FaEyeDropper /> {carData.color}
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
                  as={Link}
                  to={`/book-now/${carData._id}`}
                >
                  Book Now
                </Button>
                {!carData.available && (
                  <span
                    style={{
                      color: "red",
                      marginLeft: "10px",
                      marginBottom: "0px",
                      marginTop: "auto",
                    }}
                  >
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
        {carData.current_booking && (
          <CurrentBookings data={carData.current_booking} id={carData._id} />
        )}
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
