import { useState, useCallback, useEffect } from "react";
import { Route } from "react-router";
import Spinner from "./Spinner";
import hamilton from "../assets/drivers/ham.png";
import uk from "../assets/flags/united-kingdom.png";
import "./Driver.css";
function Driver() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [driver, setDriver] = useState({});
  const [results, setResults] = useState([]);

  const fetchDriverData = useCallback(async () => {
    var link = `http://ergast.com/api/f1/2021/drivers/hamilton.json`;
    // var link = `http://ergast.com/api/f1/2021/drivers/${this.props.match.params.driverId}.json`;
    // var resultsLink = `http://ergast.com/api/f1/current/drivers/${this.props.match.params.driverId}/results.json`;

    fetch(link)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          // console.log(this.props.match.params.driverId);
          setIsLoaded(true);
          setDriver(result.MRData.DriverTable.Drivers[0]);
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    // fetch(resultsLink)
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       setIsLoaded(true);
    //       setResults(result.MRData.RaceTable.Races);
    //     },
    //     // Nota: es importante manejar errores aquí y no en
    //     // un bloque catch() para que no interceptemos errores
    //     // de errores reales en los componentes.
    //     (error) => {
    //       console.log("Error fetching race results");
    //       setIsLoaded(true);
    //       setError(error);
    //       console.log(error);
    //     }
    //   );
  }, []);

  useEffect(() => {
    fetchDriverData();
  }, [fetchDriverData]);

  if (isLoaded) {
    return (
      <header className="App-header">
        <Route exact path={`/about`}></Route>
        <div className="lateral">
          <div className="driver-card">
            <div className="container-pic">
              <div className="background-surname">HAMILTON</div>
              <div>
                <img src={hamilton} alt="Lewis Hamilton" id="photo" />
                <div className="surname">Lewis Hamilton</div>
              </div>

              {/* <img
                src={uk}
                alt="United Kingdom"
                style={{ width: "50px", height: "50px" }}
              /> */}
              {/* <div className="info">
                <div>
                  Name: {driver.givenName} {driver.familyName}
                </div>
                <div>Birth: {driver.dateOfBirth}</div>
                <div>Number: {driver.permanentNumber}</div>
                <div>Nationality: {driver.nationality}</div>
                <div>Team: Mercedes-AMG Motorsport</div>
                <div>Grand Prix Entered: 277</div>
                <div>World Championships: 7</div>
                <div>Highest race finish: 1</div>
                <div>Highest qualifiying: 1</div>
              </div> */}
            </div>
          </div>
        </div>{" "}
      </header>
    );
  } else {
    return <Spinner />;
  }
}

export default Driver;
