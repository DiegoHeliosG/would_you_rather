import React, { Component } from 'react'
import classNames from 'classnames/bind';

class Card extends Component {
  render() {
    let {className} = this.props;
    let myClassNames = classNames('border', className);

    return (
      <div className={myClassNames}>
        {this.props.children}
      </div>
    )
  }
}

export default Card
