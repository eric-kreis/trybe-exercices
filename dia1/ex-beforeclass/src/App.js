import React from 'react';
import './App.css';

const RICK_URL = 'https://rickandmortyapi.com/api/character';

class App extends React.Component {
  constructor() {
    super();
    this.rickFetch = this.rickFetch.bind(this);

    this.state = {
      loading: true,
    };
  }

  async rickFetch() {
    const apiFetch = await fetch(RICK_URL);
    const apiResponse = await apiFetch.json();
    const { results } = await apiResponse;
    this.setState({
      characters: results,
      loading: false,
    });
  }

  charactersContainer = () => {
    const { characters } = this.state;

    return (characters
      .map(({ id, name, image }) => (
        <div className="container" key={ id }>
          <img src={ image } alt={ name }/>
          <h3>{ name }</h3>
        </div>
      ))
    );
  }

  componentDidMount() {
    this.rickFetch();
  }

  render() {
    const { loading } = this.state;

    const loadingContainer = (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );

    return (
      <div className="App">
        <h1>Rick and Morty characters</h1>
        <div className="body">
          { (loading)
          ? (loadingContainer)
          : (this.charactersContainer()) }
        </div>
      </div>
    );
  }
}

export default App;
