import React from 'react';
import eventPresentation from '../../../assets/images/friends-event.jpg';
import { Link } from 'react-router-dom';

import './style.scss';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Container } from '@mui/material';


const CardPresentation = () => {


    return (
        <div className="card">
            <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
                <Grid container
                    direction="row-reverse"
                    justifyContent="space-evenly"
                    alignItems="center">
                    <Grid item md={4}>
                        <Card sx={{ maxWidth: 345 }} className="card__single">
                            <CardMedia
                                component="img"
                                height="180"
                                image={eventPresentation}
                                alt="aller vien, ont est bien"
                            />
                            <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                                <Button >

                                    <Link to="/TODOTOUTLESEVENTS">Trouver un évènement</Link></Button>

                            </CardActions>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">


                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ maxWidth: 345 }} className="card__single">
                            <CardMedia
                                component="img"
                                height="180"
                                image={eventPresentation}
                                alt="creer un evenement s'il te plait"
                            />
                            <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                                <Button >
                                    <Link to="/TODOCREEREVENT">Organiser un évènement</Link></Button>

                            </CardActions>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">


                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
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