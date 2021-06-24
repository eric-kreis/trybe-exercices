import React from 'react';
import Option from './Option';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      select: '',
      text: '',
      email: '',
      textarea: '',
      checkbox: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.fileInput.current.files.length <= 0) {
      alert('Envie um arquivo');
    } else {
      alert(
        `Arquivo selecionado - ${this.fileInput.current.files[0].name}`
      );
    }
  }

  render() {
    return (
      <form className='forms' onSubmit={ this.handleSubmit }>
        <fieldset>
          <legend>Tecnologia favorita</legend>
          <label>
            Qual sua tecnologia favorita:
            <select
              onChange={ this.handleChange }
              name='select'
            >
              <Option value='Selecione uma Tecnologia' />
              <Option value='HTML 5' />
              <Option value='CSS 3' />
              <Option value='JavaScript' />
              <Option value='React' />
            </select>
          </label>

          <label>
            Qual seu nome?
            <input
              type="text"
              name='text'
              onChange={ this.handleChange }
            ></input>
          </label>

          <label>
            Digite seu email:
            <input
              type="email"
              name='email'
              onChange={ this.handleChange }
            ></input>
          </label>

          <label>
            Justifique os motivos da escolha:
            <textarea
              name='textarea'
              onChange={ this.handleChange }
            ></textarea>
          </label>

          <label>
            Marque se você já estudou todas
            <input
              type="checkbox"
              name="checkbox"
              onChange={ this.handleChange }
            ></input>
          </label>

          <label>
            <input
              type='file'
              ref={ this.fileInput }
            ></input>
          </label>

          <button type='submit'>Enviar</button>

        </fieldset>
      </form>
    );
  }
}

export default Form;