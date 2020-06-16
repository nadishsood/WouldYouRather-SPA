import React from "react";
import  {connect} from 'react-redux'; 
import { thisExpression } from "@babel/types";
import { withRouter, Redirect } from "react-router-dom";
import { setResOrQuestion } from "./../actions";



class QuestionCard extends React.Component {
  getAuthor() {
    let author = this.props.question.author;
    return this.props.users[author]["name"];
  }

  onSubmitUnanswered = async () => {
    //redirect to the specific question page
    // put the selected question in the state so that the new page has access to it

    //run an action creator which takes the id of the question and puts it on the state.

    await this.props.setResOrQuestion("Question");
    this.props.history.push(`/questions/${this.props.question.id}`);
  };

  onSubmitAnswered = async () => {
    //redirect to the specific question page
    // put the selected question in the state so that the new page has access to it
    //run an action creator which takes the id of the question and puts it on the state.
    // this.props.history.push(`/questions/${this.props.question.id}`)
    await this.props.setResOrQuestion("Result");
    this.props.history.push(`/questions/${this.props.question.id}`);
  };

  renderButton = () => {
    if (this.props.activeList === "Unanswered Questions") {
      return (
        <div className="ui  green button" onClick={this.onSubmitUnanswered}>
          Answer Poll
        </div>
      );
    } else {
      return (
        <div className="ui blue button" onClick={this.onSubmitAnswered}>
          View Results
        </div>
      );
    }
  };
  render() {
    console.log(this.props.question);
    const question = this.props.question.optionOne.text;
    let author = this.getAuthor();

    return (
      <div className="ui card">
        <div className="content">
          <img className="right floated ui mini image" src="" />
          <div className="header">{author} asks: </div>
          <div className="meta">Would you rather:</div>
          <div className="description">....{question} or ...</div>
        </div>
        <div className="extra content">
          <div className="ui button">{this.renderButton()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
    return {
        users: state.users, 
        activeList: state.questions.activeList
    }
}

QuestionCard = withRouter(QuestionCard);

export default connect(mapStateToProps, {
  setResOrQuestion
})(QuestionCard);
