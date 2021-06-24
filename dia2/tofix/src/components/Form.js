import { Component } from 'react';
import Option from './Option';

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

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

  render() {

    return (
      <form className='forms'>
        <label>
          Qual sua tecnologia preferida:
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
      </form>
    );
  }
}

export default Form;