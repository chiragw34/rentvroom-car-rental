import React, { Component } from "react";
import { Grid, Loader, Transition } from "semantic-ui-react";
import dummyData from "../utils/DummyCarData.json";
import CarCard from "../components/pages/CarCard";

class CarListings extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    console.log("running component did mount");

    this.setState({
      data: [...dummyData],
    });
  }

  render() {
    const data = this.state.data;
    const loading = false;

    return (
      <div className='car-listings'>
        <Grid>
          <Grid.Row>
            <h2>Cars for Rentals</h2>
          </Grid.Row>
          <Grid.Row className="all-cars-list">
            {loading ? (
              <Loader active inline="centered" size="big">
                Fetching cars...
              </Loader>
            ) : (
              <Transition.Group>
                {data.length !== 0 &&
                  data.map((car) => (
                    <Grid.Column
                      key={car.id}
                      mobile={16}
                      tablet={7}
                      computer={4}
                    >
                      <CarCard carData={car} />
                    </Grid.Column>
                  ))}
              </Transition.Group>
            )}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default CarListings;
