// import './styles.scss';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

const Category = ({ name, picture }) => {
  return (
    <Card className="card">
      <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            image={`${process.env.PUBLIC_URL}/images/${picture}`}
            alt={name}
            height="180"
          />
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Category;
