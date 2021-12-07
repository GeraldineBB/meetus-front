import { Routes, Route } from "react-router-dom";
import LoginPage from "../../Views/Login";
import HomePage from "../../Views/HomePage";
import EventPage from "../../Views/EventPage";
import Event from "../Event";

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Space Grotesk",
    ].join(','),
  },});

function App() {

  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<Event />} />
        <Route path="/events/:id" element={<EventPage />} />
      </Routes>
    </div>
    </ThemeProvider>

  );
}

export default App;
