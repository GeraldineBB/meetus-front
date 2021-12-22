// import './styles.scss';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from 'react-router-dom';


const Category = ({ name, picture, id }) => {
  return (
    <Card className="card"
    sx={{
      mr: { xs: 0, sm: 0, md: 3, lg: 3 },
      ml: { xs: 6, sm: 8, md: 0, lg: 0 }, 
      mb: {xs: 2, sm: 2, md: 0, lg: 0},
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    }}>
      <CardActionArea>
        <CardContent>
        <Link to={`/events/category/${id}`} style={{ textDecoration: 'none', color: 'white' }}>

          <CardMedia
            component="img"
            image={`https://api-meet-us.herokuapp.com/uploads/categories/${picture}`}
            alt={name}
            height="180"
          />
          </Link>
          <Typography variant="h5" component="div" fontFamily="Space Grotesk">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Category;
