import { BrowserRouter as Router, Route, Switch } from "express";
import React from "react";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved"
import Nav from "./components/Nav"

function App() {
  
  return (
    <>
      <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/saved' component={Saved} />
    </Switch>
    </Router>
    </>
  );
}


export default App;
