import { useParams } from "react-router-dom";

// import './style.scss';

import Header from "../../components/Header";
import EventEdit from "../../components/Event/EventEdit"; 
import Footer from "../../components/Footer";
import HeaderSignUp from "../../components/Signup/HeaderSignup";



const EventEdition = () => {


  let { id } = useParams();

  return (
    <div className="editEvent">
    <Header/>
    <HeaderSignUp />
    <EventEdit eventId={id} />
  </div>
  ); 


}

export default EventEdition;
