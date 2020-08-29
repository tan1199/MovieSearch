import React from "react";
import { Router } from "@reach/router";
import Dashboard from "./elements/Dashboard";
import Home from "./Home";
import Movie from "./Movie";
import Notfound from "./Notfound";
import "./App.css";

const App = () => (
  <div className="globe">
    <div>
      <Dashboard />
    </div>
    <div>
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <Notfound default />
      </Router>
    </div>
  </div>
);

export default App;
