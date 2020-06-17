import React from 'react';
import { Card, Icon, Image } from "semantic-ui-react";


const LeaderBoardCard = (props) =>{
    console.log(props);
    return (
      <Card>
        <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.user.name}</Card.Header>
          <Card.Description>
            Questions Asked: {props.user.nQuestions}
          </Card.Description>
          <Card.Description>
            Questions Answered: {props.user.nAnswers}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Total Score: {props.user.totalScore}</p>
        </Card.Content>
      </Card>
    );
}

export default LeaderBoardCard;