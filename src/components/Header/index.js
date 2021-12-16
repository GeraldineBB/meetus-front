import "./style.scss";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo/logoWhite.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { logout } from "../../actions/user";
import Cookies from "universal-cookie";

function Header() {
  const { logged } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const cookie = new Cookies();
  const handleLogout = () => {
    dispatch(logout());
    cookie.remove("Pizzeria");
    localStorage.removeItem("User");
    localStorage.removeItem("Token");
  };
  if (logged === false) {
    return (
      <div className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="header__buttons">
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <Button
              className="header__buttons__login"
              size="small"
              variant="contained"
            >
              Se connecter
            </Button>
          </NavLink>
          <NavLink to="/signup" style={{ textDecoration: "none" }}>
            <Button
              className="header__buttons__signup"
              size="small"
              variant="contained"
            >
              S'inscrire
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="header__buttons">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Avatar
            alt="Remy Sharp"
            src={`${process.env.PUBLIC_URL}/images/concert-event.jpg`}
            sx={{ mr: "1em" }}
          />
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button
            className="header__buttons__logout"
            size="small"
            variant="contained"
            onClick={handleLogout}
          >
            Deconnexion
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
