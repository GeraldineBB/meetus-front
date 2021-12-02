import './style.scss';
import Button from '@mui/material/Button';
import Logo from '../../assets/logo/logo.svg';
 
function Header() {
    return (
        <div className='header'>
            <img src={Logo} alt="Logo" />
            <Button className='header__button__login' color='success' variant="contained">Se connecter</Button>
            <Button className='header__button__signup' variant="contained">S'inscrire</Button>
        </div>
    )
};

export default Header;