import React from "react";
import { Router, Redirect } from "@reach/router";
import { Films, Film } from "./pages";

const App = () => {
  return (
    <Router>
      <Redirect from="/" to="/films" noThrow />
      <Films path="/films" />
      <Film path="/films/:name" />
    </Router>
  );
};

export default App;
