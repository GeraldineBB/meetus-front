/* eslint-disable array-callback-return */
import { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { LOAD_EVENT_LIST_IN_PROGRESS } from "../../../actions/events";
import { Link } from "react-router-dom";

import "./style.scss";



export default function EventListCardsInProgress({
  id,
  title,
  description,
  date,
  city,
  membersCount,
  picture,
  category,
}) {
  const eventList = useSelector(
    (state) => state.events.eventPageListInProgress
  );
  const currentInput = useSelector(state => state.events.currentSearchBar);
  const currentSelect = useSelector(state => state.events.currentSelectCategoriesEventList);
  const { user }   = useSelector((state) => state.user);



  function formatDate(value) {
    return new Date(value).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  }
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_EVENT_LIST_IN_PROGRESS });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // we want to check if the user is the organiser in order to print the button "Modifier"
 
  return (
    <Grid container>
      {eventList.filter((event) => {
        if (event.title.toLowerCase().includes(currentInput.toLowerCase()) 
        && event.category.name.includes(currentSelect)){
          return event;
        }
      }).filter((event) => {
        if (event.category.name.includes(currentSelect)){
          return event; 
        } else if (event.title.toLowerCase().includes(currentInput.toLowerCase())){
          return event; 
        }
      }).map((event) => (
        <Grid
          item
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
          key={event.id}
        >
          <Link to={`/events/${event.id}`} style={{ textDecoration: 'none', color: 'white' }}>
          <Card
            sx={{ 
              display: "flex", 
              position: "relative", 
              height: 350, 
              ml: { xs: 1, sm: 1, md: 1, lg: 1},
              mr: { xs: 0, sm: 0, md: 1, lg: 1 },
            }}
            className="eventListCard"
            
          >

            <CardMedia

              component="img"
              sx={{ maxWidth: "30%" }}
              image={`https://api-meet-us.herokuapp.com/uploads/events/${event.picture}`}
              alt="Live from space album cover"

            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>

              <CardContent sx={{ flex: "1 0 auto" }}>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <Typography component="div" variant="h5" sx={{mb: 1, fontFamily: 'Space Grotesk'}}>
                    {event.title}
                    <Chip
                      label={event.category.name}
                      sx={{
                        backgroundColor: "#F36B7F",
                        color: "white",
                        ml: "1.5em",
                        mr: "1.5em",
                      }}
                      size="small"
                    />
                  </Typography>
                  {
                    event.author.id === user.id ? <Button
                    className="button__eventlist"
                    sx={{
                      mb: 4,
                      backgroundColor: "#F8CF61",
                      fontFamily: 'Space Grotesk', 
                      "&:hover": {
                        backgroundColor: "#f8d061",
                      },
                    }}
                    variant="contained"
                    size="small"
                  >
                    <Link to={`/edit/${event.id}`} style={{ textDecoration: 'none', color: 'white' }}>

                    <EditIcon fontSize="small" sx={{ mr: "0.2em", fontFamily: 'Space Grotesk' }} />
                    Modifier mon évènement

                    </Link>

                  </Button> : false
                  }
                  
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    component="div"
                    sx={{ mb: 2, fontFamily: 'Space Grotesk' }}
                  >
                    <CalendarTodayIcon sx={{ mr: "0.2em" }} />
                    {formatDate(event.date)}

                    <Typography
                      component="span"
                      variant="subtitle1"
                      sx={{ ml: 2, fontFamily: 'Space Grotesk' }}
                    >
                      <LocationOnIcon />
                      {event.city}
                    </Typography>
                  </Typography>
                </div>
                <Typography 
                  variant="body1"
                  component="p"
                  sx={{ border: "black", mr: 2, pb: 2, mb: 1, maxWidth: 850, maxHeight: 80, overflow: 'hidden', fontFamily: 'Space Grotesk'}}

                >
                  {event.description}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ position: "relative", bottom: "0px", left: "0px", mt: 3, fontFamily: 'Space Grotesk' }}
                >
                  {event.membersCount} Participants
                </Typography>
              </CardContent>
            </Box>

          </Card>
          </Link>

        </Grid>
      ))}
    </Grid>
  );
  
}
