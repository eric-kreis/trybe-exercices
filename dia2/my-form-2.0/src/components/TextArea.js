import React from 'react';

class TextArea extends React.Component {
  render() {
    const { max, name, label, handleChange, handleEnter, currentState } = this.props

    return (
      <div className="form-floating">
        <textarea
          className="form-control"
          style={{height: "100px"}}
          placeholder={ label }
          id={ name }
          maxLength={ max }
          name={ name }
          onChange={ handleChange }
          onMouseEnter={ handleEnter }
          value={ currentState }
          required
        />
        <label htmlFor={ name }>{ label }</label>
      </div>
    )
  }
}

export default TextArea;
