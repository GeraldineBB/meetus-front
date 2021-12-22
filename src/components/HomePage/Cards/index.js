import React, { useEffect } from "react";
import "./style.scss";

import HomeCard from "./HomeCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_EVENTS_FOR_HOME } from "../../../actions/events";

function Cards() {
  const homeEventList = useSelector((state) => state.events.homeEventList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_EVENTS_FOR_HOME });
  }, [dispatch]);
  return (
    <div className="cards">
    <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
      <Grid container>
        {homeEventList.map((event) => (
          <Grid item md={4} key={event.id}>
            <HomeCard key={event.id} {...event} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
}

export default Cards;
