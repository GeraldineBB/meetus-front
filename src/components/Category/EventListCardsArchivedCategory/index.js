/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import { Skeleton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_EVENT_LIST_ARCHIVED} from "../../../actions/events";
import "./style.scss";

export default function EventListCardsArchived({
  id,
  title,
  description,
  date,
  city,
  membersCount,
  picture,
  category, 
  categoryId
}) {
  const eventList = useSelector(
    (state) => state.events.eventPageListArchived
  );

  
  const {logged} = useSelector(state => state.user)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_EVENT_LIST_ARCHIVED })
    ;
  }, [dispatch]);
  return (
    <Grid container>
      {eventList.filter((event) => {
        if (event.category.id == categoryId) 
        {
          return event;
        }
        }).map((event) => (
        <Grid
          item
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
          key={event.id}
        >
          <Card
            sx={{ display: "flex", ml: "3em", position: "relative" }}
            className="eventListCard"
          >
            <CardMedia
              component="img"
              sx={{ maxWidth: "30%" }}
              image={`${process.env.PUBLIC_URL}/images/${event.picture}`}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                
              <CardContent sx={{ flex: "1 0 auto" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: 'left',
                    width: "100%",

                  }}
                >
                  <Typography component="div" variant="h5" sx={{mb: '0.4em'}} >
                    {event.title}
                    <Chip
                      label={event.category.name}
                      sx={{
                        backgroundColor: "#788795",
                        color: "white",
                        ml: "1.5em",
                        mr: "1.5em",
                      }}
                      size="small"
                    />
                  </Typography>
                    { logged &&
                      <Button
                    className="button__eventlist"
                    sx={{
                      mb: 3,
                      backgroundColor: "#F36B7F",
                      "&:hover": {
                        backgroundColor: "#e51332",
                      },
                    }}
                    variant="contained"
                    size="small"
                  >
                    <EditIcon fontSize="small" sx={{ mr: "0.2em"}} />
                    Modifier mon evenement
                  </Button>
                    }
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    component="div"
                    sx={{ mb: "0.5em" }}
                  >
                    <CalendarTodayIcon sx={{ mr: "0.2em" }} />
                    10/12/2021{" "}
                    <Typography
                      component="span"
                      variant="subtitle1"
                      sx={{ ml: "2em" }}
                    >
                      <LocationOnIcon />
                      {event.city}
                    </Typography>
                  </Typography>
                </div>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ border: "black", maxWidth: "500px", mb: "2em" }}
                >
                  {event.description}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ position: "relative", bottom: "0px", left: "0px" }}
                >
                  {event.membersCount} Participants
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
