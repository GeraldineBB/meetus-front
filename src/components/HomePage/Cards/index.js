import HomeCard from './HomeCard'
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import {useSelector} from 'react-redux'; 

function Cards() {

    const list = useSelector((state) => state.events.list);

    return (
        <Container maxWidth="lg" sx={{mt: 6, mb: 8}}>
            <Grid container >

            {list.map((event) => (
                <Grid item md={4}>
                     <HomeCard key={event.id} {...event}/> 
                </Grid>
            ))}
            
                <Grid item md={4}>
                    <HomeCard /> 
                </Grid>
                <Grid item md={4}>
                    <HomeCard /> 
                </Grid>
                <Grid item md={4}>
                    <HomeCard /> 
                </Grid>
            </Grid>
      </Container>
    )
}

export default Cards;