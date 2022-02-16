import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useHistory } from "react-router-dom";
import Icons from "constants/icons";
import { Box, Container } from "@material-ui/core";
import Topbar from "components/topbar/Topbar";

const Auth = () => {
  let match = useRouteMatch();
  const history = useHistory();

  // redirect to personal page if is logged in
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (isLoggedIn) {
    history.push("/");
  }

  return (
    <Container style={{ width: "100%", padding: 0, maxWidth: "100%" }}>
      <Topbar />
      <Switch>
        <Redirect exact from={match.path} to={`${match.path}/login`} />

        <Route path={`${match.path}/login`} component={LoginPage} />
        <Route path={`${match.path}/register`} component={SignupPage} />
      </Switch>
    </Container>
  );
};

export default Auth;
