import React from 'react';
import Result from './Result';

class ResultRule extends React.Component {
  render() {
    const { state } = this.props;

    return (
      (state.submitted ?
        <div className="result-container">
          <h1>Informações Enviadas</h1>
          <Result objState={ state } />
        </div> : <></>
      )
    );
  }
}

export default ResultRule;