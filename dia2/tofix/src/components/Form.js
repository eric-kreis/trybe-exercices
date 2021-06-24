import { Component } from 'react';
import Option from './Option';

class Form extends Component {
  constructor() {
    super();
    this.selectChange = this.selectChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.textareaChange = this.textareaChange.bind(this);

    this.state = {
      select: '',
      text: '',
      email: '',
      textarea: '',
    }
  }

  selectChange(event) {
    this.setState({
      select: event.target.value,
    });
  }

  textChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  emailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  textareaChange(event) {
    this.setState({
      textarea: event.target.value,
    });
  }

  render() {
    const { select, text, email, textarea } = this.state;

    return (
      <form className='forms'>
        <label>
          Qual sua tecnologia preferida:
          <select value={ select } onChange={ this.selectChange }>
            <Option value='Selecione uma Tecnologia' />
            <Option value='HTML 5' />
            <Option value='CSS 3' />
            <Option value='JavaScript' />
            <Option value='React' />
          </select>
        </label>
        <label>
          Qual seu nome?
          <input type="text" value={ text } onChange={ this.textChange }></input>
        </label>
        <label>
          Digite seu email:
          <input type="email" value={ email } onChange={ this.emailChange }></input>
        </label>
        <label>
          Justifique os motivos da escolha:
          <textarea value={ textarea } onChange={ this.textareaChange }></textarea>
        </label>
      </form>
    );
  }
}

export default Form;