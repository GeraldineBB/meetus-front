import './style.scss';
import Button from '@mui/material/Button';
import Logo from '../../assets/logo/logoWhite.png';
import { NavLink } from 'react-router-dom';
function Header() {

    return (
        <div className='header'>
            <div className='header__logo'><NavLink to='/' ><img src={Logo} alt="Logo" /></NavLink></div>
            <div className='header__buttons'>
                <NavLink  to='/login' style={{ textDecoration: 'none' }}><Button className='header__buttons__login' size="small" variant="contained">Se connecter</Button>
                </NavLink>
                <NavLink to='/signup' style={{ textDecoration: 'none' }}><Button className='header__buttons__signup' size="small" variant="contained">S'inscrire</Button></NavLink>
            </div>
    </div>
    )
    
};

export default Header;