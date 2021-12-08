import { Routes, Route } from "react-router-dom";
import LoginPage from "../../Views/Login";
import HomePage from "../../Views/HomePage";
import { SignUpForm } from "../Event/Signup";
import EventForm from "../Event/EventForm";
import EventEdit from "../Event/EventEdit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<EventForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/edit" element={<EventEdit />} />
      </Routes>
    </div>
  );
}

export default App;
