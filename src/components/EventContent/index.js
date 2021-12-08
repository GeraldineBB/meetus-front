import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './style.scss';

import Button from "@mui/material/Button";


import Cards from "./Cards";
import LinkSection from "../../components/HomePage/LinkSection";

import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { AvatarGroup, Avatar } from "@mui/material";


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

 
        <div className="eventPage">
          <div className="eventContent">
            <div className="eventContent__info">
                <div className="eventContent__info__header">
                    <p className="eventContent__info__header--title">
                    {eventInfoPage.event.title}
                    </p>
                    <p className="eventContent__info__header--date">
                    {eventInfoPage.event.date}
                    {/* <DayJS
                    format="DD / MM / YYYY"
                    {...eventInfoPage.event.date}
                    >
                    </DayJS>   */}
                    </p>

                    <p className="eventContent__info__header--author">
                      Crée par {eventInfoPage.event.author.fullName}
                    </p>
                </div>
                <div className="eventContent__info__picture">
                    <img alt={eventInfoPage.event.picture} src={`${process.env.PUBLIC_URL}/images/concert-event.jpg`}/>
                </div>
                <div className="eventContent__info__description">
                    <p className="eventContent__info__description--text">
                    {eventInfoPage.event.description}
                    </p>
                </div>
            </div>
            <div className="eventContent__detail">
                <div className="eventContent__detail__map">
                    <img alt="event-illu" src={`${process.env.PUBLIC_URL}/illustrations/eventPage.svg`}/>
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
                  {eventInfoPage.event.zipcode} {eventInfoPage.event.city}
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
                <Container maxWidth="md" sx={{ mt: 2, display: 'flex'}}>

                <AvatarGroup max={3} sx={{mx: "auto"}}>
                  {/* {{eventInfoPage.event.members}.map((member) => (
                    <Avatar alt={member.fullName} src="/static/images/avatar/1.jpg" />
                  ))} */}
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                </Container>

            </div>
          </div>
          <div className="eventSimilar">
          <LinkSection
           title={"Evènements similaires"}
           buttonName={"Voir tous les évènements"}
          />
          <Container maxWidth="lg" sx={{ mt: 2, mb: 8}}>
            <Grid container>
              {eventInfoPage.recommendedEvents.map((event) => (
                <Grid item md={4}  key={event.id}>
                  <Cards key={event.id} {...event} />
                </Grid>
              ))}
            </Grid>
          </Container>
          </div>
        </div>

        ); 

}

export default EventContent;
