import React, { Component } from "react";
import Routes from "./config";
import { Route, Switch } from "react-router-dom";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        {
          Routes.map((route, i) =>
            <Route exact={route.exact === false ? false : true} key={i} path={route.path} component={route.component} />)
        }
      </Switch>
    );
  }
}
