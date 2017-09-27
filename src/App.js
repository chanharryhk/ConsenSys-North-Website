import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {amber50} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

import SignUpForm from './components/signUpForm.js';
import PitchNight from './components/pitch.js';
import Background from './components/background.js';
import ContactBar from './components/contactBar.js';
import Team from './components/team.js';
import './App.css';

const LinkedInIcon = 'https://cdn0.iconfinder.com/data/icons/typicons-2/24/social-linkedin-128.png';

const styles = {
  referenceStyle: {
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  },
  textStyle: {
    position: 'relative',
    top: '40%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
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
 torontoStyle:{
   position: 'absolute',
   opacity: 0.6,
   bottom: 0,
   right: 0,
   width: '35%',
   heigh: '35%',
 },
 titleStyle: {
   fontWeight: '400',
   fontSize: '10vh',
   textAlign: 'center',
 },
 subtitleStyle: {
   fontWeight: '400',
   fontSize: '3vh',
   textAlign: 'center',
 },
 headerContainerStyle: {
   margin: '50',
   marginTop: '200',
   marginBottom: '100'
 },
 consensysTextStyle: {
   bottom: 0,
   right: 0,
   marginRight: '1%',
   fontSize: '2vh',
 },
 inputStyle: {
   color: amber50,
   fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
 },
 iconStyle: {
   verticalAlign: "middle",
   opacity: 0.5,
 },
 dividerStyle: {
   margin: 100,
 },



 gridStyle: {
   paddingTop: 100,
 },
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div style={styles.referenceStyle}>
        {/*
          <Background/>
          */}
        <div style={styles.headerContainerStyle}>
          <h1 style={styles.titleStyle}>CONSENSYS TORONTO</h1>
          <h1 style={styles.subtitleStyle}>Join us in Toronto for ConsenSys Blockchain Pitch Night.</h1>
        </div>
        <SignUpForm/>
        <div style={styles.gridStyle}>
          <PitchNight/>
        </div>
        <Team/>
      </div>
    );
  }
}

export default App;
