import React from "react";
import ReactDOM from "react-dom";
import GameVsComp from "./GameVsComp";

const StartingPage = () => {
  return (
    <>
      <GameVsComp />
    </>
  );
};

ReactDOM.render(<StartingPage />, document.getElementById("app"));
