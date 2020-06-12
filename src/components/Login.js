import React from 'react';
import { fakeAuth } from './App';
import { Redirect }from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUsers } from './../actions';
import { signIn } from './../actions';

import { Field, reduxForm } from "redux-form";
import DropdownList from "react-widgets/lib/DropdownList";
import "react-widgets/dist/css/react-widgets.css";


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
    

  onSubmit=(formValue)=>{
      const redirectTo= this.props.location.state.from.pathname;
      this.props.signIn(formValue.user, redirectTo);
    }

    componentDidMount(){
        this.props.fetchUsers();
    }
    render(){
     
      if(this.props.loggedInUser){
        return <Redirect to= {this.props.location.state.from.pathname} />
      }
       const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
          <div className ="ui container">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div>
                <label>Login as a user: </label>
                <Field
                  name="user"
                  component={renderDropdownList}
                  data={this.props.users}
                  valueField="id"
                  textField="name"
                />
              </div>
              <div>
                <button type="submit" className="ui green button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        users: Object.values(state.users), 
        loggedInUser: state.auth.user
    }
}

Login = reduxForm({
    form: 'userSelect'
})(Login);

export default connect(mapStateToProps, {
    fetchUsers, 
    signIn
})(Login);


