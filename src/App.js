import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import Notifications from 'react-notify-toast'

import { setCurrentUser, logoutUser } from "./actions/authActions.js";
import { Provider } from "react-redux";
import store from "./store.js";

import Confirm from './components/ConfirmEmail/Confirm.js';
import PrivateRoute from "./components/private-route/PrivateRoute.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import LandingPage from "../src/views/LandingPage.js";
import SignIn from "../src/views/SignIn.js";
import SignUp from "../src/views/SignUp.js";
import StartJourney from "../src/views/StartJourney.js";
import YoutubeVideos from "../src/views/YoutubeVideos/youtubeVideos.js";
import TrialBlog from "../src/views/TrialBlogs/TrialBlogs.js";




var hist = createBrowserHistory();
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router history={hist}>
        <Notifications />
        <Route exact path="/startjourney" component={StartJourney} />
        <Route exact path='/confirm/:id' component={Confirm} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/YoutubeVideos" component={YoutubeVideos} />
        <Route exact path="/TrialBlog" component={TrialBlog} />
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}

        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/YoutubeVideos" component={YoutubeVideos} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
