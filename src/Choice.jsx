import React from "react";
import { Link } from "react-router-dom";

const Choice = () => {
  return (
    <div className="choiceDiv">
      <header>
        <h1>RockPaperScissors</h1>
      </header>
      <h3>Play vs Random or vs AI</h3>
      <img
        class="play-link"
        src={`./assets/player.png`}
        height="120"
        width="120"
      ></img>
      <Link className="link" to="/GameVsComp">
        <div className="Opponentpic">
          <img
            class="comp-link"
            src={`./assets/computer.png`}
            height="120"
            width="120"
          ></img>
        </div>
      </Link>

      <Link className="link" to="/GameVsAI">
        <div className="Opponentpic">
          <img
            class="ai-link"
            src={`./assets/AI.png`}
            height="120"
            width="120"
          ></img>
        </div>
      </Link>
    </div>
  );
};

export default Choice;
