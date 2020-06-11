import React from 'react';
import * as data from './../database/_DATA';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Public from './Public';
import Protected from "./Protected";
import Login from './Login';
import AuthButton from './AuthButton';
import Header from './Header';


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

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    </div>
  );
}
