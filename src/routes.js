import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import * as ReactGA from 'react-ga'
import Parent from './containers/Parent'
import Home from './containers/Home'
import CGU from './containers/CGU'
import CGV from './containers/CGV'


ReactGA.initialize('UA-88381353-1')

let previous
history.listen(location => {
  if (previous) {
    if (location.pathname !== previous.pathname) {
      previous = location
      logPageView(location.pathname)
    }
  }
  else {
    previous = location
    logPageView(location.pathname)
  }
})

//first load :
logPageView(window.location.pathname)

function logPageView (pathname) {
  console.log('Logging pageview : ', pathname)
  ReactGA.pageview(pathname)
}

const Routes = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Parent>
          <Route exact path="/" component={Home}/>


          <Route path="/cgu" component={CGU}/>
          <Route path="/cgv" component={CGV}/>


        </Parent>
      </ConnectedRouter>
    </Provider>
  )
}

export default Routes