import React, { Component } from 'react';
import MyContext from './context/MyContext';
import GrandMother from './GrandMother';

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 1000000,
    }
  }

  spendMoney = () => {
    this.setState((prevState) => ({ money: prevState.money - 10 }));
  }
  
  render() {
    const myProps = { money: this.state.money, spendMoney: this.spendMoney };
    
    return (
      <MyContext.Provider value={myProps}>
        <h1>Eu sou o bisavô</h1>
        <GrandMother />
      </MyContext.Provider>
    );
  }
}

export default GreatGrandfather;