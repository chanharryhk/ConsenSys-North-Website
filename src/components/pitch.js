import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Grid, Image, Segment, Header, Container, Divider } from 'semantic-ui-react'
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
    padding: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  gridSubSectionRight: {
    padding: 30,
    marginLeft: 30,
    marginBottom: 30,
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
}

class PitchNight extends Component {
  render() {
    return(
      <div style={styles.grid}>
        <div style={styles.header}>
          <h4 style={styles.headerStyle}>Pitch Night</h4>
        </div>
        <div style={styles.gridSection}>

          <Grid stackable columns={2}>
            <Grid.Column textAlign='right'>
              <div style={styles.gridSubSectionLeft}>
                <h2 style={styles.subHeaderStyle}>What is it?</h2>
                <Divider clearing/>
                <Container>
                  <p>Members' funds remain under their control in decentralized smart contracts on the blockchain.</p>
                </Container>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Image height='150' width='150' src={NetworkIcon} />
            </Grid.Column>
          </Grid>

          <Grid stackable columns={2}>
            <Grid.Column>
              <Image floated="right" height='150' width='150' src={IdeaIcon} />
            </Grid.Column>
            <Grid.Column textAlign='left'>
              <div style={styles.gridSubSectionRight}>
                <h2 style={styles.subHeaderStyle}>Application</h2>
                <Divider />
                <Container>
                  <p>Members' funds remain under their control in decentralized smart contracts on the blockchain.</p>
                </Container>
              </div>
            </Grid.Column>
          </Grid>

          <Grid stackable columns={2}>
            <Grid.Column textAlign='right'>
              <div style={styles.gridSubSectionLeft}>
                <h2 style={styles.subHeaderStyle}>Pitch</h2>
                <Divider />
                <Container>
                  <p>Members' funds remain under their control in decentralized smart contracts on the blockchain.</p>
                </Container>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Image height='150' width='150' src={PresentIcon} />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default PitchNight;
