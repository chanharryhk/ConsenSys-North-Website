import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Grid, Image, Segment, Header, Container, Divider, Reveal } from 'semantic-ui-react'
import IdeaIcon from '../images/idea.svg';
import PresentIcon from '../images/presentation.svg';
import NetworkIcon from '../images/network.svg';

const styles = {
  grid: {
    padding: 30,
    backgroundColor: '#FFFFFF',
    width: '100%',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    paddingTop: 75,
    paddingBottom: 75,
  },
  header: {
    marginBottom: '60',
  },
  gridSection: {
    marginBottom: 24,
    marginTop: 24,
    paddingBottom: 14,
    paddingTop: 14,
  },
  gridSubSectionLeft: {
    // padding: 30,
  },
  gridSubSectionRight: {
    // padding: 30,
  },
  headerStyle:{
    fontWeight: '400',
    fontSize: 30,
    textAlign: 'center',
  },
  subHeaderStyle:{
    fontWeight: '600',
    fontSize: '5vh',

  },
  paragraphStyle: {
    fontWeight: '400',
    fontSize: '5vh',
  },
  dividerLeftStyle: {
    height: 8,
    backgroundColor: '#72BCD4',
    width: 250,
    float: 'right'
  },
  dividerRightStyle: {
    height: 8,
    backgroundColor: '#72BCD4',
    width: 250,
    float: 'left'
  },
  dividerStyle: {
    height: 8,

  },
}

class PitchNight extends Component {
  render() {
    return(
      <div style={styles.grid}>
        <div style={styles.header}>
          <h4 style={styles.headerStyle}>
            <b>Pitch Night</b>
            <br/>
            <i>November 15<sup>th</sup> at MaRS Centre</i>
          </h4>
        </div>
        <div style={styles.gridSection}>

          <Grid stackable reversed='mobile' columns={2}>
            <Grid.Column style={{paddingRight: 50}} textAlign='right'>
              <div style={styles.gridSubSectionLeft}>
                <h2 style={styles.subHeaderStyle}>What is it?</h2>
                <Divider style={styles.dividerLeftStyle} />
                  <p style={{marginTop: 60}}>
                  Join us in Toronto on ConsenSys Blockchain <b>Pitch Night</b>!
                  <br/><br/>
                  This is an interactive and fun pitch event where entrepreneurs showcase their ideas or companies to ConsenSys, get valuable feedback and compete for a chance get seed funding.
                  <br/><br/>
                  Pitches are 5 minutes + Q&A with judges.
                  </p>
              </div>
            </Grid.Column>
            <Grid.Column style={{paddingLeft: 50}} verticalAlign="middle">
              <Image height='150' width='150' src={NetworkIcon} />
            </Grid.Column>
          </Grid>

          <Grid style={{marginTop: 60}} stackable columns={2}>
            <Grid.Column style={{paddingRight: 50}} verticalAlign="middle">
              <Image floated="right" height='150' width='150' src={PresentIcon} />
            </Grid.Column>
            <Grid.Column style={{paddingLeft: 50}} textAlign='left'>
              <div style={styles.gridSubSectionRight}>
                <h2 style={styles.subHeaderStyle}>Application</h2>
                <Divider style={styles.dividerRightStyle}/>
                  <p style={{marginTop: 60}}>
                  Please email us your business plan highlighting:
                  <br/><br/>
                  What does your company do? What problem does it solve? What’s the business model? What’s the market?
                  <br/><br/>
                  We also welcome you to share your financial plan!
                  </p>
              </div>
            </Grid.Column>
          </Grid>
          <Grid style={{marginTop: 60}} stackable reversed='mobile' columns={2}>
            <Grid.Column style={{paddingRight: 50}} textAlign='right'>
              <div style={styles.gridSubSectionLeft}>
                <h2 style={styles.subHeaderStyle}>Pitch</h2>
                <Divider style={styles.dividerLeftStyle} />
                <p style={{marginTop: 60}}>
                  Come watch pitches from up-and-coming companies and mingle with industry leaders, entrepreneurs, and investors from the community.
                  <br/><br/>
                  Meet the founders and see their products up and close.
                </p>
              </div>
            </Grid.Column>
            <Grid.Column style={{paddingLeft: 50}} verticalAlign="middle">
              <Image height='150' width='150' src={IdeaIcon} />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default PitchNight;
