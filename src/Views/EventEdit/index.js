import { useParams } from "react-router-dom";

// import './style.scss';

import Header from "../../components/Header";
import EventEdit from "../../components/Event/EventEdit"; 
import Footer from "../../components/Footer";



const EventEdition = () => {


  let { id } = useParams();

  return (
    <div className="editEvent">
    <Header/>
    <EventEdit eventId={id} />
    <Footer/>
  </div>
  ); 


}

export default EventEdition;
