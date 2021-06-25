import React from 'react';

class Select extends React.Component {
  render() {
    const { name, handleChange, currentState } = this.props;

    return (
      <label>
        <span>Selecione estado: </span>
        <select
          className="form-select"
          name={ name }
          onChange={ handleChange }
          value={ currentState }>
          { this.props.children }
        </select>
      </label>
      
    );
  }
}

export default Select;