import React, { Component } from "react";
import { Loader, Transition, Divider, Grid } from "semantic-ui-react";
import dummyData from "../utils/DummyCarData.json";
import CarCard from "../components/pages/CarCard";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

class CarListings extends Component {
  state = {
    data: [],
    loading:true
  };

  componentDidMount() {
    this.setState({
      data: [...dummyData],
      loading:false
    });
  }

  render() {
    const data = this.state.data;
    const loading = this.state.loading;

    return (
      <div className="car-listings-container">
        <Navbar />
        <div className="car-listings">
          <h1>Cars for Rent</h1>
          <Divider />
          {loading ? (
            <Loader active inline="centered" size="big">
              Fetching cars for rentals...
            </Loader>
          ) : (
            <div>
              <Grid className='list-headings' style={{width:'90%', margin:'0 auto', maxWidth:'1200px'}}>
                <Grid.Column width={4} />
                <Grid.Column width={4} className="details-heading">
                  <h5>Car Details</h5>
                  </Grid.Column>
                  <Grid.Column width={2} className='rent-heading'>
                    <h5>Rent Per Day</h5>
                  </Grid.Column>
                  <Grid.Column width={5}/>
              </Grid>
              <Transition.Group>
                {data.length !== 0 &&
                  data.map((car) => <CarCard carData={car} key={car.id} />)}
              </Transition.Group>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default CarListings;
