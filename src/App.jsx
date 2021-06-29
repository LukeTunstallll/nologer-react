import React from "react";
import Routes from "./containers/Routes";

const App = () => {
  // const getStudents = () => {
  //   fetch("http://localhost:8080/students")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };
  // getStudents();

  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
