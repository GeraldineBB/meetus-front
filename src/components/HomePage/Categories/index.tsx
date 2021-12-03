import './styles.scss';
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';

import Category from './Category'; 


// import categories pictures
// import music from '../../../assets/illustrations/music.svg'
// import concert from '../../../assets/images/concert-event.jpg'

const Categories = () => {

    return (
        <Container maxWidth="md" sx={{mt: 6, mb: 8}}>
            <Grid container spacing={4}>
                <Grid item md={4}>
                    <Category /> 
                </Grid>
                <Grid item md={4}>
                    <Category /> 
                </Grid>
                <Grid item md={4}>
                    <Category /> 
                </Grid>
                <Grid item md={4}>
                    <Category /> 
                </Grid>
                <Grid item md={4}>
                    <Category /> 
                </Grid>
                <Grid item md={4}>
                    <Category /> 
                </Grid>
            </Grid>
      </Container>
    )
}

export default Categories;
