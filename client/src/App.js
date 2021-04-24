import React from "react";
import Home from "./components/Home"
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
    return(
        <Router>
        <div>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
        </Router>
    )
}