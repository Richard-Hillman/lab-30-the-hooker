/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AllVillagers from '../mainContainer/listContainer/AllVillagers';
import VillagerDetails from '../mainContainer/villagerContainer/VillagerDetails';


// -----------------------------------------------------------------------------------

export default function App() {

  // -----------------------------------------------------------------------------------

  return (
    <>
      <Router>

        <Switch>

          {/* this will be the home route */}
          <Route
            path="/"
            exact
            component = { AllVillagers }
          />

          <Route
            path="/villagers/:_id"
            exact
            // Can pass props this way
            // render={(routerProps) => <Home {...routerProps} />}
            // ------------------------------------------------------------
            // can't pass prop easier syntax 
            component = { VillagerDetails }
          />

        </Switch>

      </Router>
    </>
  );
}

