import React from "react";
import { connect } from "react-redux";
import LeaderBoardCard from "./LeaderBoardCard";
import _ from 'lodash';

import { fetchUsers } from "./../actions";



class LeaderBoard extends React.Component{
  componentDidMount(){
    this.props.fetchUsers();
    
  }

  renderLeaderBoard=()=>{
    let users = this.props.users;
   
    let leaderBoardList = [];
    
    
    for(let user in users){

      
      let questionsByUser = users[user]["questions"];
      let n = 0;
      let m = 0;

      for(let question in questionsByUser){
        n+=1
      }
      
      let questionsAnswered = users[user]["answers"];
      for(let answer in questionsAnswered){
        m+=1
      }

      let user1 = _.cloneDeep(users[user]);
     

      user1.nQuestions = n;
      user1.nAnswers = m;
      user1.totalScore = n+m;
      
      leaderBoardList.push(user1);
      
    }

    leaderBoardList = _.orderBy(leaderBoardList, ['totalScore'], ['desc']);


    return leaderBoardList.map((user)=>{
      return <LeaderBoardCard user={user}/>
    })
  }

    render(){
      return(
        <div>
          {this.renderLeaderBoard()}
        </div>
      )
    }
}

const mapStateToProps=(state)=>{
  return{
    users: state.users, 
    questions: state.questions.questions
  }
}

export default connect(mapStateToProps, {
  fetchUsers,
})(LeaderBoard);

