import React from "react";
import{ Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers } from "./../actions";
import { thisExpression } from "@babel/types";
import { statement } from "@babel/template";


// const Leaderboard = () => {
//   return(
//       <div>
//           <p>Leaderboard</p>
//           <Link to="/add">Click to go to new question></Link>
//       </div>
//   )

// };

class LeaderBoard extends React.Component{
  componentDidMount(){
    this.props.fetchUsers();
  }
  render(){
    console.log(this.props.users);
    return(
      <div></div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    users: state.users
  }
}

export default connect(mapStateToProps, {
  fetchUsers
})(LeaderBoard);

