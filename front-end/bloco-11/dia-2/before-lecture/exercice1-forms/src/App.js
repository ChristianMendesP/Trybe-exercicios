import React, { Component } from 'react'
import './App.css';
import CreateInput from './CreateInput';

class App extends Component {


  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      ageGroup: '',
      phoneNumber: '',
      password: '',
      description: '',
      dogs: '',
      cats: '',
      avatar: '',
      formularioComErros: false
    };
  }

  handleChange(value, key) {
    this.setState({
      [key]: value,
    });
  }

  handleError({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.handleChange(value, target.name);
    this.setState({formularioComErros: (value.length > 10 || value.length === 0)})
  }


  render() {

    return (
      <form>
        <label htmlFor="id-select">Age group: </label>
        <select id="id-select" name="ageGroup" value={this.state.ageGroup} onChange={this.handleChange} >
          <option value="" disabled selected >Choose...</option>
          <option>Teenager</option>
          <option>Adult</option>
          <option>Senior</option>
        </select>

        <br />

        <CreateInput type="number" id="id-number" name="phoneNumber" value={this.state.phoneNumber} text="Phone number" onChange={this.handleError} />

        <br />

        <CreateInput type="password" id="id-password" name="password" value={this.state.password} text="Password" onChange={this.handleError} />

        <br />

        <label htmlFor="id-description">Description: </label>
        <textarea id="id-description" name="description" value={this.state.description} onChange={this.handleChange}></textarea>

        <br />

        <label>Animals: </label>
        <input type="checkbox" id="id-checkbox" name="dogs" value={this.state.dogs} onChange={this.handleChange} />Dogs
        <input type="checkbox" id="id-checkbox" name="cats" value={this.state.cats} onChange={this.handleChange} />Cats

        <br />

        <fieldset>
          <legend>Photo</legend>
          <label for="id-avatar">Choose a profile picture:</label>
          <input type="file" accept="image/png, image/jpeg" id="id-avatar" name="avatar" value={this.state.avatar} onChange={this.handleChange} />
        </fieldset>
      </form>
    );
  }
}

export default App;
