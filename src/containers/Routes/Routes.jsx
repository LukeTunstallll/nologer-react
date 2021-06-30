import React from "react";
import { Router } from "@reach/router";

import StudentDetails from "../../components/StudentList";
import StudentList from "../../components/StudentList";
import StudentCreate from "../../components/StudentCreate/StudentCreate";

const Routes = () => {
  return (
    <Router>
      <StudentDetails path="StudentDetails" />
      <StudentList path="/" />
      <StudentCreate path="/StudentCreate" />
    </Router>
  );
};

export default Routes;
