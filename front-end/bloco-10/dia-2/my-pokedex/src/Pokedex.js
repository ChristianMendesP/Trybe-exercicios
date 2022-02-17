import { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return (
      <main>
        <h1 className="title">Pokedex</h1>
        <section className="pokedex">
        {this.props.array.map((element) => <Pokemon poke={element} />)}
        </section>
      </main>
    );
  };
};

export default Pokedex;