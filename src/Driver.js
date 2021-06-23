import React from "react";

export default class Driver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            driver: {},
            results: []
        }
    }

    

    componentDidMount() {
        var link = `http://ergast.com/api/f1/2021/drivers/${this.props.match.params.driverId}.json`
        var resultsLink = `http://ergast.com/api/f1/current/drivers/${this.props.match.params.driverId}/results.json`

        fetch(link)
          .then((res) => res.json())
          .then(
            (result) => {
                console.log(this.props.match.params.driverId);
              this.setState({
                isLoaded: true,
                driver: result.MRData.DriverTable.Drivers[0]
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

          fetch(resultsLink)
          .then((res) => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                results: result.MRData.RaceTable.Races
              });
            },
            // Nota: es importante manejar errores aquí y no en
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
                console.log('Error fetching race results')
              this.setState({
                isLoaded: true,
                error,
              });
            }
          );
      }


    render(){
        const { isLoaded, driver } = this.state;
        if(isLoaded){
            return(
                <div>{driver.permanentNumber} - {driver.givenName} {driver.familyName}</div>
            )
        }
        else{
            return(
                <div>Cargando...</div>
            )
        }
        
    }
}