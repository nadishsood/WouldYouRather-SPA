import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { createQuestion } from './../actions';

import { withRouter } from "react-router-dom";


class NewQuestion extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  onSubmit = async formValues => {
      await this.props.createQuestion({
          author:this.props.userId,
          optionOneText:formValues.optionOne,
          optionTwoText: formValues.optionTwo
      })
      this.props.history.push("/");
      
  };
  renderError = meta => {
    const error = meta.error;
    const touched = meta.touched;
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  render() {
      console.log(this.props);
      console.log(this.props.createdQuestion);
    return (
      <div>
        <h1>Create New Question</h1>
        <h3>Would you rather:</h3>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="optionOne"
            component={this.renderInput}
            label="Option One"
          />
          <Field
            name="optionTwo"
            component={this.renderInput}
            label="Option Two"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.optionOne) {
    errors.optionOne = "You must enter Option One";
  }
  if (!formValues.optionTwo) {
    errors.optionTwo = "You must enter Option Two";
  }
  return errors;
};

const mapStateToProps=(state)=>{
    return{
        userId: state.auth.user.id, 
        question: state.questions.createdQuestion
    }
}

 NewQuestion = reduxForm({
   form: "newQuestionCreate",
   validate
 })(NewQuestion);

 NewQuestion = withRouter(NewQuestion);

export default connect(mapStateToProps, { createQuestion })(NewQuestion);



