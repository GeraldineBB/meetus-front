import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RedirectEdition = () => {


    window.setTimeout(function () {
        window.location.href = '/eventList';
    }, 3000);

    return (
        <div className="loading">

            <Card sx={{ maxWidth: 340 }}>

                    <CardContent>

                        <Typography variant="body2" color="text.secondary">
                            Votre évènement a bien été mis à jour.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                            Vous allez maintenant être redirigé vers la liste des évènements.

                        </Typography>
                    </CardContent>
            </Card>

        </div>
    );
};

export default RedirectEdition;

