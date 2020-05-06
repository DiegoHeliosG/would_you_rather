import React, { Component } from 'react'

class CardImage extends Component {
  render() {
    let {url, alt} = this.props

    return (
      <img className="user-image w-100 mb-3 text-center text-md-left rounded-circle shadow-sm" src={url} alt={alt} />
    )
  }
}

export default CardImage
