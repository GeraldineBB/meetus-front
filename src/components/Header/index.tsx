import './style.scss';
import Button from '@mui/material/Button';

function Header() {
    return (
        <div className='Header'>
            <Button className='header__button__login' variant="contained">Se connecter</Button>
            <Button className='header__button__signUp' variant="contained">S'inscrire</Button>
        </div>
    )
}

export default Header;