import React from 'react';

class Input extends React.Component {
  render() {
    const { label, name, type, handle, file } = this.props;

    return (
      <label>
        { label }
        <input
          name={ name }
          type={ type }
          onChange={ handle }
          ref={ file }
          maxLength={ 40 }
        />
      </label>
    );
  }
}

export default Input;