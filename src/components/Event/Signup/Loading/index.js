import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./style.scss";

const RedirectSignup = () => {


    window.setTimeout(function () {
        window.location.href = '/login';
    }, 5000);

    return (
        <div className="loading">

            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={`${process.env.PUBLIC_URL}/illustrations/music-illu.svg`}
                        alt="WELCOMMEEE"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Votre inscription a Meet Us a bien été prise en compte.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Nous vous remercions de votre interet.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                            Vous aller maintenant être redirigé vers la page de connection.

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    );
};

export default RedirectSignup;

