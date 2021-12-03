
import {
  Routes, Route
} from "react-router-dom";

import HomePage from '../../Views/HomePage';
import Login from "../../Views/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  
  );
}

export default App;
