import * as React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
// import Image from "../../../../assets/images/fire-event.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from '@material-ui/core/CssBaseline';

import theme from "../../../../theme";

interface HomeCardProps {
  picture: string;
  date: string;
  city: string;
  membersCount: number;
  title: string;
  description: string;
  id: number;
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HomeCard({
  picture,
  date,
  city,
  membersCount,
  title,
  description,
  id,
}: HomeCardProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}

      <Link
        to={`/events/${id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Card
          className="card"
          sx={{
            mr: { xs: 0, sm: 0, md: 3, lg: 3 },
            // ml: { xs: 3, sm: 3, md: 0, lg: 0 }, 
            mb: {xs: 2, sm: 2, md: 0, lg: 0},
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <CardMedia
              component="img"
              height= "200"
              sizes="100"
              image={`https://api-meet-us.herokuapp.com/uploads/events/${picture}`}
              alt="Paella dish"
            />

            <Typography sx={{ mt: 1.2, fontFamily: 'Space Grotesk' }} variant="h6" component="div">
              {title}
            </Typography>
            <Typography color="text.primary" sx={{fontFamily: 'Space Grotesk'}}>
              <LocationOnIcon fontSize="small" />
              {city === "" ? 'En ligne' : `${city}` }
            </Typography>
            <Typography sx={{ mb: 0.5, fontFamily: 'Space Grotesk' }}>
              <CalendarTodayIcon sx={{ mr: 1.5 }} fontSize="small" />
              {formatDate(date)}
            </Typography>
            <Typography sx={{ mt: 1, fontFamily: 'Space Grotesk' }} color="text.primary" fontSize="small">
              {membersCount} participants
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              className="card__button"
              sx={{
                width: "100%",
                backgroundColor: "#F36B7F",
                "&:hover": { backgroundColor: "#F8CF61" },
              }}
            >
              <Link
                to={`/events/${id}`}
                style={{ 
                  textDecoration: "none", 
                  color: "white", 
                  fontFamily: 'Space Grotesk'  }}
              >
                En savoir plus
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Link>
    </ThemeProvider>
  );
}
