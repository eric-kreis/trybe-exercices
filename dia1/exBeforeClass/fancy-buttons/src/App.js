import React from 'react';
import Button from './Button';

class App extends React.Component {
  
  render() {
    const languages = ['JavaScript', 'Python', 'TypeScript']

    return languages.map((language) => <Button key={ language } name={ language } />);
  }
}

export default App;
