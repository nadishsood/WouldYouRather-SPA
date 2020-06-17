import React from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from './../actions/index';
import { Image } from "semantic-ui-react";


class HeaderWithoutRouter extends React.Component{
  
    
    renderRightMenu(){
          if(this.props.loggedInUser){
              return (
                <div>
                  <p>{`Welcome ${this.props.loggedInUser.name}`}</p>
                  <Image
                    
                    src={this.props.loggedInUser.avatarURL}
                    floated="left"
                    size="mini"
                    circular
                  />
                  <button
                    onClick={() => {
                      this.props.signOut();
                    }}
                  >
                    Sign out
                  </button>
                </div>
              );
          }else{
              return <p>You are not logged in.</p>;
          }

    }
    render(){
        return (
          <div className="ui secondary pointing menu">
            
            <NavLink
              to="/"
              exact
              className="item"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/add"
              className="item"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
              exact
            >
              New Question
            </NavLink>

            <NavLink
              to="/leaderboard"
              className="item"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
              exact
            >
              Leader Board
            </NavLink>

            <div className="right menu">{this.renderRightMenu()}</div>
          </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.auth.user
  };
};

const Header = withRouter(HeaderWithoutRouter);
export default connect(mapStateToProps, {signOut})(Header);
