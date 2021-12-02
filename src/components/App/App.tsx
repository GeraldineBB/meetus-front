import React from 'react';
import Header from '../Header';
import Slogan from '../Slogan'; 
import Categories from '../Categories';
import './App.css';
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
      <Categories />
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
