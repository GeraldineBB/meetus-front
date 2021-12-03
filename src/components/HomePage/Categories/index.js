import './styles.scss';
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import { useSelector } from "react-redux";
import Category from './Category';


// import categories pictures
// import music from '../../../assets/illustrations/music.svg'
// import concert from '../../../assets/images/concert-event.jpg'

const Categories = () => {

    const categories = useSelector((state) => state.categories.categoriesList);

    return (
        <Container maxWidth="md" sx={{mt: 6, mb: 8}}>
            <Grid container spacing={4}>
            {categories.map((event) => (
                <Grid item md={4}>
                    <Category title={event.title} picture={event.picture} /> 
                </Grid>
                ))}
            </Grid>
      </Container>
    )
}

export default Categories;
