import React from "react";
import { Router, Redirect } from "@reach/router";
import { Film } from "./pages";

const App = () => {
  return (
    <Router>
      <Redirect from="/" to="/films" noThrow />
      <Film path="/films" />
    </Router>
  );
};

export default App;
