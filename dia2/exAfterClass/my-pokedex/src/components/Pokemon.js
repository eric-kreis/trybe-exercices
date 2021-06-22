import { Component } from "react";
import PropTypes from 'prop-types';
import '../App.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <li className='Pokemon'>
        <div className='About'>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>Avarage Weight: { value }{ measurementUnit }</p>
        </div>
        <div>
          <img src={ image } alt='pokemon' />
        </div>
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  })
};

export default Pokemon;