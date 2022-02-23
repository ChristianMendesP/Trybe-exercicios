import React, { Component } from "react";

class CreateTextArea extends Component {
  render() {
    const { name, text, nameOfClass, maxlength, callback } = this.props;
    return (
      <div className={nameOfClass}>
        <label htmlFor={name}>{text}</label>
        <textarea id={name} name={name} maxLength={maxlength} onChange={callback} required />
      </div>
    )
  }
}

export default CreateTextArea;
