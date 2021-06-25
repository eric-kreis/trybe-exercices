import React from 'react';
import Select from './Select';
import Option from './Option';
import Input from './Input';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTest = this.handleTest.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      select: '',
      name: '',
      email: '',
      textarea: '',
      checkbox: false,
      formularioComErros: true,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleTest() {
    const { select,  name, email, textarea } = this.state;

    const tests = [
      !select.length,
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !textarea.length,
    ];

    const formsCompleted = tests.every((test) => test !== true);

    this.setState({ formularioComErros: !formsCompleted });
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
            <Select
              handle={ this.handleChange }
              name='select'
            >
              <Option value='Selecione uma Tecnologia' />
              <Option value='HTML 5' />
              <Option value='CSS 3' />
              <Option value='JavaScript' />
              <Option value='React' />
            </Select>
          </label>

          <Input
            label='Qual seu nome?'
            type="text"
            name='name'
            handle={ this.handleChange }
          />

          <Input
            label='Digite seu email:'
            type="email"
            name='email'
            handle={ this.handleChange }
          />

          <label>
            Justifique os motivos da escolha:
            <textarea
              name='textarea'
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Marque se você já estudou todas
            <input
              type="checkbox"
              name="checkbox"
              onChange={ this.handleChange }
            />
          </label>
          
          <label>
            <input
              type='file'
              ref={ this.fileInput }
            />
          </label>  

          <button type='submit'>Enviar</button>

        </fieldset>
      </form>
    );
  }
}

export default Form;