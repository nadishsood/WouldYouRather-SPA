import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Header, Button, Form, Radio } from "semantic-ui-react";

class QuestionDetail extends React.Component {
  state = {
    value: ""
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    const qID = this.props.match.params.id;
   const question = this.props.questions.questions[`${qID}`];   
    if (this.state.value !== "") {
    //   const { user, saveQuestionAnswer } = this.props;
    //   saveQuestionAnswer(user, question.id, this.state.value);
    }
  };

  render() {
    const qID = this.props.match.params.id;
    const question = this.props.questions.questions[`${qID}`];
    const disabled = this.state.value === "" ? true : false;
    console.log(qID, question);

    return (
      <Fragment>
        <Header as="h4">Would you rather</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Radio
              label={question.optionOne.text}
              name="radioGroup"
              value="optionOne"
              checked={this.state.value === "optionOne"}
              onChange={this.handleChange}
            />
            <br />
            <Radio
              label={question.optionTwo.text}
              name="radioGroup"
              value="optionTwo"
              checked={this.state.value === "optionTwo"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Button
              color="green"
              size="tiny"
              fluid
              positive
              disabled={disabled}
              content="Submit"
            />
          </Form.Field>
        </Form>
      </Fragment>
    );
  }
};

const mapStateToProps=(state)=>{
    return {
      questions: state.questions, 
      currentUser: state.auth.user
    };
}

export default connect(mapStateToProps, {
})(QuestionDetail);
