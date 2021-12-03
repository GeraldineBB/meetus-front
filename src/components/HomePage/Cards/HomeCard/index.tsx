import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
// import Image from "../../../../assets/images/fire-event.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";


interface HomeCardProps {
  picture: string, 
  date: string, 
  city: string, 
  members: number, 
  title: string, 
  description: string, 
};

export default function HomeCard({picture,date,city,members,title, description}: HomeCardProps) {
  return (
      <Card className="card" sx={{mr: 2}}>
        <CardContent >
          <CardMedia
            component="img"
            sizes="100"
            image={`${process.env.PUBLIC_URL}/images/${picture}`}
            alt="Paella dish"
          />
          <Typography variant="h5" component="div">
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
          <Typography sx={{ mb: 1.5 }} variant="body1">
            {description}
          </Typography>
          <Typography color="text.primary">{members} participants</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            className="card__button"
            sx={{ width: "100%", backgroundColor: "#F36B7F", '&:hover':{backgroundColor: '#F8CF61'}}}
          >
            En savoir plus
          </Button>
        </CardActions>
      </Card>
     
  )
};
