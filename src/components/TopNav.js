import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

import { connect } from 'react-redux'

class TopNav extends Component {
  render () {
    return (
      <Menu size='massive' id="menu" borderless>
        <Container fluid={false}>


          <Menu.Item style={{fontWeight: '600', fontSize: '1.6em'}}>
            CRA
          </Menu.Item>

          <Menu.Item className="mobile hidden">
{/*
            <p style={{fontWeight: '200', marginTop: '8px'}}>L'administratif simplifié</p>
*/}
          </Menu.Item>


        </Container>
      </Menu>

    )
  }
}

TopNav.propTypes = {}
TopNav.defaultProps = {}

export default connect()(TopNav)
