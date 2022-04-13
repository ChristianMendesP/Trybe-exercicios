import React, { Component } from 'react';
import Daughter from './Daughter';

class GrandMother extends Component {
  render() {
    return (
      <>
        <h2>Eu sou a avó</h2>
        <Daughter />
      </>
    );
  }
}

export default GrandMother;