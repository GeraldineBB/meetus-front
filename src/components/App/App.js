import { Routes, Route, Redirect } from "react-router-dom";
import React, { useEffect } from 'react';
import LoginPage from "../../Views/Login";
import HomePage from "../../Views/HomePage";
import EventPage from "../../Views/EventPage";
import EventListPage from "../../Views/EventListPage";
import { SignUpForm } from "../Signup";
import EventEdit from "../../Views/EventEdit";
import RedirectSignup from "../Signup/Loading";
import RedirectEdition from "../Event/EventEdit/LoadingEdition";
import EventCreation from "../../Views/EventCreation";
import RedirectEventForm from "../Event/EventForm/LoadingCreation";
/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom";
import RouteConnected from "../../Routes/RouteConnected";
import RouteNotConnected from "../../Routes/RouteNotConnected";
import {useSelector, useDispatch} from "react-redux";
import { stockLoginCookie } from "../../actions/user";

function App() {
  // quand la location change, on applique un effet qui fait
  // scroller la page en haut
  const location = useLocation();
  
  const dispatch = useDispatch();
  const token = localStorage.getItem('Token');
  const user = localStorage.getItem('User');
  
  const {logged} = useSelector(state => state.user);
  const verifyLogged = () => {
    token ? dispatch(stockLoginCookie(token, JSON.parse(user))) : console.log('log');
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    verifyLogged()
  }, [location]);

  return (
    <div className="App">
      {logged ? <RouteConnected /> : <RouteNotConnected />}
    </div>
  );
}

export default App;
