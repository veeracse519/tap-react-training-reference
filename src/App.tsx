import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import StudentPage from "./components/StudentList/Student"
import GridMemoryGame from "./components/GridGame/GridMemoryGame"
import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route> 
        <Route exact path="/grid-game">
          <GridMemoryGame />
        </Route>
        <Route  exact path="/student-page">
          <StudentPage/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
