import React from "react";
import ReactDOM from "react-dom";
import "./styles/_main.scss";
import App from "../src/routes/index";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
