import { useEffect, useCallback, useState } from "react";

import Belgium from "../../assets/flags/belgium.png";
import Italy from "../../assets/flags/italy.png";
import Austria from "../../assets/flags/austria.png";
import Australia from "../../assets/flags/australia.png";
import Azerbaijan from "../../assets/flags/azerbaijan.png";
import Bahrain from "../../assets/flags/bahrain.png";
import Brazil from "../../assets/flags/brazil.png";
import Monaco from "../../assets/flags/monaco.png";
import Spain from "../../assets/flags/spain.png";
import UK from "../../assets/flags/united-kingdom.png";
import Mexico from "../../assets/flags/mexico.png";
import Hungary from "../../assets/flags/hungary.jpg";
import USA from "../../assets/flags/united-states.png";
import Netherlands from "../../assets/flags/netherlands.png";
import Portugal from "../../assets/flags/portugal.png";
import Russia from "../../assets/flags/russia.png";
import SaudiArabia from "../../assets/flags/saudi-arabia.png";
import Turkey from "../../assets/flags/turkey.png";
import Japan from "../../assets/flags/japan.png";
import UAE from "../../assets/flags/uae.png";
import France from "../../assets/flags/france.png";
import Default from "../../assets/flags/f1-flag.png";

const CardFlag = (props) => {
  const [flagUrl, setFlagUrl] = useState("");

  const setCardFlag = useCallback(async () => {
    const country = props.country;
    console.log(props.country);

    switch (country) {
      case "Belgium":
        setFlagUrl(Belgium);
        break;
      case "Brazil":
        setFlagUrl(Brazil);
        break;
      case "Saudi Arabia":
        setFlagUrl(SaudiArabia);
        break;
      case "Austria":
        setFlagUrl(Austria);
        break;
      case "Australia":
        setFlagUrl(Australia);
        break;
      case "Japan":
        setFlagUrl(Japan);
        break;
      case "Spain":
        setFlagUrl(Spain);
        break;
      case "France":
        setFlagUrl(France);
        break;
      case "Italy":
        setFlagUrl(Italy);
        break;
      case "Russia":
        setFlagUrl(Russia);
        break;
      case "Portugal":
        setFlagUrl(Portugal);
        break;
      case "Mexico":
        setFlagUrl(Mexico);
        break;
      case "Bahrain":
        setFlagUrl(Bahrain);
        break;
      case "Monaco":
        setFlagUrl(Monaco);
        break;
      case "Hungary":
        setFlagUrl(Hungary);
        break;
      case "Azerbaijan":
        setFlagUrl(Azerbaijan);
        break;
      case "USA":
        setFlagUrl(USA);
        break;
      case "UAE":
        setFlagUrl(UAE);
        break;
      case "UK":
        setFlagUrl(UK);
        break;
      case "Netherlands":
        setFlagUrl(Netherlands);
        break;
      case "Saudi":
        setFlagUrl(SaudiArabia);
        break;
      case "Turkey":
        setFlagUrl(Turkey);
        break;
      default:
        setFlagUrl(Default);
    }
  }, [props]);

  useEffect(() => {
    setCardFlag();
  }, [setCardFlag]);
  return <img className="home-flag-img" src={flagUrl} alt="Belgium Flag"></img>;
};

export default CardFlag;
