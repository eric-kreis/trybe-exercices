import React from 'react';
import Result from './Result';

class ResultRule extends React.Component {
  render() {
    const { state } = this.props;

    if (state.submitted) {
      return (
        <div className="result-container">
          <h1>Informações Enviadas</h1>
          <Result objState={ state } />
        </div>
      );
    }
    return <></>
  }
}

export default ResultRule;