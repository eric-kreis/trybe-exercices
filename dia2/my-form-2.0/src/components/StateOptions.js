import React from 'react';
import states from '../statesData';

class StateOptions extends React.Component {
  render() {
    return states.map(({ label, value}) => (
      <option key={ value } value={ label }>{ label }</option>
    ));
  }
}

export default StateOptions;