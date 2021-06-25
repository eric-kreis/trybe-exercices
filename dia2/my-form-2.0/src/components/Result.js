import React from 'react';

class Result extends React.Component {
  render() {
    const { objState } = this.props;
    const names = Object.keys(objState);
    names.splice(names.indexOf('alert'));
    names.splice(names.indexOf('submitted'));

    return (
      names.map((name) => {
        if (name === 'select'){
          return (
          <p key={ name }>
            estado: {objState[name]}
          </p>
          );
        } if (name === 'checked') {
          return <p key={ name }>residência: { objState[name] }</p>;
        } if (name === 'cargoDesc') {
          return <p key={ name }>descrição do cargo: { objState[name] }</p>;
        }
        return  <p key={ name }>{name}: { objState[name] }</p>;
      })
    );
  }
}

export default Result;