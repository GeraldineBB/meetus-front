import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import RouteConnected from "../../Routes/RouteConnected";
import RouteNotConnected from "../../Routes/RouteNotConnected";

function App() {
  // quand la location change, on applique un effet qui fait
  // scroller la page en haut
  const location = useLocation();
  const cookie = new Cookies();
  const token = cookie.get("Pizzeria");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="App">
      {token ? <RouteConnected /> : <RouteNotConnected />}
    </div>
  );
}

export default App;
