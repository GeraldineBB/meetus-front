import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from '@mui/material';
import "./style.scss";
import CardMedia from '@mui/material/CardMedia';

const RedirectEdition = () => {
  window.setTimeout(function () {
    window.location.href = "/eventList";
  }, 2000);

  return (
    <div className="cardEvent">
        <div className="cardEvent__loading">
            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={`${process.env.PUBLIC_URL}/illustrations/music-illu.svg`}
                        alt="ENJOY"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Votre évènement a bien été mis à jour.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                        Vous allez maintenant être redirigé vers la liste des évènements.

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        </div>
  );
};

export default RedirectEdition;