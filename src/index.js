import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import GameVsComp from "./GameVsComp";
import GameVsAI from "./GameVsAI";
import Choice from "./Choice";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Choice}></Route>
        <Route exact path="/GameVsComp" component={GameVsComp}></Route>
        <Route exact path="/GameVsAI" component={GameVsAI}></Route>
      </Switch>
    </>
  );
};



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
