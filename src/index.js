import React from 'react'
import { render } from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import './index.css'
import './semantic/dist/semantic.min.css'
import Routes from './routes'

const target = document.querySelector('#root')

render(
  <Routes />,
  target
)


// HMR : https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default
    render(
      <div>
        <NextApp />,
        target

      </div>
    )
  })
}

registerServiceWorker()
