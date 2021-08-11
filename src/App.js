import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Drivers from "./components/Drivers";
import Home from "./components/Home";
import Logo from "./assets/logo.png";
import Constructors from "./components/Constructors";
import Driver from "./components/Driver";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <header>
            <nav className="navBar">
              <ul>
                <li>
                  <div style={{ height: "40px" }}>
                    <img
                      src={Logo}
                      alt="F1"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/drivers">Drivers</Link>
                </li>
                <li>
                  <Link to="/constructors">Constructor</Link>
                </li>
                {/* <li>
                  <Link to="/hamilton">Driver Info</Link>
                </li> */}
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/drivers">
              <Drivers />
            </Route>
            <Route path="/constructors">
              <Constructors />
            </Route>
            {/* <Route path="/hamilton">
              <Driver />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
