// import './styles.scss';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {CardMedia} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from '@mui/material';


import music from "../../../../assets/illustrations/music.svg";


const Category = () => {

    return (
        <Card className="card">
        <CardActionArea>

            <CardContent>
            <CardMedia
                component="img"
                sizes="50"
                image={music}
                alt="music-illustrations"
            />
            <Typography variant="h5" component="div">
                Musique
            </Typography>
            
            </CardContent>
        </CardActionArea>

      </Card>
    ); 


}



export default Category;
