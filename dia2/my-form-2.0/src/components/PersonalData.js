import React from 'react';
import PersonalInfo from './PersonalInfo';
import Select from './Select';
import StateOptions from './StateOptions';
import Residence from './Residence';

class PersonalData extends React.Component {
  render() {
    const {
      handleChange,
      handleUp,
      handleBlur,
      checkedState,
      currentState
    } = this.props;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <PersonalInfo
          handleUp={ handleUp }
          handleChange={ handleChange }
          handleBlur={ handleBlur }
          currentState={ currentState }
        />
        <Select name='select' handleChange={ handleChange } currentState={ currentState.select }>
          <StateOptions />
        </Select>
        <Residence handleChange={ handleChange } checkedState={ checkedState }/> 
      </fieldset>
    );
  }
}

export default PersonalData;