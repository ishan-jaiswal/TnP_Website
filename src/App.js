import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/views/Login';
import Profile from '../src/views/Profile';
import MyAccount from '../src/views/MyAccount';
import Home from '../src/views/Home';
import Welcome from '../src/views/Welcome';
import './App.css';
import Forget from './views/Forget';
function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/forget' component={Forget} />
          <Route path='/home' component={Home} />   
          <Route path='/profile' component={Profile} />
          <Route path='/myaccount' component={MyAccount} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
