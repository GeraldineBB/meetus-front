import React, { useEffect } from 'react';

import HomeCard from './HomeCard'; 
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'; 
import { LOAD_EVENTS_FOR_HOME } from '../../../actions/events';

function Cards() {

    const list = useSelector((state) => state.events.list);

    const dispatch = useDispatch();

    useEffect(
      () => {
        dispatch({ type: LOAD_EVENTS_FOR_HOME });
      },
      [],
    );
  

    return (
        <Container maxWidth="lg" sx={{mt: 6, mb: 8}}>
            <Grid container >

            {list.map((event) => (
                <Grid item md={4}>
                     <HomeCard key={event.id} {...event}/> 
                </Grid>
            ))}

            </Grid>
      </Container>
    )
}

export default Cards;