import React from 'react';
import PersonalData from './PersonalData';
import LastJob from './LastJob';

class Form extends React.Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      handleUp,
      handleBlur,
      handleEnter,
      handleReset,
      checkedState,
      currentState,
    } = this.props

    return (
      <form onSubmit={ handleSubmit }>
        <h1>Formulário</h1>
        <PersonalData
          handleChange={ handleChange }
          handleUp={ handleUp }
          handleBlur= { handleBlur }
          checkedState={ checkedState }
          currentState={ currentState }
        />

        <LastJob
          handleChange={ handleChange }
          handleEnter={ handleEnter }
          currentState={ currentState }
        />
        
        <input type='submit' value='Enviar' className="btn btn-success"/>
        <button
          onClick={ handleReset }
          type="button"
          className="btn btn-danger"
        >Resetar Formulário</button>
      </form>
    );
  }
}

export default Form;