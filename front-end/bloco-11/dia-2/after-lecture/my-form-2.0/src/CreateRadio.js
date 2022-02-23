import React, { Component } from 'react'

class CreateRadio extends Component {
  render() {
    const { name, nameOfClass, text, callback, options , selectedHabitation} = this.props;
    return (
      <section className={`${nameOfClass}-section`}>
        <p>{text}</p>
        {options.map((element, index) => (
          <div key={index}>
          <input type='radio' name={name} value={element} id={element} onChange={callback} />
          <label htmlFor={element}>{element}</label>
          </div>
        ))}
      </section>
    )
  }
}

export default CreateRadio;
