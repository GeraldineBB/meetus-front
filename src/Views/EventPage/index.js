import './style.scss';

import Header from "../../components/Header";
import EventContent from "../../components/EventContent"; 
import Footer from "../../components/Footer";

const EventPage = () => (
  <div className="eventPage">
    <Header/>
    <EventContent/>
    <Footer/>
  </div>
);

export default EventPage;
