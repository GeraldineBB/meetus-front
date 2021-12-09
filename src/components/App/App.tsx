import { Routes, Route } from "react-router-dom";
import LoginPage from "../../Views/Login";
import HomePage from "../../Views/HomePage";
import EventListPage from "../../Views/EventListPage";
import Event from "../Event";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<Event />} />
        <Route path="/eventList" element={<EventListPage />} />
      </Routes>
    </div>
  );
}

export default App;
