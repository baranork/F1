import React, { useState, useEffect, useCallback } from "react";
import "./Drivers.css";
import { BrowserRouter as Route } from "react-router-dom";
import CountUpAnimation from "./CountUpAnimation";
import Spinner from "./Spinner";

const Constructors = () => {
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [items, setItems] = useState([]);

  const fetchStandings = useCallback(async () => {
    fetch("http://ergast.com/api/f1/current/constructorStandings.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(
            result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
          );
          //   console.log(
          //     result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
          //   );
        },
        (err) => {
          setIsLoaded(true);
          setError(err.msg);
          console.log(error);
        }
      );
  }, [error]);

  useEffect(() => {
    fetchStandings();
  }, [fetchStandings]);

  if (isLoaded) {
    return (
      <header className="App-header">
        <Route exact path={`/constructors`}>
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

                      <td> {item.Constructor.name}</td>

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
      </header>
    );
  } else {
    return <Spinner />;
  }
};

export default Constructors;
