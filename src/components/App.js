import React from 'react';
import * as data from './../database/_DATA';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Public from './Public';
import Protected from "./Protected";
import Login from './Login';
import Header from './Header';
import Home from './Home';


export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: "/login", state: {from: props.location}}} />
      )
    }
  />
);

export default function App() {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/public" component={Public} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact  path="/protected" component={Protected} />
        </div>
      </Router>
    </div>
  );
}
