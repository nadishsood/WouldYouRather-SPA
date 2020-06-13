import React from "react";
import{ Link } from "react-router-dom";

const Leaderboard = () => {
  return(
      <div>
          <p>Leaderboard</p>
          <Link to="/add">Click to go to new question></Link>
      </div>
  )

};

export default Leaderboard;

