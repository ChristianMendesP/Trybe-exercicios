import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      clicks: [0, 0, 0]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(button) {
    this.setState((previousState) => ({
      clicks: previousState.clicks.map((element, index) => index === button ? element + 1 : element)
    })
    )
  }


  render() {
    console.log(this.state.clicks);
    return (
      <>
        <button onClick={() => this.handleClick(0)}>click 0</button>
        <button onClick={() => this.handleClick(1)}>click 1</button>
        <button onClick={() => this.handleClick(2)}>click 2</button>
      </>
    )
  }
}

export default App;