import { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return <Pokedex array={pokemons}/>;
  };
};

export default App;