import React from "react";

class QuestionCard extends React.Component {

    render(){
        console.log("hhiii");
        return (
        <div className="ui card">
            <div className="content">
            <img className="right floated ui mini image" src="" />
            <div className="header">Elliot Fu asks</div>
            <div className="meta">Would you rather:</div>
            <div className="description">...write js or.....</div>
            </div>
            <div className="extra content">
            <div className="ui button">
                <div className="ui  green button">Go to Poll</div>
            </div>
            </div>
        </div>
        );
    }
    
}

export default QuestionCard;
