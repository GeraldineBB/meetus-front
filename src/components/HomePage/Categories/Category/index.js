// import './styles.scss';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {CardMedia} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from '@mui/material';
import { color } from "@mui/system";


const Category = ({title, picture}) => {
{console.log(picture)}
    return (
        
        <Card className="card">
        <CardActionArea>

            <CardContent>
            <CardMedia
                component="img"
                image={`${process.env.PUBLIC_URL}/images/${picture}`}
                alt={title}
                height="180"
            />
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            
            </CardContent>
        </CardActionArea>

      </Card>
    ); 


}



export default Category;
