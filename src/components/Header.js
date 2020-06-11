import React from 'react';
import { Link } from 'react-router-dom'
import { fakeAuth } from "./App";
import { withRouter } from "react-router-dom";

class HeaderWithoutRouter extends React.Component{
    
    renderRightMenu(){
          if(fakeAuth.isAuthenticated){
              return (
                <React.Fragment>
                  <p>Welcome!</p>
                  <button
                    onClick={() => {
                      fakeAuth.signout(() => this.props.history.push("/"));
                    }}
                  >
                    Sign out
                  </button>
                </React.Fragment>
              );
          }else{
              return <p>You are not logged in.</p>;
          }

    }
    render(){
        console.log(this.props);
        return (
          <div className = "ui secondary pointing menu">
            <Link to = "/" className = "item">Home</Link>
            <Link to = "/" className = "item">New Question</Link>
            <Link to = "/" className = "item">Leader Board</Link>
            
            <div className = "right menu">
                {this.renderRightMenu()}
            </div>
          </div>
        )
    }
}

const Header = withRouter(HeaderWithoutRouter);

export default Header;