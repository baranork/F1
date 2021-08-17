import { Route } from "react-router";
import { useCallback, useState, useEffect } from "react";
import CountDown from "./CountDown";
import Spinner from "./Spinner";
import "./Home.css";
import NextRaceCard from "./NextRaceCard/NextRaceCard";

const Home = () => {
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [country, setCountry] = useState("");
  const [circuit, setCircuit] = useState("");

  const [items, setItems] = useState([]);
  const [date, setDate] = useState("");

  const fetchStandings = useCallback(async () => {
    fetch("https://ergast.com/api/f1/current/next.json")
      // fetch("https://ergast.com/api/f1/current/18.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.MRData.RaceTable.Races[0]);
          console.log(result.MRData.RaceTable.Races[0]);

          const date = new Date(result.MRData.RaceTable.Races[0].date);
          const circuit = result.MRData.RaceTable.Races[0].Circuit.circuitId;
          const country =
            result.MRData.RaceTable.Races[0].Circuit.Location.country;

          setCircuit(circuit);
          setCountry(country);
          setDate(date);
          setIsLoaded(true);
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



  const returnCountDownDate = () => {
    if (date !== "") {
      const newDate = new Date(
        `${date.getMonth() + 1} ${
          date.getDate() + 1
        }, ${date.getFullYear()} ${items.time.slice(0, -1)}`
      );
      return newDate;
    } else {
      return "";
    }
  };

  if (isLoaded) {
    return (
      <header className="App-header">
        <Route exact path={`/about`}></Route>
        <div className="home-countdown">
          Next kkkkrace in: <CountDown deadline={returnCountDownDate()} />
        </div>
        <NextRaceCard circuit={circuit} country={country} items={items} date={date} sliceTime={items.time}/>
      </header>
    );
  } else {
    return <Spinner />;
  }
};

export default Home;
