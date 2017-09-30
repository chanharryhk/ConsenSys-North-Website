import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

const styles = {
  eventDetailStyle: {
    padding: 30,
    color: 'whitesmoke',
  },
  titleStyle: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 30,
  }
}

class EventDetail extends Component {
  render() {
    return(
      <div style={styles.eventDetailStyle}>
        <h2 style={styles.titleStyle}>Event Overview</h2>
      </div>
    )
  }
}

export default EventDetail;
