import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class SegmentCustom extends Component {
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
      <Segment style={style} {...rest} >

      </Segment>
    )
  }
}

SegmentCustom.propTypes = {}
SegmentCustom.defaultProps = {
  opacity: 0.08
}

export default SegmentCustom
