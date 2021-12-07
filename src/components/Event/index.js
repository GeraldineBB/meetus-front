import React from "react";
import EventForm from "./EventForm";
import Header from "../Header";
import "./style.scss";




const Event = () => {




  return (
    <div>
      <Header />
      <div className="event">
        <EventForm />
      </div>
    </div>
  );
};

export default Event;
