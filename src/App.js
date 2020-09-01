import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import LandingPage from "../src/views/LandingPage.js";
import SignIn from "../src/views/SignIn.js";
import SignUp from "../src/views/SignUp.js";
import StartJourney from "../src/views/StartJourney.js";



var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route exact path="/startjourney" component={StartJourney} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route path="/" component={LandingPage} />

      </Switch>
  </Router>
  );
}

export default App;
