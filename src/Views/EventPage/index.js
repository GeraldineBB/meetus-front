import { useParams } from "react-router-dom";

import './style.scss';

import Header from "../../components/Header";
import EventContent from "../../components/EventContent"; 
import Footer from "../../components/Footer";



const EventPage = () => {

  let { id } = useParams();

  return (
    <div className="eventPage">
    <Header/>
    <EventContent eventId={id} />
    <Footer/>
  </div>
  ); 


}

export default EventPage;
