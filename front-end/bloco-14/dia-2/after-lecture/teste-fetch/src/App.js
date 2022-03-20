import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    }
  }

  async componentDidMount() {
    const value = await this.getDog('https://dog.ceo/api/breeds/image/random');
    this.setState({ data: value})
  }

  getDog = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  render() {
    const { data: { message, status } } = this.state;
    return (
      <div>
        <img src={message} alt="dog" />
        <p>Request { status !== 'success' ? 'failed' : status }</p>
      </div>
    );
  }
}

export default App;
