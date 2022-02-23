import React, { Component } from 'react'

class CreateInput extends Component {
  render() {
    const { type, name, nameOfClass, text, callback , maxlength , onblur } = this.props;
    return (
      <label>{text}
        <input type={type} name={name} className={nameOfClass} onChange={callback} maxLength={maxlength} onBlur={onblur} required/>
      </label>
    )
  }
}

export default CreateInput;
