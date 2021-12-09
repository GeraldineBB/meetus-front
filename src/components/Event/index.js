import React, { useEffect } from "react";
import EventForm from "./EventForm";
import Header from "../Header";
import "./style.scss";


import { useSelector, useDispatch } from "react-redux";
import { LOAD_CATEGORIES } from "../../../actions/events";



const Event = () => {

  const categorieList = useSelector(
    (state) => state.categories.categorieList
);

const dispatch = useDispatch();

useEffect(() => {
    dispatch({ type: LOAD_CATEGORIES });
}, []);



  return (
    <div>
      <Header />
      <div className="event">
      {categorieList.map((category) => (
            <EventForm
              key={category.id}
              name={category.name}
            />
         
        ))}
      </div>
    </div>
  );
};

export default Event;
