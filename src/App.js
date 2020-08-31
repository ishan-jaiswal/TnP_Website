import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/views/Login';
import Home from '../src/views/Home';
import Welcome from '../src/views/Welcome';
import './App.css';
// import Header from '../src/views/Header'
function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/home' component={Home} />          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
