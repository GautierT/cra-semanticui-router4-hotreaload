import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class CardCustom extends Component {
  render () {
    const {transparent, opacity, centered, ...rest} = this.props

    let style = {}
    if (transparent) {
      style = {
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        border: 'none'
      }
    }
    if (centered) {
      style.margin = 'auto'
    }
    return (
      <Card style={style} {...rest} >

      </Card>
    )
  }
}

CardCustom.propTypes = {}
CardCustom.defaultProps = {
  opacity: 0.08
}

export default CardCustom
