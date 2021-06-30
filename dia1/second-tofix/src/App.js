import React from 'react';
import User from './User';

const apiURL = 'https://api.randomuser.me/';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await fetch(apiURL);
    const obj = await response.json()
    const [ person ] = obj.results;
    this.setState({
      person: person,
      loading: false,
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { person } = nextState;
    const { dob } = person;
    const { age } = dob;

    console.log(age);

    if(age > 50) {
      return false;
    }
    return true;
  }

  render() {
    
    const loadingElement = <div>loading...</div>
    const { loading, person } = this.state;
    

    return (
      <>
        { loading
        ? loadingElement
        : <User person={ person } /> }
      </>
    );
  }
}

export default App;
