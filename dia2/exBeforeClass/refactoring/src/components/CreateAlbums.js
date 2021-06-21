import { Component } from 'react';

class CreateAlbum extends Component {
  render() {
    const { image, title, releaseDate, others } = this.props.album;
  
    return (
      <section>
        <img src={ image } alt={ title } />
        <h2>{ title }</h2>
        <p>Lançamento: { releaseDate.year }</p>
        <p>Gravadora: { others.recordCompany }</p>
        <p>Formatos: { others.formats }</p>
      </section>
    );
  }
}

export default CreateAlbum;