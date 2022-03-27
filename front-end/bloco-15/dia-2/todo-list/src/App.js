import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTask from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleState = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { input } = this.state;
    const { add, typed } = this.props;
    return (
      <div>
        <p>Teste</p>
        <input
          type="text"
          placeholder="Tarefa"
          id="input-task"
          name="input"
          value={input}
          onChange={this.handleState}></input>
        <button type="button" id="add-btn" onClick={() => this.setState({ input: ''}, () => add(input))}>Adicionar</button>
        <div>
          <ul>
            { typed.map((element, index) => <li key={ index }>{ element }</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

const dispatchToProps = (dispatch) => ({
  add: (newTask) => dispatch(addTask(newTask)),
})

const storeToProps = (store) => ({
  typed: store.reducerAddTask.task,
})

export default connect(storeToProps, dispatchToProps)(App);
