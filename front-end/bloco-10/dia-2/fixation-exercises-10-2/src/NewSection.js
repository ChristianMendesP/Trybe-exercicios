import { Component } from "react";
import PropTypes from 'prop-types';

class NewSection extends Component {
  render() {
    return (
      <section>
        <img src={this.props.album.image} alt={this.props.album.title} />
        <h2>{this.props.title}</h2>
        <p>Lançamento: {this.props.album.releaseDate.year}</p>
        <p>Gravadora: {this.props.album.others.recordCompany}</p>
        <p>Formatos: {this.props.album.others.formats}</p>
      </section>
    )
  }
}

NewSection.propTypes = {
  album: PropTypes.object.isRequired,
};

NewSection.defaultProps = {
  album: 
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
    title: 'Ghost Stories',
    releaseDate: {
      year: '2014',
      month: '05',
      day: '16',
    },
    others: {
      recordCompany: 'Parlophone',
      formats: 'CD, digital'
    }
  }
}

export default NewSection;