// App.js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    }
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then(({ joke }) => this.setState({ joke: joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App" data-testid="joke">
        {joke}
      </div>
    );
  }
}

export default App;