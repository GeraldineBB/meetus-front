import { Routes, Route } from "react-router-dom";
import LoginPage from "../../Views/Login";
import HomePage from "../../Views/HomePage";
import EventPage from "../../Views/EventPage";

import Event from "../Event";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { LOAD_INFO_FOR_PAGE_EVENT } from '../../actions/events';


function App() {

  const eventInfoPage = useSelector(
    (state) => state.events.eventInfoPage
  );

  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch({ type: LOAD_INFO_FOR_PAGE_EVENT });
    console.log(eventInfoPage); 

  }, []);

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
