import React, {Component} from 'react'
import classNames from 'classnames/bind';

class RadioGroupToggle extends Component {
  render() {
    let {radios, handleChange, className, bootstrapColor} = this.props;

    return (
      <div className={classNames(className, 'btn-group btn-group-toggle')} data-toggle="buttons">
        {radios.map((radio) => (
          <label key={radio.id} className={`btn btn-${bootstrapColor} ${radio.active ? 'active' : ''}`}>
            <input type="radio" name="options" id={radio.id} autoComplete="off" onChange={handleChange} checked={radio.active} />
            {radio.label}
          </label>
        ))}
      </div>
    )
  }
}

export default RadioGroupToggle;
