import { useEffect, useState } from "react";
import "./Spinner.css";

import Soft from "../assets/tyres/soft.png";
import Medium from "../assets/tyres/medium.png";
import Hard from "../assets/tyres/hard.png";
import Intermedium from "../assets/tyres/inter.png";
import Wet from "../assets/tyres/wet.png";

const Spinner = () => {
  const [tyres, setTyres] = useState([]);
  const [selectedTyre, setSelectedTyre] = useState(0);

  useEffect(() => {
    const tyreArray = [Soft, Medium, Hard, Intermedium, Wet];
    setTyres(tyreArray);

    const selected = Math.floor(Math.random() * 5);
    setSelectedTyre(selected);
  }, []);
  return (
    <div className="spinner-container">
      <img src={tyres[selectedTyre]} alt="" className="spinner" />
    </div>
  );
};

export default Spinner;
