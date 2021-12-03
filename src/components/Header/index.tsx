import './style.scss';
import Button from '@mui/material/Button';
import Logo from '../../assets/logo/logo.svg';
 
function Header() {

    return (
        <div className='header'>
            <div className='header__logo'><img src={Logo} alt="Logo" /></div>
            <div className='header__buttons'>
                <Button  className='header__buttons__login' size="small" variant="contained">Se connecter</Button>
                <Button className='header__buttons__signup' size="small" variant="contained">S'inscrire</Button>
            </div>
    </div>
    )
    
};

export default Header;