import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import './style.scss';

import Header from "../../components/Header";
import EventContent from "../../components/EventContent"; 
import Footer from "../../components/Footer";

import { setIdEvent } from '../../actions/events';


const EventPage = () => {

  let { id } = useParams();
  console.log('ici on récupère id params', id); 

  const dispatch = useDispatch();
    
  useEffect(() => {
  dispatch(setIdEvent(id));
  console.log('ici on récupère id state', id); 

  }, []);

  return (
    <div className="eventPage">
    <Header/>
    <EventContent />
    <Footer/>
  </div>
  ); 


}

export default EventPage;
