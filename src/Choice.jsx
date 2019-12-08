import React from "react";
import { Link } from "react-router-dom";

const Choice = () => {
  return (
    <div className="gameDiv">
      <img
            class="play-link"
            src={`./assets/player.png`}
            height="120"
            width="120"
          ></img>
      <Link className="link" to="/GameVsComp">
        <div className= "Opponentpic">
      <img
            class="comp-link"
            src={`./assets/computer.png`}
            height="120"
            width="120"
          ></img>
      </div>
      </Link>
      <div className="Opponentpic">
      <Link className="link" to="/GameVsAI">
      <img
            class="ai-link"
            src={`./assets/AI.png`}
            height="120"
            width="120"
          ></img>
      </Link>
      </div>
      </div>
    
  );
};


export default Choice;
