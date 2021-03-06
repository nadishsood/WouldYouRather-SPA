import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Header, Button, Form, Radio } from "semantic-ui-react";
import { saveQuestionAnswer } from "./../actions";
import { withRouter } from 'react-router-dom';
import { setResOrQuestion } from "./../actions";
import YourVote from "./YourVote";
import { Image } from "semantic-ui-react";


import { fetchUsers } from "./../actions";
import { fetchQuestions } from "./../actions";

import {
  Segment,
  Progress,
} from "semantic-ui-react";


class QuestionDetail extends React.Component {
  state = {
    value: "",
    
  };

  componentDidMount(){
  this.props.fetchUsers();
  this.props.fetchQuestions();
  }

  handleChange = (e, { value }) => this.setState({ value });

  onClick = () => {
    this.props.history.push("/");
  };

  handleSubmit = e => {
    e.preventDefault();
    const qID = this.props.match.params.id;
    const question = this.props.questions.questions[`${qID}`];
    if (this.state.value !== "") {
      const { currentUser, saveQuestionAnswer } = this.props;
      saveQuestionAnswer(currentUser, question.id, this.state.value);
    }
    this.props.setResOrQuestion("Result")
    
  };

  render() {

    const qID = this.props.match.params.id;
    const question = this.props.questions.questions[`${qID}`];
    const userWhoPostedQuestion = this.props.users[question.author] ;
    const disabled = this.state.value === "" ? true : false;

    if (this.props.resOrQues === "Question") {
      return (
        <Fragment>
          <Image
            size="small"
            src={userWhoPostedQuestion.avatarURL}
            
          />
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
    } else {
      const qID = this.props.match.params.id;
      const question = this.props.questions.questions[`${qID}`];
      const user = this.props.users[this.props.currentUser];
      const userVoted = user.answers[qID];
      const votesOptionOne = question["optionOne"]["votes"].length;
      const votesOptionTwo = question["optionTwo"]["votes"].length;
      const totalVotes = votesOptionOne + votesOptionTwo;

      return (
        <Fragment>
          <Header as="h4">
            Results:
            <Header.Subheader>Would you rather</Header.Subheader>
          </Header>
          <Segment>
            {userVoted === "optionOne" && <YourVote />}
            <p>{question.optionOne.text}</p>
            <Progress
              percent={((votesOptionOne / totalVotes) * 100).toFixed(2)}
              progress
            >
              {votesOptionOne} out of {totalVotes} votes
            </Progress>
          </Segment>
          <Segment>
            {userVoted === "optionTwo" && <YourVote />}

            <p>{question.optionTwo.text}</p>
            <Progress
              percent={((votesOptionTwo / totalVotes) * 100).toFixed(2)}
              progress
            >
              {votesOptionTwo} out of {totalVotes} votes
            </Progress>
          </Segment>

          <Button size="tiny" floated="right" onClick={this.onClick}>
            Back
          </Button>
        </Fragment>
      );
    }
  }
};

const mapStateToProps=(state)=>{
    return {
      questions: state.questions, 
      currentUser: state.auth.user.id, 
      users: state.users, 
      activeList: state.questions.activeList, 
      resOrQues: state.questions.resOrQues
    };
}

QuestionDetail = withRouter(QuestionDetail);

export default connect(mapStateToProps, {
  saveQuestionAnswer,
  setResOrQuestion,
  fetchUsers,
  fetchQuestions
})(QuestionDetail);
