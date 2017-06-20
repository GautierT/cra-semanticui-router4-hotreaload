import React, { Component } from 'react'
import TopNav from '../components/TopNav'
import { Container, Divider } from 'semantic-ui-react'
import Footer from './Footer'
import Intercom from 'react-intercom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import get from 'lodash/get'

class Parent extends Component {

  componentDidMount () {

  }

  render () {
    const {pathname} = this.props
    const classes = (/*pathname === '/' || */pathname.indexOf('/lettres/') > -1 || pathname.indexOf('direct') > -1 || pathname.indexOf('packs') > -1 || pathname.indexOf('choix') > -1 ) ? 'pattern-background' : null

    const user = null

    return (

      <div id="app" style={pathname !== '' ? {backgroundColor: '#fff'} : null}>
        {process.env.REACT_APP_NODE_ENV === 'production' && (user ? <Intercom appID="ass3pi0g" {...user} /> : <Intercom appID="ass3pi0g"/>)}

        <Container fluid={true} id="app" className={classes}>

          <TopNav />


          <div style={{flex: 1}}>
            {this.props.children}
          </div>

          <Divider hidden section/>

          <Footer produit={false} prix={false} link={false}/>

        </Container>

      </div>
    )
  }
}

Parent.propTypes = {}
Parent.defaultProps = {}
const mapStateToProps = (state) => ({
  pathname: get(state, 'router.location.pathname')
})
// bug https://github.com/ReactTraining/react-router/issues/4671
export default withRouter(connect(mapStateToProps)(Parent))
//export default (Parent)
