import React from "react";
import Header from "../../components/Header";
import Slogan from "../../components/HomePage/Slogan";
import HowIsWorking from "../../components/HomePage/HowIsWorking";
import Categories from "../../components/HomePage/Categories";
import LinkSection from "../../components/HomePage/LinkSection";
import Footer from "../../components/Footer";
import Cards from "../../components/HomePage/Cards";
import {useSelector} from "react-redux";

function HomePage() {
  const {logged} = useSelector(state => state.user)
  return (
    <div className="HomePage">
      <Header />
      <Slogan />
      <LinkSection
        title={"Les prochains évènements à venir"}
        buttonName={"Voir tous les évènements"}
      />
      <Cards />

      {logged ? (
        <>
          <LinkSection
            title={"Toutes les catégories"}
            buttonName={"Voir toutes les catégories"}
          />
          <Categories />
        </>
      ) : (
        <>
          <LinkSection
            title={"Comment fonctionne Meet Us ?"}
            buttonName={"Voir tous les évènements"}
          />
          <HowIsWorking />
        </>
      )}

      <Footer />
    </div>
  );
}

export default HomePage;
