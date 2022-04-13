import React, { Component } from 'react';
import MyContext from './context/MyContext';

class Daughter extends Component {
  render() {
    return (
      <>
        <h3>Eu sou a filha</h3>
        <MyContext.Consumer>
          {
            value => (
              <>
                <p>Tenho {value.money}</p>
                <button onClick={value.spendMoney}>Gastar 10</button>
              </>
            )
          }
        </MyContext.Consumer>
      </>
    );
  }
}

export default Daughter;