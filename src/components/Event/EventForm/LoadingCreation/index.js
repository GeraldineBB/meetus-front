import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./style.scss";

const RedirectEventForm = () => {


    window.setTimeout(function () {
        window.location.href = '/eventList';
    }, 5000);

    return (
        <div className="loading">

            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={`${process.env.PUBLIC_URL}/illustrations/music-illu.svg`}
                        alt="ENJOY"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Votre évènement a bien été créer.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                            Vous allez maintenant être redirigé vers la page des évènements.

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    );
};

export default RedirectEventForm;
