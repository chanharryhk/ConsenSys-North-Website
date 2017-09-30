import React, { Component } from 'react';
import { Grid, Card, Icon, Image, Divider} from 'semantic-ui-react'


const styles = {
  teamContainerStyle: {
    backgroundColor: '#F5F5F5',
    padding: 40,
    paddingBottom: 100,
  },
  headerStyle: {
    fontWeight: '400',
    fontSize: 30,
    textAlign: 'center',
  },
  dividerStyle: {
    height: 8,
    backgroundColor: '#72BCD4',
    maxWidth: 250,
    margin: 'auto'
  },
  teamGridStyle: {
    marginTop: 40,
  }
}

class Team extends Component {
  render() {
    return(
      <div style={styles.teamContainerStyle}>
        <h4 style={styles.headerStyle}>Toronto Team</h4>
        <Divider hidden style={styles.dividerStyle}/>
        <Grid style={styles.teamGridStyle} stackable textAlign='center' columns={4}>
          <Grid.Column>
            <Card centered>
              <Image src='https://media.licdn.com/media/AAEAAQAAAAAAAAgYAAAAJGVhZWFlNTVmLTg5ODEtNDgwNC05MWU0LWE1Nzk5NzM4ZDQ5Mg.jpg' />
              <Card.Content>
                <Card.Header>Henry Chan</Card.Header>
                <Card.Meta>Product Manager</Card.Meta>
                <Card.Description>
                  <a href="https://www.linkedin.com/in/henry-chan-85b6b227/" target="_blank">
                    <Icon name='linkedin'/>
                  </a>
                  <a href="mailto:henry.chan@consensys.net">
                    <Icon name='mail'/>
                  </a>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Image src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg' />
              <Card.Content>
                <Card.Header>Kevin Zhang</Card.Header>
                <Card.Meta>Blockchain Developer</Card.Meta>
                <Card.Description>
                  <a href="https://www.linkedin.com/in/kevinzhang10/" target="_blank">
                    <Icon name='linkedin'/>
                  </a>
                  <a href="mailto:kevin.zhang@consensys.net">
                    <Icon name='mail'/>
                  </a>
                  <Icon name='github'/>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Image src='https://media.licdn.com/media/p/3/005/058/3f2/2cacc78.jpg' />
              <Card.Content>
                <Card.Header>Russell Verbeeten</Card.Header>
                <Card.Meta>Canada Operations Lead</Card.Meta>
                <Card.Description>
                  <a href="https://www.linkedin.com/in/russellverbeeten/" target="_blank">
                    <Icon name='linkedin'/>
                  </a>
                  <a href="mailto:russell.verbeeten@consensys.net">
                    <Icon name='mail'/>
                  </a>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Image src='https://media.licdn.com/media/AAEAAQAAAAAAAAgYAAAAJDQ1Njg0Y2NjLWVlYTAtNDllMy04Mjc0LWM4NmM5ZDVhM2Y5YQ.jpg' />
              <Card.Content>
                <Card.Header>Chami Akmeemana</Card.Header>
                <Card.Meta>Relations Lead</Card.Meta>
                <Card.Description>
                  <a href="https://www.linkedin.com/in/russellverbeeten/" target="_blank">
                    <Icon name='linkedin'/>
                  </a>
                  <a href="mailto:russell.verbeeten@consensys.net">
                    <Icon name='mail'/>
                  </a>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Team;
