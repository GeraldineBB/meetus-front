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
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

interface HomeCardProps {
  picture: string;
  date: string;
  city: string;
  membersCount: number;
  title: string;
  description: string;
  id: number; 
}


const theme = createTheme({
  typography: {
    fontFamily: [
      "Space Grotesk",
    ].join(','),
  },});


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

    <Card className="card" 
      sx={{ 
        mr: 3,
        height: 540, 
        display: 'flex', justifyContent: 'space-between', flexDirection: 'column'
      }}>
      <CardContent
      sx={{ 
        height: 500, 
        display: 'flex', 
        justifyContent: 'space-between',
        flexDirection: 'column'
      }}
      >
        <CardMedia
          component="img"
          sizes="100"
          image={`${process.env.PUBLIC_URL}/images/${picture}`}
          alt="Paella dish"
        />
        <Typography sx={{ mt: 1.5 }} variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="text.primary">
          <LocationOnIcon fontSize="medium" />
          {city}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          <CalendarTodayIcon />
          {date}
        </Typography>
        <Typography sx={{ mb: 1.5}} variant="body1">
          {description}
        </Typography>
        <Typography color="text.primary">
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
    </ThemeProvider>

  );
}
