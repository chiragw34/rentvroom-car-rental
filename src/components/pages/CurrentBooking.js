import React from 'react'
import { Divider, Grid } from 'semantic-ui-react';
import dateFormat from 'dateformat'

function CurrentBooking() {
  const userData = JSON.parse(localStorage.getItem('userData'))

  return (
    <div className="current-bookings">
      <h2 style={{color:'#555'}}>Current Bookings</h2>
      <Divider color='#eee' />
      <Grid>
        <Grid.Row className='headings'>
          <Grid.Column width={4}>Name</Grid.Column>
          <Grid.Column width={4}>Phone Number</Grid.Column>
          <Grid.Column width={4}>Issue Date</Grid.Column>
          <Grid.Column width={4}>Return Date</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>{userData.name}</Grid.Column>
          <Grid.Column width={4}>+91{userData.phone}</Grid.Column>
          <Grid.Column width={4}>{dateFormat(userData.dIssue, 'd mmm \'yy')}</Grid.Column>
          <Grid.Column width={4}>{dateFormat(userData.dReturn, 'd mmm \'yy')}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default CurrentBooking
