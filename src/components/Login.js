import React from 'react';
import { fakeAuth } from './App';
import { Redirect }from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUsers } from './../actions';

import { Field, reduxForm } from "redux-form";
import DropdownList from "react-widgets/lib/DropdownList";
import "react-widgets/dist/css/react-widgets.css";




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

const renderDropdownList = ({ input, data, valueField, textField }) => (
  <DropdownList
    {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange}
  />
);

class Login extends React.Component{
    
colors = [ { color: 'Red', value: 'ff0000' },
  { color: 'Green', value: '00ff00' },
  { color: 'Blue', value: '0000ff' } ]

  onSubmit=(formValues)=>{
    // console.dir(formValues);
  }

    componentDidMount(){
        this.props.fetchUsers();
    }
    render(){
       const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
              <label>Select user</label>
              <Field
                name="user"
                component={renderDropdownList}
                data={this.props.users}
                valueField="id"
                textField="name"
              />
            </div>
            <div>
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              
            </div>
          </form>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        users: Object.values(state.users)
    }
}

Login = reduxForm({
    form: 'userSelect'
})(Login);

export default connect(mapStateToProps, {
    fetchUsers
})(Login);