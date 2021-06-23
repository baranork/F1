import React from "react";
import "./Drivers.css";
import { BrowserRouter as Switch, Link, Route } from "react-router-dom";
import Driver from "./Driver";

export default class Drivers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://ergast.com/api/f1/2021/drivers.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.MRData.DriverTable.Drivers,
          });
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { isLoaded, items } = this.state;
    if (isLoaded) {
      return (
        <header className="App-header">
          
            <Route exact path={`/`}>
              <ul>
                {items.map((item) => (
                  <li key={item.driverId} className="driver">
                    <Link
                      to={"/Driver/" + item.driverId}
                      className="drivers-bio-link"
                    >
                      {item.givenName} {item.familyName}
                    </Link>
                  </li>
                ))}
              </ul>
            </Route>
            <Route exact path="/Driver/:driverId" component={Driver} />
         
        </header>
      );
    } else {
      return <div>Cargando...</div>;
    }
  }
}
