import React from 'react'
import Input from './Input';

class PersonalInfo extends React.Component {
  render() {
    const {
      handleUp,
      handleChange,
      handleBlur,
      currentState
    } = this.props

    return (
      <>
        <Input
          type='text'
          label='Nome'
          name='nome'
          handleChange={ handleChange }
          handleUp={ handleUp }
          max={ 40 }
          currentState={ currentState.nome }
        />
        <Input
          type='email'
          label='E-mail'
          name='email'
          handleChange={ handleChange }
          handleBlur={ handleBlur }
          max={ 50 }
          currentState={ currentState.email }
        />
        <Input
          type='text'
          label='CPF'
          name='cpf'
          handleChange={ handleChange }
          max={ 11 }
          currentState={ currentState.cpf }
        />
        <Input
          type='text'
          label='Endereço'
          name='endereço'
          handleChange={ handleChange }
          max={ 200 }
          currentState={ currentState.endereço }
        />
        <Input
          type='text'
          label='Cidade'
          name='cidade'
          handleChange={ handleChange }
          handleBlur={ handleBlur }
          currentState={ currentState.cidade }
        />
      </>
    )
  }
}

export default PersonalInfo;