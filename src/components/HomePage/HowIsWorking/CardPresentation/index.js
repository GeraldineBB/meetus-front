import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';

const CardPresentation = () => {
  return (
    <div className="card">
      <Container maxWidth="lg" sx={{ mt: 3, mb: 5 }}>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item md={4}>
            <Card sx={{ 
            maxWidth: 345,         
            mb: {xs: 1, sm: 1, md: 0, lg: 0},
            }} className="card__single">
              <CardMedia
                component="img"
                height="180"
                image={`${process.env.PUBLIC_URL}/illustrations/camera-illu.svg`}
                alt="explaining how to use create an event"
              />
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Link style={{textDecoration: 'none', color: '#000000'}} to="/eventList">
                    <Button >
                    Trouver un évènement
                    </Button>
                    </Link>
              </CardActions>

                <Typography variant="inherit" color="text.secondary" sx={{fontFamily: 'Space Grotesk', lineHeight: 1.5, mb:2, mr: 1, ml: 1}}>
                  Vous ne savez pas quoi faire ce week-end ? 
                  Parcourez la liste des évènements et choisissez celui qui vous convient ! 
                  Meet Us, c'est l'occasion de tester de nouvelles activités ! 
                </Typography>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ 
              maxWidth: 345,
              mb: {xs: 1, sm: 1, md: 0, lg: 0},
              }} className="card__single">
              <CardMedia
                component="img"
                height="180"
                image={`${process.env.PUBLIC_URL}/illustrations/music-illu.svg`}
                alt="explaining how to use create an event"
              />
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>

                <Link style={{textDecoration: 'none', color: '#000000'  }} to="/create">
                    <Button >
                    Organiser un évènement
                    </Button>
                    </Link>
              </CardActions>

  
                <Typography variant="inherit" color="text.secondary" sx={{fontFamily: 'Space Grotesk', lineHeight: 1.5, mb:2, mr: 1, ml: 1}}>
                  Vous avez une passion que vous souhaitez partager ? 
                  Avec MeetUs vous pouvez trouver vos prochains compagnons ! 
                  Etre entouré vous permettra d'aller au bout de vos envies...
                </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CardPresentation;
