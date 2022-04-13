import React, { Component } from 'react';
import GrandMother from './GrandMother';

class GreatGrandfather extends Component {
  render() {
    
    return (
      <>
        <h1>Eu sou o bisavô</h1>
        <GrandMother />
      </>
    );
  }
}

export default GreatGrandfather;