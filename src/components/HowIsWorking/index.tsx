import React from 'react';
import CardPresentation from './CardPresentation';
import './style.scss';

import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

const HowIsWorking = () => {


    return (
        <div>

        <div className="howItWork">
            <CardPresentation/>
        </div>

        <div> 
        <Grid container
        direction="row-reverse"
        justifyContent="space-evenly"
        alignItems="center" >
            <Grid> 
        <Button className='buttom' variant="contained">Créer un évènement</Button>
        </Grid>
        </Grid>
        
        </div>

        </div>
    );
};

export default HowIsWorking;