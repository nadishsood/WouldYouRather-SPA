import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";

import Login from './Login';
import Header from './Header';
import Home from './Home';
import QuestionDetail from "./QuestionDetail";

import { connect } from "react-redux";


const PrivateRoute = ({ component: Component, loggedInUser: user, ...rest }) => {
  
  
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location }  }}
          />
        )
      }
    />
  );
}

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

class App extends React.Component{
render(){
return (
  <div className="ui container">
    <Router>
      <div>
        <Header />
        <PrivateRoute
          exact
          path="/"
          component={Home}
          loggedInUser={this.props.loggedInUser}
        />
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/add"
          loggedInUser={this.props.loggedInUser}
          component={NewQuestion}
        />
        <PrivateRoute
          exact
          path="/leaderboard"
          loggedInUser={this.props.loggedInUser}
          component={LeaderBoard}
        />
        <PrivateRoute
          exact
          path="/questions/:id"
          loggedInUser={this.props.loggedInUser}
          component={QuestionDetail}
        />
        <Route exact path="/404" component={NoMatchPage} />
      </div>
    </Router>
  </div>
);
}
  
}

const mapStateToProps =(state)=>{
    return {
        loggedInUser: state.auth.user
    }
}

export default connect(mapStateToProps, {
  
})(App);
