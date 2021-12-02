import React from 'react';
import Header from '../Header';
import Slogan from '../Slogan'; 
import HowIsWorking from '../HowIsWorking';
import './style.scss';
import Footer from '../Footer';
import {
  BrowserRouter as Router, 
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Slogan />
      <HowIsWorking />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
