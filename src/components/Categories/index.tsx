import './styles.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// import categories pictures
import music from '../../assets/illustrations/music.svg'
import concert from '../../assets/images/concert-event.jpg'

const Categories = () => (

    <div className="categories">
        
        <div className="category">
            <img className="category__img" src={music} alt="friends-illu" />
            <h3 className="category__name">Musique</h3>
        </div>
        <div className="category">
            <img className="category__img" src={music} alt="friends-illu" />
            <h3 className="category__name">Musique</h3>
        </div>
        <div className="category">
            <img className="category__img" src={music} alt="friends-illu" />
            <h3 className="category__name">Musique</h3>
        </div>

    </div>
);

export default Categories;
