import React from 'react';

class Select extends React.Component {
  render(){
    const { handle, name } = this.props;

    return (
      <select name={ name } onChange={ handle }>
        { this.props.children }
      </select>
    );
  }
}

export default Select;