import React from 'react';
import Header from '../../components/Header';
import Slogan from '../../components/HomePage/Slogan'; 
import HowIsWorking from '../../components/HomePage/HowIsWorking';
import Categories from '../../components/HomePage/Categories';
import LinkSection from '../../components/HomePage/LinkSection'; 
import Footer from '../../components/Footer';
import Cards from '../../components/HomePage/Cards';


function HomePage() {
  return (
    <div className="HomePage">
    <Header />
    <Slogan />
    <Cards />
    <LinkSection title={"Evènements à venir"} buttonName={"Voir tous les évènements"}/>
    <HowIsWorking />
    <LinkSection title={"Toutes les catégories"} buttonName={"Voir toutes les catégories"}/>
    <Categories />
    <Footer />
    </div>
  
  );
}

export default HomePage;
