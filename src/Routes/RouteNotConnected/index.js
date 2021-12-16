import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import LoginPage from "../../Views/Login";

import EventListPage from "../../Views/EventListPage";
import EventPage from "../../Views/EventPage";
import CategoryPage from "../../Views/CategoryPage";
import HomePage from "../../Views/HomePage";
import { SignUpForm } from "../../components/Signup";
import RedirectSignup from "../../components/Signup/Loading";

function RouteNotConnected() {
  // quand la location change, on applique un effet qui fait
  // scroller la page en haut
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup-done" element={<RedirectSignup />} />
      <Route path="/events/:id" element={<EventPage />} />
      <Route path="/eventList" element={<EventListPage />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create" element={<Navigate to="/login" />} />
      <Route path="/edit/:id" element={<Navigate to="/login" />} />
      <Route path="/events/category/:id" element={<CategoryPage />} />
    </Routes>
  );
}

export default RouteNotConnected;
