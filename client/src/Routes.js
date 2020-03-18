import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import NewTrailReport from "./containers/NewTrailReport";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";

export default function Routes({ appProps }) {
    return (
      <Switch>
        <AppliedRoute path="/" exact component={Home} appProps={appProps} />
        <AppliedRoute path="/signin" exact component={SignIn} appProps={appProps} />
        <AppliedRoute path="/signup" exact component={SignUp} appProps={appProps} />
        <AppliedRoute path="/trails/new" exact component={NewTrailReport} appProps={appProps} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    );
  }