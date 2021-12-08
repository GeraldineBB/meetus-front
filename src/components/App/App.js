import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';

import LoginPage from "../../Views/Login";
import HomePage from "../../Views/HomePage";
import EventPage from "../../Views/EventPage";
import Event from "../Event";


function App() {

  // quand la location change, on applique un effet qui fait
  // scroller la page en haut
  const location = useLocation();

  useEffect(
    () => {
      console.log('on veut scroller !');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [location],
  );

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<Event />} />
        <Route path="/events/:id" element={<EventPage />} />
      </Routes>
    </div>

  );
}

export default App;
