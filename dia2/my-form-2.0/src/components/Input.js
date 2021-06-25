import React from 'react';

class Input extends React.Component {
  render() {
    const {
      label,
      type,
      name,
      max,
      handleChange,
      handleUp,
      handleBlur,
      currentState
    } = this.props;
    return (
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id= { name }
          type={ type }
          name={ name }
          maxLength={ max }
          onChange={ handleChange }
          onKeyUp={ handleUp }
          onBlur={ handleBlur }
          value={ currentState }
          placeholder='placeholder'
          required
        />
        <label htmlFor= { name }>{ label }</label>
      </div>
    )
  }
}

export default Input;