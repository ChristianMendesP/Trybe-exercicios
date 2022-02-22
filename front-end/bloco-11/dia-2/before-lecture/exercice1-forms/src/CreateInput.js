import React, { Component } from 'react'

class CreateInput extends Component {
  render() {
    const { type, id, name, value, onChange , text } = this.props;
    return (
      <>
        <label htmlFor={id}>{text}: </label>
        <input type={type} id={id} name={name} value={value} onChange={onChange} />
      </>
    )
  }
}

export default CreateInput
