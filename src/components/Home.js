import React from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "./../actions"; 
import { setActiveList } from "./../actions"; 

import { Input, Menu } from "semantic-ui-react";

class Home extends React.Component {

  handleItemClick = (e, { name }) => {
    this.props.setActiveList(name);
  };

  componentDidMount(){
    this.props.fetchQuestions();
  }
  
  render() {

    console.dir(this.props.activeList);
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
        <p>dskjfhskfjksd</p>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    questions: Object.values(state.questions), 
    activeList: state.questions.activeList
  }
}
export default connect(mapStateToProps, {
  fetchQuestions, 
  setActiveList
})(Home);


//get all the questions
//seperate them into answered and unanswered 
//in each category sort them in most recently created first


