import React from 'react';
import Form from './components/Form';
import ResultRule from './components/ResultRule';

const initialState = {
  nome: '',
  email: '',
  cpf: '',
  endereço: '',
  cidade: '',
  select: 'AC',
  checked: 'casa',
  resumo: '',
  cargo: '',
  cargoDesc: '',
  alert: 0,
  submitted: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = initialState;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleUp({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value.toUpperCase()
    }, () => target.value = target.value.toUpperCase());
  }

  handleBlur({ target }) {
    if (target.value.match(/^\d/) && target.name === 'cidade') {
      return this.setState({ [target.name]: '' }, () => target.value = '');
    } if (target.value.match(/\S+@\S+\.\S+/) && target.name === 'email') {
      this.setState({ [target.name]: target.value });
    } else {
      alert('email inválido')
    }
  }

  handleEnter() {
    if (this.state.alert === 0) {
      alert('Preencha com cuidado esta informação.');
    }
    this.setState((state, _props) => ({
      alert: state.alert = 1
    }));
  }

  handleSubmit(event) {
    alert('Formulário enviado com sucesso');
    event.preventDefault();
    this.setState({ submitted: true });
  }

  handleReset() {
    this.setState(initialState);
  }

  render() {
    return (
      <>
        <Form
          handleSubmit={ this.handleSubmit }
          handleChange={ this.handleChange }
          handleBlur={ this.handleBlur }
          handleUp={ this.handleUp }
          handleEnter={ this.handleEnter }
          handleReset={ this.handleReset }
          checkedState={ this.state.checked }
          currentState={ this.state }
        />
        <ResultRule state={ this.state } />
      </>
    );
  }
}

export default App;