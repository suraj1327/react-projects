import Nav from "./Nav";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Use something like react-router-dom to manage multiple pages/routes

function App() {
  return (
    <Router>
      <div className="Home">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
