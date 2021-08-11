import { useState, useEffect, useCallback } from "react";

import CardFlag from "./CardFlag";
import CardImages from "./CardImages";

const NextRaceCard = (props) => {
  const [slicedTime, setSlicedTime] = useState("");
  const [formatedDate, setFormatedDate] = useState("");

  const sliceTime = useCallback(async () => {
    if (props.items.time) {
      setSlicedTime(props.items.time.slice(0, -4));
    }

    if (props.date) {
      let formatedDate;

      if (props.date !== "") {
        formatedDate = `${props.date.getDate() + 1}/${
          props.date.getMonth() + 1
        }/${props.date.getFullYear()}`;
      }
      setFormatedDate(formatedDate);
    }
  }, [props]);

  useEffect(() => {
    sliceTime();
  }, [sliceTime]);

  return (
    <div className="home-container">
      <div className="home-square">
        <div className="home-glass">
          <CardImages circuit={props.circuit} />
        </div>
        <div className="home-bottom">
          <div className="home-left">
            <div className="home-flag">
              <CardFlag country={props.country} />
            </div>
          </div>
          <div className="home-right">
            <div className="home-name">{props.items.raceName}</div>
            <div className="home-little"></div>
            {formatedDate} - {slicedTime} UTC
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextRaceCard;
