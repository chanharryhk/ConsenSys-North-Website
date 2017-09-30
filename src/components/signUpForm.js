import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {amber50} from 'material-ui/styles/colors';

import '../App.css';

const LinkedInIcon = 'https://image.flaticon.com/icons/svg/34/34227.svg';

const styles = {
  wrapStyle: {
    position: 'relative',
    textAlign: 'center',
    padding: 30,
    margin: 'auto',
  },
 torontoStyle:{
   position: 'absolute',
   opacity: 0.6,
   bottom: 0,
   right: 0,
   width: '35%',
   heigh: '35%',
 },
 headerStyle: {
   fontWeight: '400',
   fontSize: '5vh'
 },
 contactTextStyle: {
   position: 'absolute',
   bottom: 0,
   left: 0,
   marginLeft: '1%',
   fontSize: '2vh',
 },
 consensysTextStyle: {
   position: 'absolute',
   bottom: 0,
   right: 0,
   marginRight: '1%',
   fontSize: '2vh',
 },
 inputStyle: {
   fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
 },
 iconStyle: {
   verticalAlign: "middle",
   opacity: 0.5,
 },
 contactNameStyle: {
   verticalAlign: "middle",
 },
 paperStyle: {
   width: '90%',
   margin: 'auto',
   maxWidth: '700px'
 },
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
   this.setState({value: event.target.value});
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div >
      {/*

      */}
        <Paper
          style={styles.paperStyle}
          zDepth={3}
          children={
            <div style={styles.wrapStyle}>
              <h1 style={styles.headerStyle}>Toronto Mailing List</h1>
              <p>Receive the latest news and upcoming blockchain events right here in Toronto</p>
              <form action="//surge.us16.list-manage.com/subscribe/post?u=40488fe6b08303175dc1b61bc&amp;id=58fcc5cf87" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div style={{ margin: 'auto', width: '75%'}}>
                  <TextField
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    floatingLabelText="Email"
                    hintText="canada@consensys.net"
                    floatingLabelStyle={styles.inputStyle}
                    underlineFocusStyle={styles.inputStyle}
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoComplete="off"
                    fullWidth={true}
                  />
                </div>
                <br/>
                <RaisedButton label="Sign Up" primary={true}
                  className="signUpButton"
                  onTouchTap={this.handleTouchTap}
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
                <div style={{position: 'absolute', left: '-5000px', ariaHidden: true}}><input type="text" name="b_40488fe6b08303175dc1b61bc_58fcc5cf87" tabIndex="-1" value=""/></div>
              </form>
              <Snackbar
                style={{bottom: 0, textAlign: 'center',}}
                open={this.state.open}
                message="Nice! We'll keep you in the loop."
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
              />
            </div>
          }
        />
      </div>
    );
  }
}

export default SignUpForm;
