import { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { poke } = this.props;
    return (
      <div className="pokemon">
        <div className="poke-infos">
          <p>{poke.name}</p>
          <p>{poke.type}</p>
          <p>{poke.averageWeight.value} {poke.averageWeight.measurementUnit}</p>
        </div>
        <div className="poke-image">
          <img src={poke.image} alt={poke.name}></img>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired
}

export default Pokemon