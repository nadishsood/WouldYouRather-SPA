import React from "react";
import  {connect} from 'react-redux'; 

class QuestionCard extends React.Component {

    getAuthor(){
        let author = this.props.question.author;
        return this.props.users[author]["name"];
    }

    render(){
        const question = this.props.question;
        let author = this.getAuthor();
        return (
        <div className="ui card">
            <div className="content">
            <img className="right floated ui mini image" src="" />
            <div className="header">{author} asks: </div>
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
const mapStateToProps=(state)=>{
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {
    
})(QuestionCard);
