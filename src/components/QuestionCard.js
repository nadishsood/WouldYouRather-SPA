import React from "react";

class QuestionCard extends React.Component {

    render(){
        console.log(this.props);
return (
  <div class="ui card">
    <div class="content">
      <img class="right floated ui mini image" src="" />
      <div class="header">Elliot Fu asks</div>
      <div class="meta">Would you rather:</div>
      <div class="description">...write js or.....</div>
    </div>
    <div class="extra content">
      <div class="ui button">
        <div class="ui  green button">Go to Poll</div>
      </div>
    </div>
  </div>
);
    }
    
}

export default QuestionCard;
