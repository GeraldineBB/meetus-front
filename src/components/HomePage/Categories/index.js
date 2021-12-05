import React, { useEffect } from 'react';

import './styles.scss';
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import Category from './Category';
import { LOAD_CATEGORIES_FOR_HOME } from '../../../actions/events';


// import categories pictures
// import music from '../../../assets/illustrations/music.svg'
// import concert from '../../../assets/images/concert-event.jpg'

const Categories = () => {

    const categories = useSelector((state) => state.categories.categoriesList);

    const dispatch = useDispatch();

    useEffect(
      () => {
        dispatch({ type: LOAD_CATEGORIES_FOR_HOME });
      },
      [],
    );
  
    return (
        <Container maxWidth="md" sx={{mt: 6, mb: 8}}>
            <Grid container spacing={4}>
            {categories.map((category) => (
                <Grid item md={4}>
                    <Category key={category.id} title={category.title} picture={category.picture} /> 
                </Grid>
                ))}
            </Grid>
      </Container>
    )
}

export default Categories;
