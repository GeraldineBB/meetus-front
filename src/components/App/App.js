import { Routes, Route, useLocation, Redirect } from "react-router-dom";
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
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

function App() {

  // quand la location change, on applique un effet qui fait
  // scroller la page en haut
  const location = useLocation();
  const {logged} = useSelector(state => state.user)
  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    },
    [location],
  );

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-done" element={<RedirectSignup />} />
        <Route path="/event-creation-done" element={<RedirectEventForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/eventList" element={<EventListPage />} />
        <Route path="/create" element={<EventCreation/>} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/edit/:id" element={<EventEdit />} />
        <Route path="/edition-done" element={<RedirectEdition />} />

      </Routes>
    </div>

  );
}

export default App;