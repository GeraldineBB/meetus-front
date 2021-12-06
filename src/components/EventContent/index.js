import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './style.scss';

import Button from "@mui/material/Button";

import { LOAD_INFO_FOR_PAGE_EVENT } from '../../actions/events';


const EventContent = () => {

    const eventInfoPage = useSelector(
        (state) => state.events.eventInfoPage
      );
    
    const loading = useSelector(
        (state) => state.events.loading
    ); 

    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch({ type: LOAD_INFO_FOR_PAGE_EVENT });
    console.log(eventInfoPage); 

    }, []);

    if (loading) {
        return <div>coucou</div>;
    }

      return (

        <div className="eventContent">
          <div className="eventContent__info">
      
              <div className="eventContent__info__header">
                  <p className="eventContent__info__header--date">
                    {eventInfoPage.event.date}
                    </p>
                  <p className="eventContent__info__header--title">
                    {eventInfoPage.event.title}
                  </p>
                  <p className="eventContent__info__header--author">
                    Crée par {eventInfoPage.event.author.fullName}
                  </p>
              </div>
      
              <div className="eventContent__info__picture">
                  <img src={`${process.env.PUBLIC_URL}/images/concert-event.jpg`}/>
              </div>
      
              <div className="eventContent__info__description">
                  <p className="eventContent__info__description--text">
                  {eventInfoPage.event.description}
                  </p>
              </div>
      
          </div>
      
      
          <div className="eventContent__detail">
              <div className="eventContent__detail__map">
                  <img src={`${process.env.PUBLIC_URL}/illustrations/eventPage.svg`}/>
              </div>
              <p className="eventContent__detail__date">
                {eventInfoPage.event.date}
              </p>
              <p className="eventContent__detail__hour">
                {eventInfoPage.event.date}
              </p>
              <p className="eventContent__detail__adress">
                {eventInfoPage.event.address}
              </p>
              <p className="eventContent__detail__zipcode">
                {eventInfoPage.event.zipcode}
              </p>
      
              <Button
              size="small"
              variant="contained"
              className="card__button"
              sx={{
                width: "60%",
                backgroundColor: "#F36B7F",
                "&:hover": { backgroundColor: "#F8CF61" },
              }}
            >
             Rejoindre
            </Button>
      
              <p className="eventContent__detail__membersCount">
              {eventInfoPage.event.membersCount} Participants
              </p>

          </div>

        </div>

        ); 

}

export default EventContent;
