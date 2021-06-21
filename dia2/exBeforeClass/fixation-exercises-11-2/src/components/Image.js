import { Component } from 'react';

class Image extends Component {
  render() {
    const { props } = this;
    return (
      <img src={props.source} alt={props.alternativeText} />
    );
  }
}

export default Image;