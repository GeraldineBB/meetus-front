import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";

import Cards from "./Cards";
import LinkSection from "../../components/HomePage/LinkSection";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { AvatarGroup, Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import GoogleMaps from "./GoogleMaps";
import {
  ADD_USER_TO_EVENT,
  loadInfoForPageEvent,
} from "../../actions/events";
import LinearIndeterminate from "../Spinner";

const EventContent = ({ eventId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInfoForPageEvent(eventId));
  }, [dispatch, eventId]);

  const eventInfoPage = useSelector((state) => state.events.eventInfoPage);

  const loading = useSelector((state) => state.events.loading);

  const { logged } = useSelector((state) => state.user);

  const { user } = useSelector((state) => state.user);



  if (loading) {
    return <LinearIndeterminate />;
  } else {
    // we want to check if user id is contained in eventInfoPage.event.members (info from api v1/events/id)
    // api send an array with members information (id, avatar and fullname)
    // if suscribed then button "inscrit"
    // in order to inform directly the user that is suscribed we change state of joinEvent to true when user click on the button (in middleware, action ADD AN USER TO EVENT)

    // if the user is the organizer we pin the button "modify"
    // we have to check if the author of the event (from api v1/events/id) is equal to user id (from state)

    // we want to know if there are members in the event in order to show avatar picture

    return (
      <>
        {
          <div className="eventPage">
            <div className="eventContent">
              <div className="eventContent__info">
                <div className="eventContent__info__header">
                  {eventInfoPage.event.author.id === user.id && (
                    <Button
                      className="button__eventlist"
                      sx={{
                        mb: 3,
                        backgroundColor: "#F8CF61",
                        "&:hover": {
                          backgroundColor: "#f8d061",
                        },
                      }}
                      variant="contained"
                      size="small"
                    >
                      <Link
                        to={`/edit/${eventId}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <EditIcon fontSize="small" sx={{ mr: "0.2em" }} />
                        Modifier mon évènement
                      </Link>
                    </Button>
                  )}
                  <p className="eventContent__info__header--title">
                    {eventInfoPage.event.title}
                  </p>
                  <p className="eventContent__info__header--date">
                    {new Date(eventInfoPage.event.date).toLocaleDateString(
                      "fr-FR",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                  <p className="eventContent__info__header--author">
                    crée par {eventInfoPage.event.author.fullName}
                  </p>
                </div>
                <div className="eventContent__info__picture">
                  <img
                    alt={eventInfoPage.event.picture}
                    src={`${process.env.PUBLIC_URL}/images/concert-event.jpg`}
                  />
                </div>
                <div className="eventContent__info__description">
                  <p className="eventContent__info__description--text">
                    {eventInfoPage.event.description}
                  </p>
                </div>
              </div>
              <div className="eventContent__detail">

                {eventInfoPage.event.isOnline === true ?

                  <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                    <Button>Evènement en ligne</Button>
                  </Box> :
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="eventContent__detail__map"
                      style={{
                        width: "300px",
                        height: "200px",
                        position: "relative",
                      }}
                    >
                      <GoogleMaps
                        currentLng={eventInfoPage.event.longitude}
                        currentLat={eventInfoPage.event.latitude}
                      />
                    </div>
                  </Box>


                }
                <p className="eventContent__detail__date">
                  {new Date(eventInfoPage.event.date).toLocaleDateString(
                    "fr-FR",
                    {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    }
                  )}
                </p>
                <p className="eventContent__detail__hour">
                  {("0" + new Date(eventInfoPage.event.date).getHours()).slice(
                    -2
                  )}
                  H
                  {(
                    "0" + new Date(eventInfoPage.event.date).getMinutes()
                  ).slice(-2)}
                </p>
                <p className="eventContent__detail__adress">
                  {eventInfoPage.event.address}
                </p>
                <p className="eventContent__detail__zipcode">
                  {eventInfoPage.event.zipcode} {eventInfoPage.event.city}
                </p>
                {/* /si user id récupéré dans le state est présent dans le tableau eventInfoPage.event.members alors on affiche le bouton inscrit */}

                {!logged ? (
                  <NavLink to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      size="small"
                      variant="contained"
                      className="card__button"
                      sx={{
                        width: "60%",
                        backgroundColor: "#F36B7F",
                        "&:hover": { backgroundColor: "#F8CF61" },
                      }}
                    // onClick={() => {
                    //   dispatch({ type: ADD_USER_TO_EVENT,
                    //     eventId: eventId });
                    // }}
                    >
                      Rejoindre
                    </Button>
                  </NavLink>
                ) : (
                  <Button
                    size="small"
                    variant="contained"
                    className="card__button"
                    sx={{
                      width: "60%",
                      backgroundColor: "#F36B7F",
                      "&:hover": { backgroundColor: "#F8CF61" },
                    }}
                    onClick={() => {
                      dispatch({
                        type: ADD_USER_TO_EVENT,
                        eventId: eventId,
                      });
                      window.location.reload();
                    }}
                  >
                    {eventInfoPage.event.members.some(
                      (member) => member.id === user.id
                    )
                      ? "Inscrit"
                      : "Rejoindre"}
                  </Button>
                )}

                <p className="eventContent__detail__membersCount">
                  {eventInfoPage.event.membersCount} Participants
                  {/* eventInfoPage.event.membersCount + (joinEvent ? 1 : 0) */}
                </p>
                {eventInfoPage.event.members.length > 0 && (
                  <Container maxWidth="md" sx={{ mt: 2, display: "flex" }}>
                    <AvatarGroup max={3} sx={{ mx: "auto" }}>
                      {/* {{eventInfoPage.event.members}.map((member) => (
                      <Avatar alt={member.fullName} src="/static/images/avatar/1.jpg" />
                    ))} */}
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="/static/images/avatar/4.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="/static/images/avatar/5.jpg"
                      />
                    </AvatarGroup>
                  </Container>
                )}
              </div>
            </div>
            <div className="eventSimilar">
              <LinkSection
                title={"Evènements similaires"}
                buttonName={"Voir tous les évènements"}
              />
              <Container maxWidth="lg" sx={{ mt: 2 }}>
                <Grid container>
                  {eventInfoPage.recommendedEvents.map((event) => (
                    <Grid item md={4} key={event.id}>
                      <Cards key={event.id} {...event} />
                    </Grid>
                  ))}
                </Grid>
                <div className="eventSimilar__illustration">
                  <img
                    alt="event-illu"
                    src={`${process.env.PUBLIC_URL}/illustrations/spring-illu.svg`}
                  />
                </div>
              </Container>
            </div>
          </div>
        }
      </>
    );
  }
};

export default EventContent;
