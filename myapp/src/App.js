import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignIn from './pages/SignIn';
import NavBar from './NavBar';
import UrbanDictionary from './pages/UrbanDictionary';
import CreateAccount from './pages/CreateAccount';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <div id='page-body'>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/signin" component={SignIn}  />
              <Route path="/urbandictionary" component={UrbanDictionary}  />
              <Route path="/createaccount" component={CreateAccount}  />
            </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
