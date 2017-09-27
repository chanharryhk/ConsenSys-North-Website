import React, { Component } from 'react';
import {amber50} from 'material-ui/styles/colors';

const LinkedInIcon = 'https://cdn0.iconfinder.com/data/icons/typicons-2/24/social-linkedin-128.png';

const styles = {
  contactTextStyle: {
    bottom: 0,
    left: 0,
    marginLeft: '1%',
    fontSize: '2vh',
  },
  contactNameStyle: {
    verticalAlign: "middle",
  },
}

class ContactBar extends Component {
  render() {
    return(
      <div>
        <p style={styles.contactTextStyle}>
          <a href="mailto:chami.akmeemana@consensys.net" style={{color: amber50, textDecoration: 'none'}}>
            <span style={styles.contactNameStyle}>Chami</span>
          </a>
          <a href="https://www.linkedin.com/in/chami1" target="_blank" rel="noopener noreferrer">
            <img style={styles.iconStyle} src={LinkedInIcon} alt="LinkedIn Icon" width="20px" height="20px"/>
          </a>
          {'|'}
          <a href="mailto:russell.verbeeten@consensys.net" style={{color: amber50, textDecoration: 'none'}}>
            <span style={styles.contactNameStyle}> Russell</span>
          </a>
          <a href="https://ca.linkedin.com/in/russellverbeeten" target="_blank" rel="noopener noreferrer">
            <img style={styles.iconStyle} src={LinkedInIcon} alt="LinkedIn Icon" width="20px" height="20px"/>
          </a>
          {'|'}
          <a href="mailto:henry.chan@consensys.net" style={{color: amber50, textDecoration: 'none'}}>
            <span style={styles.contactNameStyle}> Henry</span>
          </a>
          <a href="https://www.linkedin.com/in/henry-chan-85b6b227" target="_blank" rel="noopener noreferrer">
            <img style={styles.iconStyle} src={LinkedInIcon} alt="LinkedIn Icon" width="20px" height="20px"/>
          </a>
        </p>
      </div>
    )
  }
}

export default ContactBar;
