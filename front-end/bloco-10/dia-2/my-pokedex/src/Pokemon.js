import { Component } from "react";

class Pokemon extends Component {
  render() {
    return (
      <div className="pokemon">
        <div className="poke-infos">
          <p>{this.props.poke.name}</p>
          <p>{this.props.poke.type}</p>
          <p>{this.props.poke.averageWeight.value} {this.props.poke.averageWeight.measurementUnit}</p>
        </div>
        <div className="poke-image">
          <img src={this.props.poke.image} alt={this.props.poke.name}></img>
        </div>
      </div>
    )
  }
}

export default Pokemon