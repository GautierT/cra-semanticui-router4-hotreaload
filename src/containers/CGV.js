import React, { Component } from 'react'
import { Container, Grid, Header, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CGV extends Component {
  render () {

    return (
      <Container fluid={true}>
        <Container style={{flex: 1}}>
          <Grid columns="equal">
            <Grid.Row centered={true}>
              <Grid.Column className="m-bottom-10" mobile="16" computer="14" stretched={true}>
                <Segment attached={true} padded={true}>
                  <Header icon={true} as="h3" textAlign="center">
                    <Icon name='checkmark box'/>
                    Conditions G&eacute;n&eacute;rales de Vente du site
                  </Header>

                  <p>Article 1 - Objet</p>

                </Segment>
              </Grid.Column>
            </Grid.Row>

          </Grid>

        </Container>
      </Container>
    )
  }
}

export default CGV
