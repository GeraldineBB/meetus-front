import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import EventEdit from "../../components/Event/EventEdit";
import EventForm from "../../components/Event/EventForm";
import EventListPage from "../../Views/EventListPage";
import EventPage from "../../Views/EventPage";
import HomePage from "../../Views/HomePage";


function RouteConnected() {
  // quand la location change, on applique un effet qui fait
  // scroller la page en haut
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events/:id" element={<EventPage />} />
      <Route path="/eventList" element={<EventListPage />} />
      <Route path="/create" element={<EventForm />} />
      <Route path="/edit/:id" element={<EventEdit />} />
      <Route path="/signup" element={<Navigate to="/" />} />
      <Route path="/login" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteConnected;
