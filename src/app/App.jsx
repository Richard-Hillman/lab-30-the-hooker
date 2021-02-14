/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ContainerOne from '../mainContainer/listContainer/ContainerOne';
import ContainerTwo from '../mainContainer/villagerContainer/ContainerTwo';


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

          <Route
            path="/ContainerTwo/:id"
            exact
            // Can pass props this way
            // render={(routerProps) => <Home {...routerProps} />}
            // ------------------------------------------------------------
            // can't pass prop easier syntax 
            component = { ContainerTwo }
          />

        </Switch>

      </Router>

    );
  }
}
