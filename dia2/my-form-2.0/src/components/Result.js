import React from 'react';

class Result extends React.Component {
  render() {
    const { objState } = this.props;
    const names = Object.keys(objState);

    names.splice(names.indexOf('alert'), 2);

    return (
      names.map((name) => {
        if (name === 'select'){
          return <p key={ name }>ESTADO: {objState[name]}</p>
        } if (name === 'checked') {
          return <p key={ name }>RESIDÊNCIA: { objState[name] }</p>;
        } if (name === 'cargoDesc') {
          return <p key={ name }>DESCRIÇÃO: { objState[name] }</p>;
        }
        return  <p key={ name } >{name.toUpperCase()}: { objState[name] }</p>;
      })
    );
  }
}

export default Result;