import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class MessageCustom extends Component {
  render () {
    const {transparent, ...rest} = this.props

    let style = {}
    if (transparent) {
      style = {
        backgroundColor: 'transparent'
      }
    }
    return (
      <Message style={style} {...rest} >

      </Message>
    )
  }
}

export default MessageCustom
