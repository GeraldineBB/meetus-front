import React, { useEffect } from "react";

import "./styles.scss";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import { LOAD_CATEGORIES_FOR_HOME } from "../../../actions/events";

// import categories pictures
// import music from '../../../assets/illustrations/music.svg'
// import concert from '../../../assets/images/concert-event.jpg'

const Categories = () => {
  const homeCategorieList = useSelector(
    (state) => state.categories.homeCategorieList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_CATEGORIES_FOR_HOME });
  }, [dispatch]);

  return (

    <div className="categories">
    <Container maxWidth="md" sx={{ mt: 1, mb: 8 }}>
      <Grid container spacing={4}>
        {homeCategorieList.map((category) => (
          <Grid item md={4} key={category.id}>
            <Category
              key={category.id}
              id={category.id}
              name={category.name}
              picture={category.picture}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default Categories;
