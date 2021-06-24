import { Component } from 'react';

class Option extends Component {
  render() {
    const { value } = this.props;

    return (
      <option value={ value }>{ value }</option>
    );
  }
}

export default Option;