import React from 'react';
import { Label, Icon } from "semantic-ui-react";

const YourVote=()=>{
    return (
      <Label color="green" ribbon="right" className="vote">
        <Icon name="paper plane" size="big" className="compact" />
        <div style={{ float: "right" }}>
          <p>You Voted</p>
        </div>
      </Label>
    );
}



export default YourVote;

