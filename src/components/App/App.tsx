import React from 'react';
import Header from '../Header';
import Slogan from '../Slogan'; 
import HowIsWorking from '../HowIsWorking';
import './style.scss';
import Categories from '../Categories';
import Footer from '../Footer';
import {
  BrowserRouter as Router, 
} from "react-router-dom";
import Cards from '../Cards';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Slogan />
      <Cards />
      <HowIsWorking />
      <Categories />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
