import React, { Component } from 'react';
import MyContext from './context/MyContext';

class Daughter extends Component {
  render() {
    const value = this.context;
    return (
      <>
        <h3>Eu sou a filha</h3>
        <p>Tenho {value.money}</p>
        <button onClick={value.spendMoney}>Gastar 10</button>
      </>
    );
  }
}

Daughter.contextType = MyContext;

export default Daughter;