import React, { Component } from 'react'

class CreateSelect extends Component {
  render() {
    const { name, nameOfClass, text, callback, options, selectedState } = this.props;
    return (
      <section className={`${nameOfClass}-section`}>
        <label htmlFor={name}>{text}</label>
        <select name={name} defaultValue={selectedState} className={nameOfClass} onChange={callback}>
          {options.map((element, index) => <option value={element} key={index} required>{element}</option>)}
        </select>
      </section>
    )
  }
}

export default CreateSelect;
