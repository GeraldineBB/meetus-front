// import './styles.scss';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from 'react-router-dom';


const Category = ({ name, picture, id }) => {
  return (
    <Card className="card">
      <CardActionArea>
        <CardContent>
        <Link to={`/events/category/${id}`} style={{ textDecoration: 'none', color: 'white' }}>

          <CardMedia
            component="img"
            image={`${process.env.PUBLIC_URL}/images/${picture}`}
            alt={name}
            height="180"
          />
          </Link>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Category;
