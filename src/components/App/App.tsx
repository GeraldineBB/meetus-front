import { Routes, Route } from "react-router-dom";
import LoginPage from "../../Views/Login";
import HomePage from "../../Views/HomePage";
import Event from "../Event";
import 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<Event />} />
        <Route path="/create" element={<EventEdit />} />
        <Route path="/create" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
