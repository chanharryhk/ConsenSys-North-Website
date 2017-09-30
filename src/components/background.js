import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {amber50} from 'material-ui/styles/colors';

const styles = {
  referenceStyle: {
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
    position: "absolute",
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    opacity: 0.6,
    color: amber50,
  },
  logoStyle:{
   position: 'absolute',
   opacity: 0.2,
   top: 0,
   bottom: 0,
   width: '70%',
   heigh: '70%',
   marginLeft: '-35%',
   marginTop: '-35%',
 },
}

class Background extends Component {
  render() {
    return(
      <div style={styles.referenceStyle}>
        <img className="Image" style={styles.logoStyle} src={"https://consensys.net/img/logo.svg"} alt="ConsenSys Logo"/>
        <Particles/>
      </div>
    )
  }
}

export default Background;
