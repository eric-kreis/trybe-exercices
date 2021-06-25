import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.objState
  }

  render() {
    const names = Object.keys(this.state);

    names.splice(names.indexOf('alert'), 2);

    return (
      names.map((name) => {
        if (name === 'select'){
          return <p key={ name }>ESTADO: {this.state[name]}</p>
        } if (name === 'checked') {
          return <p key={ name }>RESIDÊNCIA: { this.state[name] }</p>;
        } if (name === 'cargoDesc') {
          return <p key={ name }>DESCRIÇÃO: { this.state[name] }</p>;
        }
        return  <p key={ name } >{name.toUpperCase()}: { this.state[name] }</p>;
      })
    );
  }
}

export default Result;