import React from 'react';
import { fakeAuth } from './App';
import { Redirect }from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUsers } from './../actions';

// class Login extends React.Component{
//     state={
//         redirectToReferrer: false
//     }
//     login=()=>{
//         fakeAuth.authenticate(()=>{
//             this.setState(()=>({
//                 redirectToReferrer: true
//             }))
//         })
//     }
//     render(){
//         const { from } = this.props.location.state || {from: {pathname: '/'}}
//         const { redirectToReferrer } = this.state;
//         if (redirectToReferrer === true) {
//           return <Redirect to={from} />

//         }
//         return(
//         <div>
//           <p>You must log in to view the page</p>
//           <button onClick={this.login}>Log in</button>
//         </div>
//         )
//     }

        
//     }

class Login extends React.Component{
    componentDidMount(){
        this.props.fetchUsers();
    }
    render(){
        console.log(this.props.users);
        return(
            <div>Login</div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        users: Object.values(state.users)
    }
}


export default connect(mapStateToProps, {
    fetchUsers
})(Login);