import React, { Component } from 'react'
import DadosPessoais from './DadosPessoais';
import DadosProfissionais from './DadosProfissionais';
import data from './data';
import RecuperaDados from './RecuperaDados'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: 'MG',
      habitation: '',
      curriculum: '',
      lastJob: '',
      jobDescription: '',
      clickedSubmit: false,
      clickedReset: false,
    }
    this.saveStates = this.saveStates.bind(this);
    this.toUpperCase = this.toUpperCase.bind(this);
    this.removeSpecialChar = this.removeSpecialChar.bind(this);
    this.startWithNumber = this.startWithNumber.bind(this);
    this.submitState = this.submitState.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
  }

  saveStates(event) {
    const value = (event.target.type === 'checkbox') ? event.target.selected : event.target.value;
    this.setState({ [event.target.name]: value });
  }

  toUpperCase(event) {
    event.target.value = event.target.value.toUpperCase();
    this.saveStates(event);
  }

  removeSpecialChar(event) {
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
    this.saveStates(event);
  }

  startWithNumber(event) {
    const regex = /^\d/g;
    event.target.value = regex.test(event.target.value) ? '' : event.target.value;
    this.saveStates(event);
  }

  submitState(event) {
    event.preventDefault();
    const allValues = Object.values(this.state);
    console.log(allValues);
    console.log(!allValues.some((element) => element === ''));
    if (!allValues.some((element) => element === '')) {
      this.saveStates(event);
    }
  }

  showInfo() {
    if (this.state.clickedSubmit) {
      const allKeys = Object.keys(this.state);
      return (
        <div>
          {allKeys.map((name, index) => <p key={index}>{name}: {this.state[name]}</p>)}
        </div>
      )
    }
    return <br />
  }

  clearInfo() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: 'MG',
      habitation: '',
      curriculum: '',
      lastJob: '',
      jobDescription: '',
      clickedSubmit: false,
      clickedReset: false,
    })
  }

  render() {
    const callbacks = {
      upperCase: this.toUpperCase,
      removeSpecialChar: this.removeSpecialChar,
      startWithNumber: this.startWithNumber,
      saveStates: this.saveStates,
    }

    return (
      <main>
        <h1>Formulário</h1>
        <form>
          <DadosPessoais callbacks={callbacks} states={data.states} typesHabitation={data.typesHabitation} />
          <br />
          <DadosProfissionais callbacks={callbacks} />
          <br />
          <button type="submit" name="clickedSubmit" value="true" onClick={this.submitState}>Enviar</button>
          <button type='reset' name="clickedReset" value="true" onClick={this.clearInfo}>Limpar</button>
        </form>
        <RecuperaDados values={this.state} nameOfClass="shownData" callback={this.showInfo} />
      </main>
    );
  }

}

export default App;
