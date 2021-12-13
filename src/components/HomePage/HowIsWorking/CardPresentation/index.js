import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
          direction="row-reverse"
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
                <Button>
                  <Link to="/TODOTOUTLESEVENTS">Trouver un évènement</Link>
                </Button>
              </CardActions>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                ></Typography>
                <Typography variant="body2" color="text.secondary">
                  Vous ne savez pas quoi faire ce week-end ? 
                  Parcourez la liste des évènements et choisissez celui qui vous convient ! 
                  Meet Us, c'est l'occasion de tester de nouvelles activités ! 
                </Typography>
              </CardContent>
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
                <Button>
                  <Link to="/TODOCREEREVENT" sx={{textDecoration: "none"}}>Organiser un évènement </Link>
                </Button>
              </CardActions>

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                ></Typography>
                <Typography variant="body2" color="text.secondary">
                  Vous avez une passion que vous souhaitez partager ? 
                  Avec MeetUs vous pouvez trouver vos prochains compagnons ! 
                  Etre entouré vous permettra d'aller au bout de vos envies...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CardPresentation;
