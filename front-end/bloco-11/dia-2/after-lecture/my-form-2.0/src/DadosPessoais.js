import React, { Component } from 'react'
import CreateInput from './CreateInput';
import CreateSelect from './CreateSelect';
import CreateRadio from './CreateRadio';

class DadosPessoais extends Component {

  render() {
    const { upperCase, removeSpecialChar , startWithNumber , saveStates } = this.props.callbacks;
    const states = this.props.states;
    const typesHabitation = this.props.typesHabitation;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <CreateInput type='text' name='name' text='Nome: ' nameOfClass='input-name' maxlength='500' callback={upperCase}/>

        <CreateInput type='email' name='email' text='Email: ' nameOfClass='input-email' maxlength='50' callback={saveStates} />

        <CreateInput type='text' name='cpf' text='CPF: ' nameOfClass='input-cpf' maxlength='11' callback={saveStates} />

        <CreateInput type='text' name='adress' text='Endereço: ' nameOfClass='input-adress' maxlength='200' callback={removeSpecialChar}/>

        <CreateInput type='text' name='city' text='Cidade: ' nameOfClass='input-city' onblur={startWithNumber}/>

        <CreateSelect name='state' text='Estado: ' nameOfClass='select-state' options={states} selectedState={'MG'} callback={saveStates}/>

        <CreateRadio name='habitation' text='Moradia: ' nameOfClass='radio-habitation' options={typesHabitation} selectedHabitation={typesHabitation[0]} callback={saveStates}/>

      </fieldset>
    )
  }
}

export default DadosPessoais;
