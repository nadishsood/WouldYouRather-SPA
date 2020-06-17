import React from 'react';
import { Link } from 'react-router-dom'
import { fakeAuth } from "./App";
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
                    size="small"
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
          <div className = "ui secondary pointing menu">
            <Link to = "/" className = "item">Home</Link>
            <Link to = "/add" className = "item">New Question</Link>
            <Link to = "/leaderboard" className = "item">Leader Board</Link>
            
            <div className = "right menu">
                {this.renderRightMenu()}
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.auth.user
  };
};

const Header = withRouter(HeaderWithoutRouter);
export default connect(mapStateToProps, {signOut})(Header);
