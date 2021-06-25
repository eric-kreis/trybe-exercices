import React from 'react';
import Result from './Result';

class ResultRule extends React.Component {
  render() {
    const { state } = this.props;
    return (
      (state.submitted ?
        (<div>
            <Result objState={ state } />
          </div>) : <></>
      )
    );
  }
}

export default ResultRule;