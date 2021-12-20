import Logo from "../../../assets/logo/logoPink.png";
import { NavLink } from "react-router-dom";
import "./style.scss";

const HeaderLogin = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={Logo} alt="Logo"></img>
      </NavLink>
    </div>
  );
};

export default HeaderLogin;
