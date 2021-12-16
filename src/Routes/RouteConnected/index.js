import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import EventEdit from "../../Views/EventEdit";
import EventForm from "../../components/Event/EventForm";
import EventListPage from "../../Views/EventListPage";
import EventPage from "../../Views/EventPage";
import HomePage from "../../Views/HomePage";
import CategoryPage from "../../Views/CategoryPage";
import RedirectEventForm from "../../components/Event/EventForm/LoadingCreation";
import RedirectEdition from "../../components/Event/EventEdit/LoadingEdition";

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
      <Route path="/event-creation-done" element={<RedirectEventForm />} />
      <Route path="/edit/:id" element={<EventEdit />} />
      <Route path="/edition-done" element={<RedirectEdition />} />
      <Route path="/signup" element={<Navigate to="/" />} />
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/events/category/:id" element={<CategoryPage />} />
    </Routes>
  );
}

export default RouteConnected;
