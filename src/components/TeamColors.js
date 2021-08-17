import { useEffect, useCallback, useState } from "react";

const TeamColors = (props) => {
  const [teamColor, setTeamColor] = useState({
    backgroundColor: "#FFF",
    color: "#FFF",
  });

  const setColor = useCallback(async () => {
    let teamColor = {
      backgroundColor: "#FFF",
      color: "#FFF",
    };

    switch (props.team) {
      case "mercedes":
        teamColor.backgroundColor = "#03BFB5";
        teamColor.color = "#000";
        break;
      case "mclaren":
        teamColor.backgroundColor = "#FF8700";
        break;
      case "red_bull":
        teamColor.backgroundColor = "#0600EF";
        break;
      case "ferrari":
        teamColor.backgroundColor = "#DC0000";
        break;
      case "haas":
        teamColor.backgroundColor = "#FFFFFF";
        teamColor.color = "#000";
        break;
      case "alpine":
        teamColor.backgroundColor = "#0090FF";
        teamColor.color = "#000";
        break;
      case "alphatauri":
        teamColor.backgroundColor = "#2B4562";
        break;
      case "alfa":
        teamColor.backgroundColor = "#900000";
        break;
      case "williams":
        teamColor.backgroundColor = "#005AFF";
        break;
      case "aston_martin":
        teamColor.backgroundColor = "#006F62";
        break;
      default:
    }

    setTeamColor(teamColor);
  }, [props]);

  useEffect(() => {
    setColor();
  }, [setColor]);
  return teamColor;
};

export default TeamColors;
