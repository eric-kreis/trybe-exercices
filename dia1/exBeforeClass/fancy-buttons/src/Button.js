import React from 'react';

class Button extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.changeColor = this.changeColor.bind(this);

    this.state = {
      clicksCount: 0,
      backgroundColor: 'white'
    }
  }

  handleChange() {
    this.setState((state, _props) => ({
      clicksCount: state.clicksCount + 1
    }), () => this.changeColor());
  }

  changeColor() {
    if (this.state.clicksCount % 2 === 0 && this.state.clicksCount !== 0) {
      this.setState({backgroundColor: 'green'});
    } else {
      this.setState({backgroundColor: 'white'});
    }
  }

  render() {
    const { name } = this.props

    return <button onClick={ this.handleChange } style={{backgroundColor: this.state.backgroundColor}}>{ name }</button>;
  }
}

export default Button;