import React from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "./../actions"; 
import { setActiveList } from "./../actions"; 


import { Menu } from "semantic-ui-react";
import QuestionCard from "./QuestionCard";

class Home extends React.Component {
  handleItemClick = (e, { name }) => {
    this.props.setActiveList(name);
  };

  componentDidMount() {
    this.props.fetchQuestions();
  }
  
  renderQuestionList=(questions)=>{
    return questions.map((question)=>{
      return <QuestionCard key={question.id} question={question} />
    })
}

  renderQuestions = activeList => {
    let unAnsweredQs = [];
    let answeredQs = [];
   
      
        if (this.props.questions !== null) {
          for (let qID in this.props.questions) {
              if (
                this.props.questions[qID]["optionOne"]["votes"].includes(this.props.user.id)||
                this.props.questions[qID]["optionTwo"]["votes"].includes(this.props.user.id) 
              ) {
                // answeredQs[qID] = this.props.questions[qID];
                answeredQs.push(this.props.questions[qID]);
              }else{
                // unAnsweredQs[qID] = this.props.questions[qID];
                unAnsweredQs.push(this.props.questions[qID]);
              }
            
          }
    }
  
    //sort the question lists, most recent first
  answeredQs.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
  unAnsweredQs.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
  

    if(activeList === "Unanswered Questions"){
      return this.renderQuestionList(unAnsweredQs);
    }else{
      return this.renderQuestionList(answeredQs);
    }

  };

  render() {
    return (
      <div>
        
        <Menu secondary>
          <Menu.Item
            name="Unanswered Questions"
            active={this.props.activeList === "Unanswered Questions"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Answered Questions"
            active={this.props.activeList === "Answered Questions"}
            onClick={this.handleItemClick}
          />
        </Menu>
        {this.renderQuestions(this.props.activeList)}
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    questions: state.questions.questions, 
    activeList: state.questions.activeList, 
    user: state.auth.user
  }
}
export default connect(mapStateToProps, {
  fetchQuestions, 
  setActiveList, 

})(Home);


