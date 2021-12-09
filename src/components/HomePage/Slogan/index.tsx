import "./style.scss";
import Button from "@mui/material/Button";
import friends from "../../../assets/illustrations/friends.svg";
import { NavLink } from "react-router-dom";

const Slogan = () => {
  return (
    <div className="slogan">
      <div className="slogan__presentation">
        <div className="slogan__presentation__text">
          <h1>Découvrez votre prochaine activité du week-end</h1>
        </div>
        <NavLink to="/create" style={{ textDecoration: "none" }}>
        <Button
          sx={{ mb: 3, "&:hover": { backgroundColor: "#F36B7F" } }}
          className="slogan__presentation__button"
          variant="contained"
        >
          Créer un évènement
        </Button>
        </NavLink>
      </div>
      <div className="slogan__illustration">
        <img src={friends} alt="friends-illu" />
      </div>
    </div>
  );
};

export default Slogan;
