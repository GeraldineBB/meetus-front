import { Routes, Route } from "react-router-dom";

import HomePage from "../../Views/HomePage";
import Event from "../Event";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/create" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
