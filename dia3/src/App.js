import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

      <Switch>
        <Route path="/about" component={ About } />
        <Route exact path="/" component={ Home } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
