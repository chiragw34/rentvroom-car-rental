import React, { Component } from "react";
import { Divider, Grid, Loader,Dimmer } from "semantic-ui-react";
import dateFormat from "dateformat";


class CurrentBooking extends Component {
  state = {
    userData: null,
    loading: true
  }
  
  componentDidMount() {
    this.setState({
      userData:JSON.parse(localStorage.getItem(this.props.id))
    })
  }

  render() {
    const userData = this.state.userData
    var bookingMarkup =
      userData === null ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <div className="current-bookings">
          <h2 style={{ color: "#555" }}>Current Bookings</h2>
          <Divider color="#eee" />
          <Grid className="computer-tablet-bookings">
            <Grid.Row className="headings">
              <Grid.Column width={4}>Name</Grid.Column>
              <Grid.Column width={4}>Phone Number</Grid.Column>
              <Grid.Column width={4}>Issue Date</Grid.Column>
              <Grid.Column width={4}>Return Date</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>{userData.name}</Grid.Column>
              <Grid.Column width={4}>+91{userData.phone}</Grid.Column>
              <Grid.Column width={4}>
                {dateFormat(userData.dIssue, "d mmm 'yy")}
              </Grid.Column>
              <Grid.Column width={4}>
                {dateFormat(userData.dReturn, "d mmm 'yy")}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="mobile-bookings">
            <p>Name : {userData.name}</p>
            <p>Phone Number : {userData.phone}</p>
            <p>Issue Date : {dateFormat(userData.dIssue, "d mmm 'yy")}</p>
            <p>Return Date : {dateFormat(userData.dReturn, "d mmm 'yy")}</p>
          </div>
        </div>
      );

    return bookingMarkup;
  }
}

export default CurrentBooking;
