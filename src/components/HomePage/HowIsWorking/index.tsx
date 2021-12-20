import CardPresentation from "./CardPresentation";
import "./style.scss";
import { NavLink } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const HowIsWorking = () => {
  return (
    <div>
      <div className="howItWork">
        <CardPresentation />
      </div>
    </div>
  );
};

export default HowIsWorking;
