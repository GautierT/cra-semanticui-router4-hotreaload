import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Container, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { variables } from './../utils/Constants'

class Footer extends Component {
  render () {
    const {produit, prix, link} = this.props

    return (

      <Menu size='mini' color="violet" inverted={true} borderless>
        <Container fluid={false}>

          {!link && <Menu.Item style={{fontWeight: '600', fontSize: '1.6em'}}>
						<span className="mobile hidden">
							CRA
						</span>
            <span className="mobile only">
							CRA
						</span>
          </Menu.Item>}

          {link && <Menu.Item to="/" as={Link} link style={{fontWeight: '600', fontSize: '1.6em'}}>
						<span className="mobile hidden">
							lifebot
						</span>
            <span className="mobile only">
							lb
						</span>
          </Menu.Item>}
          <Menu.Item to="/cgu" as={Link} link target="_blank">
            CGU
          </Menu.Item>
          <Menu.Item to="/cgv" as={Link} link target="_blank">
            CGV
          </Menu.Item>
          {prix && <Menu.Item to="/prix" as={Link} link>
            Prix
          </Menu.Item>}
          {produit && <Menu.Item to="/produit" as={Link} link>
            Produit
          </Menu.Item>}
          <Menu.Item href={variables.help_url} as='a' link target="_blank">
            Aide
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <span className="mobile hidden">
                <Button name='twitter' inverted as="a" target="_blank" href={variables.twitter_url} basic color="violet">
                    <Icon name="twitter"/>
                    Twitter
                </Button>
              </span>
              <span className="mobile only">
                <Button icon="twitter" name='twitter' inverted as="a" target="_blank" href={variables.twitter_url} basic color="violet">
                </Button>
              </span>
            </Menu.Item>
            <Menu.Item>
              <span className="mobile hidden">
                <Button name='facebook' inverted as="a" target="_blank" href={variables.facebook_url} basic color="violet">
                    <Icon name="facebook"/>
                    Facebook
                </Button>
              </span>
              <span className="mobile only">
                <Button icon="facebook" name='facebook' inverted as="a" target="_blank" href={variables.facebook_url} basic color="violet">
                </Button>
              </span>
            </Menu.Item>
            <Menu.Item>
              <span className="mobile hidden">
                <Button name="mail" inverted as="a" target="_blank" href={variables.email} basic>
                    <Icon name="mail"/>
                    Contact
                </Button>
              </span>
              <span className="mobile only">
                <Button icon="mail" name="mail" inverted as="a" target="_blank" href={variables.email} basic>
                </Button>
              </span>
            </Menu.Item>
          </Menu.Menu>
        </Container>

      </Menu>

    )
  }
}

Footer.propTypes = {
  headline: PropTypes.bool,
  prix: PropTypes.bool,
  produit: PropTypes.bool,
  inverted: PropTypes.bool,
  link: PropTypes.bool,
}
Footer.defaultProps = {
  inverted: true,
  link: true,
  headline: true,
  prix: true,
  produit: true
}

export default Footer
