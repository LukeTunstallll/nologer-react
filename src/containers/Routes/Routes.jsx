import React from "react";
import { Router } from "@reach/router";

import Home from "../../components/Home";
import Card from "../../components/Card";

const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Card path={studentID} />
    </Router>
  );
};

export default Routes;
