import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.javaScript = this.javaScript.bind(this);
    this.python = this.python.bind(this);
    this.typeScript = this.typeScript.bind(this);
  }

  javaScript() {
    return console.log('JavaScript');
  }

  python() {
    return console.log('Python');
  }

  typeScript() {
    return console.log('TypeScript');
  }
  
  render() {
    return (
      <div>
        <button onClick={ this.javaScript }>JavaScript</button>
        <button onClick={ this.python }>Python</button>
        <button onClick={ this.typeScript }>TypeScript</button>
      </div>
    );
  }
}

export default App;
