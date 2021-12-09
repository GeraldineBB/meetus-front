import * as React from "react";
import { Link } from 'react-router-dom';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
// import Image from "../../../../assets/images/fire-event.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../../../../theme';

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
  return new Date(value).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
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

    <Link to={`/events/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
    <Card className="card" 
      sx={{ 
        mr: {xs: 0, sm: 0, md: 3, lg: 3},
        display: 'flex', justifyContent: 'space-between', flexDirection: 'column'
      }}>
      <CardContent
      >
        <CardMedia
          component="img"
          sizes="100"
          image={`${process.env.PUBLIC_URL}/images/${picture}`}
          alt="Paella dish"
        />

        <Typography sx={{ mt: 1.2 }} variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="text.primary">
          <LocationOnIcon fontSize="medium" />
          {city}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          <CalendarTodayIcon sx={{ mr: 1.5 }}/>
          {formatDate(date)}
        </Typography>
        <Typography sx={{ mb: 2, height: 70, my: 2, overflow: 'hidden', textOverflow: 'ellipsis'  }} variant="body1" component="div">
          {description}
        </Typography>
        <Typography sx={{ mt: 2 }} color="text.primary">
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
        <Link to={`/events/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
        En savoir plus
        </Link>

      </Button>
      
      </CardActions>

    </Card>
    </Link>
    </ThemeProvider>


  );
}
