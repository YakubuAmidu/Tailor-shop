import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ProductScreen from "./screens/ProductScreen";
import ServicesScreen from "./screens/ServicesScreen";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/ProductScreen" component={ProductScreen} />
      <Route path="/ServicesScreen" component={ServicesScreen} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
