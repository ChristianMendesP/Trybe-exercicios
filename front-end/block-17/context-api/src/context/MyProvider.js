import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
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
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;