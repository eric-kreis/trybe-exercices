import React from 'react';
import TextArea from './TextArea';
import Input from './Input';

class LastJob extends React.Component {
  render() {
    const { handleChange, handleEnter, currentState } = this.props

    return (
      <fieldset>
        <legend>Currículo</legend>
        <TextArea
          max={ 1000 }
          name='resumo'
          label='Resumo do currículo'
          handleChange={ handleChange }
          currentState={ currentState.resumo }
          required
        />
        <TextArea
          max={ 40 }
          name='cargo'
          label='Cargo'
          handleChange={ handleChange }
          handleEnter={ handleEnter }
          currentState={ currentState.cargo }
          required
        />
        <Input
          label='Descrição do cargo'
          type='text'
          name='cargoDesc'
          max={ 500 }
          handleChange={ handleChange }
          currentState={ currentState.cargoDesc }
        />
      </fieldset>
    );
  }
}

export default LastJob;