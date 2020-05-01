import React, { Component } from "react";
import { Grid, Image, Loader, Dimmer, Button } from "semantic-ui-react";

import DummyData from "../utils/DummyCarData.json";

class CarDetails extends Component {
  state = {
    carData: {},
    loading: true,
  };
  componentDidMount() {
    const pathname = window.location.pathname;
    const carId = pathname.substring(13, pathname.length);

    this.setState({
      carData: DummyData.find((id) => id.id === carId),
      loading: false,
    });
  }

  render() {
    const carDetails = this.state.loading ? (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    ) : (
      <div>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Image className="full-car-img" src={this.state.carData.image} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <h1 className="car-name">{this.state.carData.name}</h1>
              <h3>Model: {this.state.carData.model}</h3>
              <p>
                <strong>Description: </strong>
                {this.state.carData.description}
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <strong>Available for booking: </strong>
              {this.state.carData.available ? "yes" : "no"}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button
                primary
                className="book-btn"
                disabled={!this.state.carData.available}
              >
                Book Car
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
    return carDetails;
  }
}

export default CarDetails;
