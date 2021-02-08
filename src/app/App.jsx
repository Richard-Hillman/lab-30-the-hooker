/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ContainerOne from '../mainContainer/ContainerOne';


// -----------------------------------------------------------------------------------

export default class App extends Component {

  // -----------------------------------------------------------------------------------

  render() {
    return (
  
      <Router>

        <Switch>

          {/* this will be the home route */}
          <Route
            path="/"
            exact
            component = { ContainerOne }
          />


        </Switch>

      </Router>

    );
  }
}
