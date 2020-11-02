import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
