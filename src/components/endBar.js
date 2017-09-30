import React, { Component } from 'react';
import ConsenSys from '../images/consensys.png'
import { Grid, List } from 'semantic-ui-react'

const styles = {
  endBarStyle: {
    textAlign: 'center',
    marginBottom: 50,
    color: 'whitesmoke',
  },
}

class EndBar extends Component {
  render() {
    return(
      <div style={styles.endBarStyle}>
        <img height='75' width='75' src={ConsenSys}/>
        <h3>Powered by ConsenSys 2017</h3>
      </div>
    )
  }
}

export default EndBar;
