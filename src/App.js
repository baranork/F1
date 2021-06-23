import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"
import Drivers from "./Drivers";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }


  render() {
      return (
        <div>
        <Router>
        <div className="App">
        <nav className="navBar">
          <ul >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <div>Info</div>
          </Route>
          <Route path="/users">
            <div>Usuarios</div>
          </Route>
          <Route  path="/">
            <Drivers />
          </Route>
          </Switch>
        </div>
        </Router></div>
      );
    
  }
}
