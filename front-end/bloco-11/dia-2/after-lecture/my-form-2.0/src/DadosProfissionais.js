import React, { Component } from 'react'
import CreateInput from './CreateInput';
import CreateTextArea from './CreateTextArea';

class DadosProfissionais extends Component {

  render() {

    const { saveStates } = this.props.callbacks;

    return (
      <fieldset>
        <legend>Último emprego</legend>
        <CreateTextArea name='curriculum' text='Resumo do currículo: ' nameOfClass='textarea-lcurriculum'  maxlength='1000' callback={saveStates} />
        <CreateTextArea name='lastJob' text='Último cargo: ' nameOfClass='textarea-lastJob'  maxlength='40' callback={saveStates} />
        <CreateInput type='text' name='jobDescription' text='Descrição do cargo: ' nameOfClass='input-jobDescription' maxlength='500' callback={saveStates} />
      </fieldset>
    )
  }
}

export default DadosProfissionais;