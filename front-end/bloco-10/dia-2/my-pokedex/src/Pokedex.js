import { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return (
      <main>
        <h1 className="title">Pokedex</h1>
        <section className="pokedex">
        {this.props.array.map((element, index) => <Pokemon poke={element} key={index}/>)}
        </section>
      </main>
    );
  };
};

export default Pokedex;