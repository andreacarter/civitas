import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes/index.jsx";
import dashboardRoutes from "./routes/dashboard.jsx";
import "assets/css/material-dashboard-react.css?v=1.4.1";

var hist = createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
          {dashboardRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
