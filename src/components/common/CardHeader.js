import React, { Component } from 'react'

class CardHeader extends Component {
  render() {
    let {title, subtitle, titleCentered} = this.props

    return (
      <div className={`py-2 border-bottom bg-light ${titleCentered && 'text-center'}`}>
        <div className="row">
          <div className="col-md-12">
            <h4 className="mx-3 text-dark">{title}</h4>
          </div>
        </div>
        {subtitle &&
          <div className="row">
            <div className="col-md-12">
              <h5 className="mx-3 text-dark">{subtitle}</h5>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default CardHeader
