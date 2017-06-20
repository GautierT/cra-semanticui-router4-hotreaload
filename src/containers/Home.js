import React, { Component } from 'react'
import { Container, Divider, Grid, Header } from 'semantic-ui-react'

class Home extends Component {

  render () {
    return (
      <div>
        <Container fluid={false} style={{flex: 1, minHeight: '500px', background: 'no-repeat center url(/img/bg.png)'}}>

          <Divider section hidden/>

          <Grid columns="equal">
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={16} textAlign="center">
                <Header as="h1" style={{fontSize: '3em'}}>
                  Create React APP
                </Header>
                <Header as="h3" className="m-no-top">
                  With Semantic-UI, React Router 4, Hot Reload, Raven-Js, Intercom.
                </Header>


              </Grid.Column>
            </Grid.Row>

          </Grid>


        </Container>
      </div>
    )
  }
}

export default (Home)
