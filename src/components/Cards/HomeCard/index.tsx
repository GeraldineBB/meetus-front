import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Image from '../../../assets/images/fire-event.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function HomeCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
        
      <CardContent>
        <CardMedia
            component="img"
            sizes="100"
            image={Image}
            alt="Paella dish"
        />
        <Typography variant="h5" component="div">
          Match de volley
        </Typography>
        <Typography  color="text.primary">
        <LocationOnIcon fontSize="medium" />Marseille
        </Typography>
        <Typography sx={{ mb: 1.5}}>
         <CalendarTodayIcon />10/12/2021
        </Typography>
        <Typography sx={{ mb: 1.5}} variant="body1" >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam repellendus maxime odio nemo dol.
        </Typography>
        <Typography  color="text.primary">
        10 participants
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};