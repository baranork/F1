import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Drivers.css";
import { BrowserRouter as Switch, Link, Route } from "react-router-dom";
// import Driver from "./Driver";
import CountUpAnimation from "./CountUpAnimation";
import Spinner from "./Spinner";
import TeamColors from "./TeamColors";

const Drivers = () => {
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [items, setItems] = useState([]);

  const fetchStandings = useCallback(async () => {
    axios({
      method: "get",
      url: "http://ergast.com/api/f1/current/driverStandings.json",
      responseType: "stream",
    })
      .then(function (result) {
        setIsLoaded(true);
        setItems(
          result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
        console.log(
          result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
      })
      .catch(function (result) {
        setIsLoaded(true);
        setError(result);
        console.log(error);
      });
  }, [error]);

  useEffect(() => {
    fetchStandings();
  }, [fetchStandings]);

  const teamColor = (team) => {};

  if (isLoaded) {
    return (
      <header className="App-header">
        <Route exact path={`/drivers`}>
          <div
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "25px",
            }}
          >
            <div className="tbl-header">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Driver</th>
                    <th>Constructor</th>
                    <th>Points</th>
                    <th>Wins</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="tbl-content">
              <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  {items.map((item) => (
                    <tr key={item.position}>
                      <td>{item.position}</td>

                      <td>
                        <Link
                          to={"drivers/" + item.Driver.driverId}
                          className="drivers-bio-link"
                        >
                          <span
                            className="driver-number"
                            style={
                              <TeamColors
                                team={item.Constructors[0].constructorId}
                              />
                            }
                          >
                            {item.Driver.permanentNumber}
                            {"  "}
                          </span>
                          {item.Driver.givenName} {item.Driver.familyName}
                        </Link>
                      </td>
                      <td>{item.Constructors[0].name}</td>
                      <td>
                        <CountUpAnimation>{item.points}</CountUpAnimation>
                      </td>
                      <td>
                        <CountUpAnimation>{item.wins}</CountUpAnimation>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Route>
        {/* <Route exact path="drivers/:driverId"  component={Driver} /> */}
      </header>
    );
  } else {
    return <Spinner className="spinner" />;
  }
};

export default Drivers;
