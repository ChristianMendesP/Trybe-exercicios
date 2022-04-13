import React, { Component } from 'react';
import MyProvider from './context/MyProvider';
import GrandMother from './GrandMother';

class GreatGrandfather extends Component {
  render() {
    
    return (
      <MyProvider>
        <h1>Eu sou o bisavô</h1>
        <GrandMother />
      </MyProvider>
    );
  }
}

export default GreatGrandfather;